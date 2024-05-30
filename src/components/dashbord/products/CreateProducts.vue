<template>

    <main>
        <PageHeader>
            <template #title>Products</template>
            <template #subtitle>Create A Products</template>
        </PageHeader>
        <!-- Main page content-->
        <div class="container-xl px-4 mt-n10">

            <!-- Example form-->

            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between">
                    <p>Products Management</p>
                    <RouterLink to='/dashboard/products' class="btn btn-primary btn-sm">All Products</RouterLink>
                </div>
                <div class="card-body">
                    <form @submit.prevent="createNewProduct" enctype="multipart/form-data">
                        <!-- Form Group (username)-->
                        <div class="mb-3">
                            <label class="small mb-1" for="name"><b>Product Name</b></label>
                            <input type="text" class="form-control" v-model="name" id="name"
                                placeholder="Enter Property Name">
                            <span v-if="errors.name" class="text-danger m-1">{{ errors.name[0] }}</span>
                        </div>


                        <div class="mb-3">
                            <label class="small mb-1" for="name"><b>Price</b></label>
                            <input type="number" class="form-control" v-model="price" id="price"
                                placeholder="Enter Product Price">
                            <span v-if="errors.price" class="text-danger m-1">{{ errors.price[0] }}</span>
                        </div>

                        <div class="mb-3">
                            <label class="small mb-1" for="quantity"><b>Quantity</b></label>
                            <input type="text" class="form-control" v-model="quantity" id="name"
                                placeholder="Enter Product Quantity">
                            <span v-if="errors.quantity" class="text-danger m-1">{{ errors.quantity[0] }}</span>
                        </div>

                        <div class="mb-3">
                            <label class="small mb-1" for="description"><b>Description</b></label>
                            <textarea class="form-control" v-model="description" id="description"
                                placeholder="Enter Product Description "></textarea>
                            <span v-if="errors.description" class="text-danger m-1">{{ errors.description[0] }}</span>
                        </div>


                        <div class="mb-3">
                            <label class="small mb-1" for="category_id"><b>Choose the Category</b></label>
                            <select class="form-control" v-model="category_id" id="category_id" autocomplete="off">
                                <option value="">None</option>
                                <option v-for="category in categories" :key="category.id" :value="category.id">{{
                        category.name
                    }}</option>
                            </select>
                            <span v-if="errors.category_id" class="text-danger m-1">{{ errors.category_id[0] }}</span>
                        </div>



                        <div class="mb-3">
                            <label class="small mb-1" for="ex-dropdown-input"><b>Choose the Shop</b></label>
                            <select class="form-control" v-model="shop_id" id="ex-dropdown-input" autocomplete="off">
                                <option value="">None</option>
                                <option v-for="shop in shops" :key="shop.id" :value="shop.id">{{
                        shop.name
                    }}</option>
                            </select>
                            <span v-if="errors.shop_id" class="text-danger m-1">{{ errors.shop_id[0] }}</span>
                        </div>




                        <div class="mb-3">
                            <label class="small mb-1" for="image"><b>Main Image</b></label>
                            <input type="file" class="form-control" @change="onFileChange" id="image"
                                placeholder="Enter Product Image">
                            <img v-if="imageUrl" :src="imageUrl" alt="Selected Image" class="mt-2" width="50"
                                height="50" />
                            <span v-if="errors.image" class="text-danger m-1">{{ errors.image[0] }}</span>
                        </div>


                        <div class="mb-3">
                            <label class="small mb-1" for="multipleimage"><b>Products Images</b></label>
                            <input type="file" multipic class="form-control"  id="multipleimage"
                                placeholder="Enter Product Image">
                            <img v-if="imageUrl" :src="imageUrl" alt="Selected Image" class="mt-2" width="50"
                                height="50" />
                            <span v-if="errors.image" class="text-danger m-1">{{ errors.image[0] }}</span>
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
import TomSelect from 'tom-select';

export default {
    components: {
        PageHeader
    },
    setup() {
        const store = useStore();
        const attribute_id = ref('');
        const property_id = ref('');
        const quantity = ref('');
        const errors = ref({});
        const attributes = ref([]);
        const properties = ref([]);
        const categories = ref([]);
        const category_id = ref('');
        const name = ref('');
        const image = ref('');
        const imageUrl = ref('');
        const images = ref([]);
        const shops = ref([]);
        const price = ref('');
        const description = ref('');
        const shop_id = ref('');

        const fetchCategories = async () => {
            try {
                await store.dispatch('categories/fetchAllCategories');
                categories.value = store.getters['categories/allCategories'];
            } catch (error) {
                console.log(error);
            }
        };

        const fetchAtributes = async () => {
            try {
                await store.dispatch('attributes/fetchAllAttributes');
                attributes.value = store.getters['attributes/allAttributes'];
            } catch (error) {
                console.log(error);
            }
        };

        const fetchProperties = async () => {
            try {
                await store.dispatch('properties/fetchAllProperties');
                properties.value = store.getters['properties/allProperties'];
            } catch (error) {
                console.log(error);
            }
        };



        const createNewProduct = async () => {
            errors.value = {};
            try {
                const formData = new FormData();
                formData.append('name', name.value);
                formData.append('attribute_id', attribute_id.value);
                formData.append('price', price.value);
                formData.append('property_id', property_id.value);
                formData.append('quantity', quantity.value);
                formData.append('description', description.value);
                formData.append('shop_id', shop_id.value);
                formData.append('category_id', category_id.value);
                formData.append('image', image.value);
                formData.append('images', images.value);

                // console.log(image.value);

                await store.dispatch('products/createProduct', formData);
                name.value = '';
                attribute_id.value = '';
                price.value = '';
                property_id.value = '';
                quantity.value = '';
                description.value = '';
                shop_id.value = '';
                category_id.value
                image.value = '';
                images.value = '';


            } catch (validationErrors) {
                errors.value = validationErrors;
                console.log(validationErrors);
            }
        };

        const searchSelect = () => {
            new TomSelect('#ex-dropdown-input', {
                plugins: ['dropdown_input', 'remove_button'],
            });
        }

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

        onMounted(fetchAtributes,fetchProperties,fetchCategories,
        searchSelect);


        return {
            name,
            shop_id,
            categories,
            shops,
            price,
            quantity,
            description,
            category_id,
            attribute_id,
            properties,
            property_id,
            category_id,
            errors,
            createNewProduct,
            attributes,
            image,
            imageUrl,
            onFileChange,

        };
    }
};
</script>

<style>
@import 'tom-select/dist/css/tom-select.css';
</style>