<template>

    <main>
        <PageHeader>
            <template #title>Properties</template>
            <template #subtitle>Create A Properties</template>
        </PageHeader>
        <!-- Main page content-->
        <div class="container-xl px-4 mt-n10">

            <!-- Example form-->

            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between">
                    <p>Properties Management</p>
                    <RouterLink to='/dashboard/properties' class="btn btn-primary btn-sm">All Properties</RouterLink>
                </div>
                <div class="card-body">
                    <form @submit.prevent="createNewProperty">
                        <!-- Form Group (username)-->
                        <div class="mb-3">
                            <label class="small mb-1" for="name"><b>Property Name</b></label>
                            <input type="text" class="form-control" v-model="name" id="name"
                                placeholder="Enter Property Name">
                            <span v-if="errors.name" class="text-danger m-1">{{ errors.name[0] }}</span>
                        </div>
                    
                
                        <div class="mb-3">
                            <label class="small mb-1" for="attribute_id"><b>Attributes</b></label>
                            <select class="form-control" v-model="attribute_id" id="attribute_id">
                                <option value="">None</option>
                                <option v-for="attribute in attributes" :key="attribute.id" :value="attribute.id">{{
                        attribute.name
                    }}</option>
                            </select>
                            <span v-if="errors.attribute_id" class="text-danger m-1">{{ errors.attribute_id[0] }}</span>
                        </div>
                        <!-- Save changes button-->
                        <button class="btn btn-primary" type="submit">Create</button>
                    </form>
                </div>
            </div>

        </div>
    </main>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import PageHeader from '@/components/dashbord/dashboardSlots/PageHeader.vue';

export default {
    components: {
        PageHeader
    },
    setup() {
        const store = useStore();
        const name = ref('');
        const attribute_id = ref('');
        const errors = ref({});
        const attributes = ref([]);



        const fetchAtributes = async () => {
            try {
                await store.dispatch('attributes/fetchAllAttributes');
                attributes.value = store.getters['attributes/allAttributes'];
            } catch (error) {
                console.log(error);
            }
        };



        const createNewProperty = async () => {
            errors.value = {};
            try {
                const formData = new FormData();
                formData.append('name', name.value);
                formData.append('attribute_id', attribute_id.value);

                // console.log(image.value);

                await store.dispatch('properties/createProperty', formData);
                name.value = '';
                attribute_id.value = '';
            } catch (validationErrors) {
                errors.value = validationErrors;
                console.log(validationErrors);
            }
        };

        onMounted(fetchAtributes);


        return {
            name,
            attribute_id,
            errors,
            createNewProperty,
            attributes,
            

        };
    }
};
</script>