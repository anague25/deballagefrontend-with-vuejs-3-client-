<template>
    <main>
        <PageHeader>
            <template #title>Attributes</template>
            <template #subtitle> Listes des Attributes</template>
        </PageHeader>
        <Loader></Loader>
        <!-- Main page content-->
        <div class="container-xl px-4 mt-n10">
            <!-- Example DataTable for Dashboard Demo-->
            <div class="card mb-4">
                <div class="card-header">Gerer les attributes</div>
                <div class="card-body">
                    <div class="dataTable-wrapper no-footer fixed-columns">
                        <div class="dataTable-top">
                            <router-link class="btn btn-primary btn-sm" to="/dashboard/attributes/create">Creer un
                                Attribute</router-link>
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
                                    <tr v-for="attribute in filterAttributes" :key="attribute.id">
                                        <td>{{ attribute.name }}</td>
                                        <td>
                                            <button @click="confirmDelete(attribute.id)"
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
                                            <router-link :to="'/dashboard/attributes/edit/' + attribute.id"
                                                class="btn btn-primary btn-sm m-1">Modifier</router-link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="dataTable-bottom">
                            <div class="dataTable-info">
                                Showing {{ (currentPage - 1) * attributesPerPage + 1 }} to {{ Math.min(currentPage *
                                    attributesPerPage, totalAttributes) }} of {{ totalAttributes }} entries
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

        const fetchAttributes = async (page = 1) => {
            store.dispatch('loader/setLoading', true);
            try {
                await store.dispatch('attributes/fetchAttributes', { page: page, search: searchInput.value });
                updateURLWithCurrentPage(page);
            } catch (error) {
                console.error('Failed to fetch attributes:', error);
            }finally{
                store.dispatch('loader/setLoading', false);
            }
        };

        const fetchPage = (page) => {
            if (page > 0 && page <= totalPages.value) {
                fetchAttributes(page);
            }
        };

        const confirmDelete = (attributeId) => {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    store.dispatch('attributes/deleteAttribute', attributeId);
                    fetchAttributes();
                }
            });
        };

        const { attributes, totalPages, currentPage, attributesPerPage, totalAttributes } = toRefs(store.state.attributes);

        const filterAttributes = computed(() => {
            const searchQuery = searchInput.value.toLowerCase().trim();

            if (!searchQuery) {
                return attributes.value;
            }

            return attributes.value.filter(attribute => {
                return attribute.name && attribute.name.toLowerCase().includes(searchQuery);
            });
        });

        watch(searchInput, (newValue, oldValue) => {
            fetchAttributes();
        });

        onMounted(async () => {
            const currentPage = route.query.page || 1;
            await fetchAttributes(currentPage);

            if (route.query.success === 'true') {
                Notification.success('Attribute updated successfully');
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
            attributes,
            confirmDelete,
            fetchAttributes,
            fetchPage,
            searchInput,
            filterAttributes,
            totalPages,
            currentPage,
            attributesPerPage,
            totalAttributes
        };
    }
};
</script>
