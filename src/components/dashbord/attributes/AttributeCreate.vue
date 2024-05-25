<template>

    <main>
        <PageHeader>
            <template #title>Attributes</template>
            <template #subtitle>Create An Attributes</template>
        </PageHeader>
        <!-- Main page content-->
        <div class="container-xl px-4 mt-n10">

            <!-- Example form-->

            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between">
                    <p>Attributes Management</p>
                    <RouterLink to='/dashboard/attributes' class="btn btn-primary btn-sm">All attributes</RouterLink>
                </div>
                <div class="card-body">
                    <form @submit.prevent="createNewAttribute">
                        <!-- Form Group (username)-->
                        <div class="mb-3">
                            <label class="small mb-1" for="name"><b>Attribute Name</b></label>
                            <input type="text" class="form-control" v-model="name" id="name" required
                                placeholder="Enter Attribute Name">
                            <span v-if="errors.name" class="text-danger m-1">{{ errors.name[0] }}</span>
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
import { ref } from 'vue';
import { useStore } from 'vuex';
import PageHeader from '@/components/dashbord/dashboardSlots/PageHeader.vue';

export default {
    components: {
    PageHeader
  },
    setup() {
        const store = useStore();
        const name = ref('');
        const errors = ref({});

        const createNewAttribute = async () => {
            errors.value = {};
            try {
                await store.dispatch('attributes/createAttribute', { name: name.value });
                name.value = '';
            } catch (validationErrors) {
                errors.value = validationErrors;
            }
        };

        return {
            name,
            errors,
            createNewAttribute,
        
        };
    }
};
</script>