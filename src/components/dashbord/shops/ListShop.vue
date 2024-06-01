<template>
    <main>
        <PageHeader>
            <template #title>Products</template>
            <template #subtitle>The List Of Products</template>
        </PageHeader>
        <!-- Main page content-->
        <div class="container-xl px-4 mt-n10">
            <!-- Example DataTable for Dashboard Demo-->
            <div class="card mb-4">
                <div class="card-header">Products Management</div>
                <div class="card-body">
                    <div class="dataTable-wrapper no-footer fixed-columns">
                        <div class="dataTable-top">
                            <router-link class="btn btn-primary btn-sm" to="/dashboard/products/create">Create New
                                Products</router-link>
                            <div class="dataTable-search">
                                <input class="dataTable-input" placeholder="Search..." v-model="searchInput"
                                    type="search">
                            </div>
                        </div>
                        <div class="dataTable-container">
                            <table class="dataTable-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Description</th>
                                        <th>Shop</th>
                                        <th>Category</th>
                                        <th>Image</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="product in filterProducts" :key="product.id">
                                        <td>{{ product.name }}</td>
                                        <td>{{ product.price }}</td>
                                        <td>{{ product.quantity }}</td>
                                        <td>{{ product.description }}</td>
                                        <td>{{ product.shop?.name }}</td>
                                        <td>{{ product.category?.name }}</td>
                                        <td>
                                            <img :src="path + product.image" alt="product Image" width="50"
                                                height="50">
                                        </td>
                                        <td>
                                            <button @click="confirmDelete(product.id)"
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
                                            <router-link :to="'/dashboard/products/edit/' + product.id"
                                                class="btn btn-primary btn-sm m-1">Edit</router-link>
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


export default {
    components: {
        PageHeader,
        Pagination
    },
    setup() {
        const store = useStore();
        const route = useRoute();
        const router = useRouter();
        const searchInput = ref('');
        const path = store.getters['getImagePaths/getPath'];

        const fetchProducts = async (page = 1) => {
            try {
                await store.dispatch('products/fetchProducts', { page: page, search: searchInput.value });
                updateURLWithCurrentPage(page);
            } catch (error) {
                console.error('Failed to fetch products:', error);
            }
        };

        const fetchPage = (page) => {
            if (page > 0 && page <= totalPages.value) {
                fetchProducts(page);
            }
        };

        const confirmDelete = (productId) => {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    // console.log(neighborhoodId)
                    store.dispatch('products/deleteProduct', productId);
                    fetchProperties();
                }
            });
        };

        const { products, totalPages, currentPage, elementsPerPage, totalElements } = toRefs(store.state.products);
       

        const filterProducts = computed(() => {
            const searchQuery = searchInput.value.toLowerCase().trim();

            if (!searchQuery) {
                return products.value;
            }

            return products.value.filter(product => {
                return product.name && product.name.toLowerCase().includes(searchQuery);
            });
        });

        watch(searchInput, (newValue, oldValue) => {
            fetchProducts();
            console.log(products.value);
        });





        onMounted(async () => {
            const currentPage = route.query.page || 1;
            await fetchProducts(currentPage);

            if (route.query.success === 'true') {
                Notification.success('Products updated successfully');
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
            products,
            confirmDelete,
            fetchProducts,
            fetchPage,
            searchInput,
            filterProducts,
            totalPages,
            currentPage,
            elementsPerPage,
            totalElements,
            path,
        };
    }
};
</script>
