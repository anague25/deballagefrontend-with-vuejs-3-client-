<template>

    <main>
        <PageHeader>
            <template #title>Villes</template>
            <template #subtitle>Modifier une ville</template>
        </PageHeader>
        <Loader></Loader>
        <!-- Main page content-->
        <div class="container-xl px-4 mt-n10">

            <!-- Example form-->

            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between">
                    <p>Gerer les Villes</p>
                    <RouterLink to='/dashboard/cities' class="btn btn-primary btn-sm">Villes</RouterLink>
                </div>
                <div class="card-body">
                    <form @submit.prevent="updateExistingCity">
                        <!-- Form Group (username)-->
                        <div class="mb-3">
                            <label class="small mb-1" for="name"><b>Nome</b></label>
                            <input type="text" class="form-control" v-model="name" id="name"
                                placeholder="Enter Category Name">
                            <span v-if="errors.name" class="text-danger m-1">{{ errors.name[0] }}</span>
                        </div>
                        <!-- Save changes button-->
                        <button class="btn btn-primary" type="submit">Modifier</button>
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
import Loader from '@/components/dashbord/loader/Loader.vue';

export default {
    components: {
        PageHeader,
        Loader
    },
    setup() {
        const store = useStore();
        const route = useRoute();
        const router = useRouter();
        const name = ref('');
        const errors = ref({});



        const loadCategory = async (id) => {
            id = Number(id); // Convertir l'ID en nombre
            const city = store.getters['cities/cityById'](id);
            if (city) {
                name.value = city.name;
            } else {
                router.push('/dashboard/cities');
            }
        };


        const updateExistingCity = async () => {
            errors.value = {};
            store.dispatch('loader/setLoading', true);
            try {
                await store.dispatch('cities/updateCity', { id: route.params.id, name: name.value });
                const currentPage = store.state.cities.currentPage; // Utilisez la pagination actuelle dans la redirection
                router.push({ path: '/dashboard/cities', query: { success: true, page: currentPage } });
            } catch (validationErrors) {
                errors.value = validationErrors;
            }finally{
                store.dispatch('loader/setLoading', false);
            }
        };




        onMounted(() => {
            loadCategory(route.params.id);
        });

        return {
            name,
            errors,
            updateExistingCity,
        };
    }
};
</script>

<style>
.error {
    color: red;
}
</style>
