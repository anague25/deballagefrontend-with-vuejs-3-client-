<template>

    <main>
        <PageHeader>
            <template #title>Propriete</template>
            <template #subtitle>Modifier une propriete</template>
        </PageHeader>
        <Loader></Loader>
        <!-- Main page content-->
        <div class="container-xl px-4 mt-n10">

            <!-- Example form-->

            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between">
                    <p>Gerer les Proprietes</p>
                    <RouterLink to='/dashboard/properties' class="btn btn-primary btn-sm">Proprietes
                    </RouterLink>
                </div>
                <div class="card-body">
                    <form @submit.prevent="updateExistingProperty">
                        <!-- Form Group (username)-->
                        <div class="mb-3">
                            <label class="small mb-1" for="name"><b>Nom</b></label>
                            <input type="text" class="form-control" v-model="name" id="name"
                                placeholder="Enter Property Name">
                            <span v-if="errors.name" class="text-danger m-1">{{ errors.name[0] }}</span>
                        </div>

                        <div class="mb-3">
                            <label class="small mb-1" for="attribute_id"><b>Attribute</b></label>
                            <select class="form-control" v-model="attribute_id" id="attribute_id">
                                <option value="">None</option>
                                <option v-for="attribute in attributes" :key="attribute.id" :value="attribute.id">{{
                                    attribute.name
                                }}</option>
                            </select>
                            <span v-if="errors.attribute_id" class="text-danger m-1">{{ errors.attribute_id[0] }}</span>
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
        const attribute_id = ref('');
        const errors = ref({});
        const attributes = ref([]);



        const loadProperty = async (id) => {
            id = Number(id); // Convertir l'ID en nombre
            const property = store.getters['properties/propertyById'](id);
            if (property) {
                name.value = property.name;
                console.log(property)
                if (property.attribute) {
                    attribute_id.value = property.attribute.id;
                }
            } else {
                router.push('/dashboard/properties');
            }
        };


        const updateExistingProperty = async () => {
            errors.value = {};
            store.dispatch('loader/setLoading', true);
            try {
                console.log(attribute_id.value, name.value);
                await store.dispatch('properties/updateProperty', { id: route.params.id, name: name.value, attribute_id: attribute_id.value });
                const currentPage = store.state.properties.currentPage; // Utilisez la pagination actuelle dans la redirection
                router.push({ path: '/dashboard/properties', query: { success: true, page: currentPage } });
            } catch (validationErrors) {
                errors.value = validationErrors;
            }finally{
                store.dispatch('loader/setLoading', false);
            }
        };

        const fetchAttributes = async () => {
            store.dispatch('loader/setLoading', true);
            try {
                await store.dispatch('attributes/fetchAllAttributes');
                attributes.value = store.getters['attributes/allAttributes'];
            } catch (error) {
                console.log(error);
            }finally{
                store.dispatch('loader/setLoading', false);
            }
        };


        onMounted(() => {
            fetchAttributes();
            // console.log(fetchCategories);
            loadProperty(route.params.id);
        });

        return {
            name,
            attribute_id,
            errors,
            attributes,
            updateExistingProperty,
        };
    }
};
</script>

<style>
.error {
    color: red;
}
</style>
