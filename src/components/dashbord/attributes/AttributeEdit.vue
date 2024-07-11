<template>

    <main>
        <PageHeader>
            <template #title>Les Attributes</template>
            <template #subtitle>Modifier un attributes</template>
        </PageHeader>
        <Loader></Loader>
        <!-- Main page content-->
        <div class="container-xl px-4 mt-n10">

            <!-- Example form-->

            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between">
                    <p>Gerer les attributes</p>
                    <RouterLink to='/dashboard/attributes' class="btn btn-primary btn-sm">Les attributes</RouterLink>
                </div>
                <div class="card-body">
                    <form @submit.prevent="updateExistingAttribute">
                        <!-- Form Group (username)-->
                        <div class="mb-3">
                            <label class="small mb-1" for="name"><b>Nom</b></label>
                            <input type="text" class="form-control" v-model="name" id="name" required
                                placeholder="Enter Attribute Name">
                            <span v-if="errors.name" class="text-danger m-1">{{ errors.name[0] }}</span>
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

        const loadAttribute = async (id) => {
            id = Number(id); // Convertir l'ID en nombre
            const attribute = store.getters['attributes/attributeById'](id);
            if (attribute) {
                name.value = attribute.name;
            } else {
                router.push('/dashboard/attributes');
            }
        };


        const updateExistingAttribute = async () => {
            errors.value = {};
            store.dispatch('loader/setLoading', true);
            try {
                await store.dispatch('attributes/updateAttribute', { id: Number(route.params.id), name: name.value });
                const currentPage = store.state.attributes.currentPage; // Utilisez la pagination actuelle dans la redirection
                router.push({ path: '/dashboard/attributes', query: { success: true, page: currentPage } });
            } catch (validationErrors) {
                errors.value = validationErrors;
                console.log(validationErrors);
            }finally{
                store.dispatch('loader/setLoading', false);
            }
        };




        onMounted(() => {
            loadAttribute(route.params.id);
        });

        return {
            name,
            errors,
            updateExistingAttribute,
        };
    }
};
</script>

<style>
.error {
    color: red;
}
</style>
