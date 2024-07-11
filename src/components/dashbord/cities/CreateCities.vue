<template>

    <main>
        <PageHeader>
            <template #title>Villes</template>
            <template #subtitle>Creer une ville</template>
        </PageHeader>
        <Loader></Loader>
        <!-- Main page content-->
        <div class="container-xl px-4 mt-n10">

            <!-- Example form-->

            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between">
                    <p>Gerer les villes</p>
                    <RouterLink to='/dashboard/cities' class="btn btn-primary btn-sm">Les villes</RouterLink>
                </div>
                <div class="card-body">
                    <form @submit.prevent="createNewCity">
                        <!-- Form Group (username)-->
                        <div class="mb-3">
                            <label class="small mb-1" for="name"><b>Nom</b></label>
                            <input type="text" class="form-control" v-model="name" id="name"
                                placeholder="Enter Category Name">
                            <span v-if="errors.name" class="text-danger m-1">{{ errors.name[0] }}</span>
                        </div>

                        <!-- Save changes button-->
                        <button class="btn btn-primary" type="submit">Creer</button>
                    </form>
                </div>
            </div>

        </div>
    </main>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import PageHeader from '@/components/dashbord/dashboardSlots/PageHeader.vue';
import Loader from '@/components/dashbord/loader/Loader.vue';

export default {
    components: {
        PageHeader,
        Loader
    },
    setup() {
        const store = useStore();
        const name = ref('');
        const errors = ref({});



        const createNewCity = async () => {
            store.dispatch('loader/setLoading', true);
            errors.value = {};
            try {
                const formData = new FormData();
                formData.append('name', name.value);
                // console.log(image.value);

                await store.dispatch('cities/createCity', formData);
                name.value = '';
            } catch (validationErrors) {
                errors.value = validationErrors;
                console.log(validationErrors);
            }finally{
                store.dispatch('loader/setLoading', false);
            }
        };


        return {
            name,
            errors,
            createNewCity,

        };
    }
};
</script>