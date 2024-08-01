<template>
    <main>
        <PageHeader>
            <template #title>Boutiques</template>
            <template #subtitle>Listes des boutiques</template>
        </PageHeader>
        <Loader></Loader>
        <!-- Main page content-->
        <div class="container-xl px-4 mt-n10">
            <!-- Example DataTable for Dashboard Demo-->
            <div class="card mb-4">
                <div class="card-header">Gerer les boutiques</div>
                <div class="card-body">
                    <div class="dataTable-wrapper no-footer fixed-columns">
                        <div class="dataTable-top">
                            <router-link class="btn btn-primary btn-sm" to="/dashboard/shops/create">Creer une
                                boutique</router-link>
                            <div class="dataTable-search">
                                <input class="dataTable-input" placeholder="Search..." v-model="searchInput"
                                    type="search">
                            </div>
                        </div>
                        <div class="dataTable-container">
                            <table class="dataTable-table">
                                <thead>
                                    <tr>
                                        <th>Nom</th>
                                        <th>Description</th>
                                        <th>Utilisateur</th>
                                        <th>Etat</th>
                                        <th>Couverture</th>
                                        <th>Profile</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="shop in filterShops" :key="shop.id">
                                        <td>{{ shop.name }}</td>
                                        <td>{{ shop.description }}</td>
                                        <td>{{ shop.user?.firstName }}</td>
                                        <td>{{ shop.state }}</td>
                                        <td>
                                            <img :src="path + shop.cover" alt="shop cover" width="50" height="50">
                                        </td>
                                        <td>
                                            <img :src="path + shop.profile" alt="shop profile" width="50" height="50">
                                        </td>
                                        <td>
                                            <button @click="confirmDelete(shop.id)"
                                                class="btn btn-datatable m-1 btn-icon btn-transparent-dark">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                    class="feather feather-trash-2">
                                                    <polyline points="3 6 5 6 21 6"></polyline>
                                                    <path
                                                        d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                                    </path>
                                                    <line x1="10" y1="11" x2="10" y2="17"></line>
                                                    <line x1="14" y1="11" x2="14" y2="17"></line>
                                                </svg>
                                            </button>
                                            <router-link :to="'/dashboard/shops/edit/' + shop.id"
                                                class="btn btn-primary btn-sm m-1">Modifier</router-link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="dataTable-bottom">
                            <div class="dataTable-info">
                                Showing {{ (currentPage - 1) * elementsPerPage + 1 }} to {{ Math.min(currentPage *
                                    elementsPerPage, totalElements) }} of {{ totalElements }} entries
                            </div>
                            <Pagination :currentPage="currentPage" :totalPages="totalPages" :fetchPage="fetchPage" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import { computed, onMounted, ref, toRefs, watch } from 'vue';
import { useStore } from 'vuex';
import Swal from 'sweetalert2';
import { useRoute, useRouter } from 'vue-router';
import Notification from '@/plugins/Notification';
import PageHeader from '@/components/dashbord/dashboardSlots/PageHeader.vue';
import Pagination from '@/components/dashbord/dashboardSlots/Pagination.vue';
import Loader from '@/components/dashbord/loader/Loader.vue';


export default {
    components: {
        PageHeader,
        Pagination,
        Loader
    },
    setup() {
        const store = useStore();
        const route = useRoute();
        const router = useRouter();
        const searchInput = ref('');
        const path = store.getters['getImagePaths/getPath'];

        const fetchShops = async (page = 1) => {
            store.dispatch('loader/setLoading', true);
            try {
                await store.dispatch('shops/fetchShops', { page: page, search: searchInput.value });
                updateURLWithCurrentPage(page);
                console.log(shops.value);
            } catch (error) {
                console.error('Failed to fetch shops:', error);
            }finally{
                store.dispatch('loader/setLoading', false);
            }
        };



        const fetchPage = (page) => {
            if (page > 0 && page <= totalPages.value) {
                fetchShops(page);
            }
        };

        const confirmDelete = (shopId) => {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    // console.log(neighborhoodId)
                    store.dispatch('shops/deleteShop', shopId);
                    fetchShops();
                }
            });
        };

        const { shops, totalPages, currentPage, elementsPerPage, totalElements } = toRefs(store.state.shops);

        const filterShops = computed(() => {
            const searchQuery = searchInput.value.toLowerCase().trim();

            if (!searchQuery) {
                return shops.value;
            }

            return shops.value.filter(shop => {
                return shop.name && shop.name.toLowerCase().includes(searchQuery);
            });
        });

        watch(searchInput, (newValue, oldValue) => {
            fetchShops();
        });





        onMounted(async () => {
            const currentPage = route.query.page || 1;
            await fetchShops(currentPage);

            if (route.query.success === 'true') {
                Notification.success('Shops updated successfully');
                setTimeout(() => {
                    const { success, ...query } = route.query;
                    router.replace({ query });
                }, 2000);
            }
        });

        const updateURLWithCurrentPage = (page) => {
            const currentRoute = { ...route, query: { ...route.query, page } };
            router.replace(currentRoute);
        };

        return {
            shops,
            confirmDelete,
            fetchShops,
            fetchPage,
            searchInput,
            filterShops,
            totalPages,
            currentPage,
            elementsPerPage,
            totalElements,
            path,
        };
    }
};
</script>
