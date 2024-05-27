<template>

    <main>
        <PageHeader>
            <template #title>Neighborhoods</template>
            <template #subtitle>Edit A Neighborhood</template>
        </PageHeader>
        <!-- Main page content-->
        <div class="container-xl px-4 mt-n10">

            <!-- Example form-->

            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between">
                    <p>Neighborhoods Management</p>
                    <RouterLink to='/dashboard/neighborhoods' class="btn btn-primary btn-sm">All Neighborhoods</RouterLink>
                </div>
                <div class="card-body">
                    <form @submit.prevent="updateExistingNeighborhood">
                        <!-- Form Group (username)-->
                        <div class="mb-3">
                            <label class="small mb-1" for="name"><b>Neighborhood Name</b></label>
                            <input type="text" class="form-control" v-model="name" id="name"
                                placeholder="Enter Category Name">
                            <span v-if="errors.name" class="text-danger m-1">{{ errors.name[0] }}</span>
                        </div>

                        <div class="mb-3">
                            <label class="small mb-1" for="city_id"><b>Cities</b></label>
                            <select class="form-control" v-model="city_id" id="city_id">
                                <option value="">None</option>
                                <option v-for="city in cities" :key="city.id" :value="city.id">{{
                        city.name
                    }}</option>
                            </select>
                            <span v-if="errors.city_id" class="text-danger m-1">{{ errors.city_id[0] }}</span>
                        </div>
                        <!-- Save changes button-->
                        <button class="btn btn-primary" type="submit">Update</button>
                    </form>
                </div>
            </div>

        </div>
    </main>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import PageHeader from '@/components/dashbord/dashboardSlots/PageHeader.vue';

export default {
    components: {
        PageHeader
    },
    setup() {
        const store = useStore();
        const route = useRoute();
        const router = useRouter();
        const name = ref('');
        const city_id = ref('');
        const errors = ref({});
        const cities = ref([]);



        const loadNeighborhood = async (id) => {
            id = Number(id); // Convertir l'ID en nombre
            const neighborhood = store.getters['neighborhoods/neighborhoodById'](id);
            if (neighborhood) {
                name.value = neighborhood.name;
                if (neighborhood.city_id) {
                    city_id.value = neighborhood.city_id;
                }
            } else {
                router.push('/dashboard/neighborhoods');
            }
        };


        const updateExistingNeighborhood = async () => {
            errors.value = {};
            try {
                await store.dispatch('neighborhoods/updateNeighborhood', {id:route.params.id,name:name.value,city_id:city_id.value});
                const currentPage = store.state.cities.currentPage; // Utilisez la pagination actuelle dans la redirection
                router.push({ path: '/dashboard/neighborhoods', query: { success: true, page: currentPage } });
            } catch (validationErrors) {
                errors.value = validationErrors;
            }
        };

        const fetchCities = async () => {
            try {
                await store.dispatch('cities/fetchAllCities');
                cities.value = store.getters['cities/allCities'];
            } catch (error) {
                console.log(error);
            }
        };

    
        onMounted(() => {
            fetchCities();
            // console.log(fetchCategories);
            loadNeighborhood(route.params.id);
        });

        return {
            name,
            city_id,
            errors,
            cities,
            updateExistingNeighborhood,
        };
    }
};
</script>

<style>
.error {
    color: red;
}
</style>
