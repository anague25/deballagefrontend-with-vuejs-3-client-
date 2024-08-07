<template>
    <main>
        <PageHeader>
            <template #title>Villes</template>
            <template #subtitle>Listes des villes</template>
        </PageHeader>
        <Loader></Loader>
        <!-- Main page content-->
        <div class="container-xl px-4 mt-n10">
            <!-- Example DataTable for Dashboard Demo-->
            <div class="card mb-4">
                <div class="card-header">Gerer les villes</div>
                <div class="card-body">
                    <div class="dataTable-wrapper no-footer fixed-columns">
                        <div class="dataTable-top">
                            <router-link class="btn btn-primary btn-sm" to="/dashboard/cities/create">Creer une
                                ville</router-link>
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
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="city in filterCities" :key="city.id">
                                        <td>{{ city.name }}</td>
                                        <td>
                                            <button @click="confirmDelete(city.id)"
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
                                            <router-link :to="'/dashboard/cities/edit/' + city.id"
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

        const fetchCities = async (page = 1) => {
            store.dispatch('loader/setLoading', true);
            try {
                await store.dispatch('cities/fetchCities', { page: page, search: searchInput.value });
                updateURLWithCurrentPage(page);
            } catch (error) {
                console.error('Failed to fetch Categories:', error);
            }finally{
                store.dispatch('loader/setLoading', false);
            }
        };

        const fetchPage = (page) => {
            if (page > 0 && page <= totalPages.value) {
                fetchCities(page);
            }
        };

        const confirmDelete = (cityId) => {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    store.dispatch('cities/deleteCity', cityId);
                    fetchCities();
                }
            });
        };

        const { cities, totalPages, currentPage, elementsPerPage, totalElements } = toRefs(store.state.cities);

        const filterCities = computed(() => {
            const searchQuery = searchInput.value.toLowerCase().trim();

            if (!searchQuery) {
                return cities.value;
            }

            return cities.value.filter(city => {
                return city.name && city.name.toLowerCase().includes(searchQuery);
            });
        });

        watch(searchInput, (newValue, oldValue) => {
            fetchCities();
        });
        watch(searchInput, (newValue, oldValue) => {
            fetchCities();
        });

        onMounted(async () => {
            const currentPage = route.query.page || 1;
            await fetchCities(currentPage);

            if (route.query.success === 'true') {
                Notification.success('Cities updated successfully');
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
            cities,
            confirmDelete,
            fetchCities,
            fetchPage,
            searchInput,
            filterCities,
            totalPages,
            currentPage,
            elementsPerPage,
            totalElements,
        };
    }
};
</script>
