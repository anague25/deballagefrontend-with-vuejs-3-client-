<template>

    <main>
        <PageHeader>
            <template #title>Categories</template>
            <template #subtitle>Edit A Categories</template>
        </PageHeader>
        <!-- Main page content-->
        <div class="container-xl px-4 mt-n10">

            <!-- Example form-->

            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between">
                    <p>Categories Management</p>
                    <RouterLink to='/dashboard/categories' class="btn btn-primary btn-sm">All Categories</RouterLink>
                </div>
                <div class="card-body">
                    <form @submit.prevent="updateExistingCategory">
                        <!-- Form Group (username)-->
                        <div class="mb-3">
                            <label class="small mb-1" for="name"><b>Category Name</b></label>
                            <input type="text" class="form-control" v-model="name" id="name"
                                placeholder="Enter Category Name">
                            <span v-if="errors.name" class="text-danger m-1">{{ errors.name[0] }}</span>
                        </div>

                        <div class="mb-3">
                            <label class="small mb-1" for="description"><b>Category Description</b></label>
                            <input type="text" class="form-control" v-model="description" id="description"
                                placeholder="Enter Category Description">
                            <span v-if="errors.description" class="text-danger m-1">{{ errors.description[0] }}</span>
                        </div>
                        <div class="mb-3">
                            <label class="small mb-1" for="image"><b>Category Image</b></label>
                            <input type="file" class="form-control" @change="onFileChange" id="image"
                                placeholder="Enter Category Image">
                            <img v-if="imageUrl" :src="imageUrl" alt="Selected Image" class="mt-2" width="50"
                                height="50" />
                            <span v-if="errors.image" class="text-danger m-1">{{ errors.image[0] }}</span>
                        </div>

                        <div class="mb-3">
                            <label class="small mb-1" for="parent_id"><b>Parent Category</b></label>
                            <select class="form-control" v-model="parent_id" id="parent_id">
                                <option value="">None</option>
                                <option v-for="category in categories" :key="category.id" :value="category.id">{{
                        category.name
                    }}</option>
                            </select>
                            <span v-if="errors.parent_id" class="text-danger m-1">{{ errors.parent_id[0] }}</span>
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
        const description = ref('');
        const image = ref(null);
        const imageUrl = ref(null);
        const parent_id = ref('');
        const errors = ref({});
        const categories = ref([]);



        const loadCategory = async (id) => {
            id = Number(id); // Convertir l'ID en nombre
            const category = store.getters['categories/categoryById'](id);
            const path = store.getters['categories/getPath'];
            if (category) {
                name.value = category.name;
                description.value = category.description;
                imageUrl.value = path + category.image;
                console.log(imageUrl.value);
                if (category.parent_id) {

                    parent_id.value = category.parent_id;
                }
            } else {
                router.push('/dashboard/categories');
            }
        };


        const updateExistingCategory = async () => {
            errors.value = {};
            try {

                const formData = new FormData();
                formData.append('name', name.value);
                formData.append('description', description.value);
                if (image.value) {
                    formData.append('image', image.value);
                }
                formData.append('parent_id', parent_id.value);
                formData.append('id', route.params.id);

                await store.dispatch('categories/updateCategory', formData);
                const currentPage = store.state.categories.currentPage; // Utilisez la pagination actuelle dans la redirection
                router.push({ path: '/dashboard/categories', query: { success: true, page: currentPage } });
            } catch (validationErrors) {
                errors.value = validationErrors;
            }
        };

        const fetchCategories = async () => {
            try {
                await store.dispatch('categories/fetchAllCategories');
                categories.value = store.getters['categories/allCategories'];
            } catch (error) {
                console.log(error);
            }
        };

        const onFileChange = (e) => {
            const files = e.target.files;
            if (files.length > 0) {
                image.value = files[0];
                const reader = new FileReader();
                reader.onload = (e) => {
                    imageUrl.value = e.target.result;
                };
                reader.readAsDataURL(image.value); // Utilisez image.value plutôt que imageUrl.value
            }
        };




        onMounted(() => {
            fetchCategories();
            // console.log(fetchCategories);
            loadCategory(route.params.id);
        });

        return {
            name,
            description,
            image,
            imageUrl,
            parent_id,
            errors,
            onFileChange,
            categories,
            updateExistingCategory,
        };
    }
};
</script>

<style>
.error {
    color: red;
}
</style>
