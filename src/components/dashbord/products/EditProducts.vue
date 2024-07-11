<template>

    <main>
        <PageHeader>
            <template #title>Produits</template>
            <template #subtitle>Modifier un Produit</template>
        </PageHeader>
        <Loader></Loader>
        <!-- Main page content-->
        <div class="container-xl px-4 mt-n10">

            <!-- Example form-->

            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between">
                    <p>Gerer les produits</p>
                    <RouterLink to='/dashboard/products' class="btn btn-primary btn-sm">Produits</RouterLink>
                </div>
                <div class="card-body">
                    <form @submit.prevent="updateExistingProduct" enctype="multipart/form-data">
                        <!-- Form Group (username)-->
                        <div class="mb-3">
                            <label class="small mb-1" for="name"><b>Nom</b></label>
                            <input type="text" class="form-control" v-model="name" id="name"
                                placeholder="Enter Property Name">
                            <span v-if="errors.name" class="text-danger m-1">{{ errors.name[0] }}</span>
                        </div>


                        <div class="mb-3">
                            <label class="small mb-1" for="name"><b>Prix</b></label>
                            <input type="number" class="form-control" v-model="price" id="price"
                                placeholder="Enter Product Price">
                            <span v-if="errors.price" class="text-danger m-1">{{ errors.price[0] }}</span>
                        </div>

                        <div class="mb-3">
                            <label class="small mb-1" for="quantity"><b>Quantite</b></label>
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
                            <label class="small mb-1" for="category_id"><b>Categorie</b></label>
                            <select class="form-control" v-model="category_id" id="category_id" autocomplete="off">
                                <option value="">None</option>
                                <option v-for="category in categories" :key="category.id" :value="category.id">{{
                                    category.name
                                }}</option>
                            </select>
                            <span v-if="errors.category_id" class="text-danger m-1">{{ errors.category_id[0] }}</span>
                        </div>



                        <div class="mb-3">
                            <label class="small mb-1" for="ex-dropdown-input"><b>Boutique</b></label>
                            <select class="form-control" v-model="shop_id" id="ex-dropdown-input" autocomplete="off">
                                <option value="">None</option>
                                <option v-for="shop in shops" :key="shop.id" :value="shop.id">{{
                                    shop.name
                                }}</option>
                            </select>
                            <span v-if="errors.shop_id" class="text-danger m-1">{{ errors.shop_id[0] }}</span>
                        </div>

                        <!-- Champs pour les attributs et propriétés -->
                        <div v-for="(field, index) in attribute_fields" :key="index">
                            <label :for="'attribute_' + index"><b>Attribute:</b></label>
                            <select class="form-control" :id="'attribute_' + index" v-model="field.attribute_id"
                                @change="fetchProperties(field.attribute_id, index)">
                                <option v-for="attribute in attributes" :value="attribute.id">{{ attribute.name }}
                                </option>
                            </select>

                            <label :for="'property_' + index"><b>Propriete:</b></label>
                            <select class="form-control" :id="'property_' + index" v-model="field.property_id">
                                <option v-for="property in properties[index]" :value="property.id">{{ property.name }}
                                </option>
                            </select>

                            <button class="btn btn-danger btn-sm my-2"
                                @click.prevent="removeField(index)">supprimer</button>
                        </div>
                        <button class="btn btn-success btn-sm my-2" @click.prevent="addField">Ajouter</button>





                        <div class="mb-3">
                            <label class="small mb-1" for="image"><b>Image principales</b></label>
                            <input type="file" class="form-control" @change="onFileChange" id="image"
                                placeholder="Enter Product Image">
                            <img v-if="imageUrl" :src="imageUrl" alt="Selected Image" class="mt-2" width="50"
                                height="50" />
                            <span v-if="errors.image" class="text-danger m-1">{{ errors.image[0] }}</span>
                        </div>


                        <div class="mb-3">
                            <label class="small mb-1" for="images"><b>Images secondaires</b></label>
                            <input type="file" class="form-control" id="images" multiple @change="handleFileUpload" />
                            <span v-if="errors.images" class="text-danger m-1">{{ errors.image[0] }}</span>
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
import { ref, onMounted, reactive } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import PageHeader from '@/components/dashbord/dashboardSlots/PageHeader.vue';
import TomSelect from 'tom-select';
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
        const attribute_fields = ref([]);
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
        const path = store.getters['getImagePaths/getPath'];




        const loadProduct = async (id) => {
            id = Number(id); // Convertir l'ID en nombre
            const product = store.getters['products/productById'](id);
            if (product) {
                name.value = product.name;
                price.value = product.price;
                quantity.value = product.quantity;
                description.value = product.description;
                // name.value = product.name;
                console.log(product)
                if (product.image) {
                    imageUrl.value = path + product.image;
                }
                if (product.shop) {
                    shop_id.value = product.shop.id;
                }
                if (product.category) {
                    category_id.value = product.category.id;
                }

                if (product.attributes) {
                    product.attributes.forEach(attribute => {
                        attribute_fields.value.push({
                            attribute_id: attribute.id,
                            property_id: attribute.pivot.property_id
                        });
                        fetchProperties(attribute.id, attribute_fields.value.length - 1);
                    });
                }


            } else {
                router.push('/dashboard/products');
            }
        };


        const updateExistingProduct = async () => {
            errors.value = {};
            store.dispatch('loader/setLoading', true);
            try {
                const formData = new FormData();

                formData.append('id', route.params.id);
                formData.append('name', name.value);
                formData.append('price', price.value);
                formData.append('quantity', quantity.value);
                formData.append('description', description.value);
                formData.append('shop_id', shop_id.value);
                formData.append('category_id', category_id.value);

                if (image.value) {
                    formData.append('image', image.value);
                }

                attribute_fields.value.forEach((field, index) => {
                    formData.append(`attribute_fields[${index}][attribute_id]`, field.attribute_id);
                    formData.append(`attribute_fields[${index}][property_id]`, field.property_id);
                });


                images.value.forEach((image, index) => {
                    formData.append(`images[${index}]`, image);
                });

                // console.log(image.value);

                await store.dispatch('products/updateProduct', formData);
                console.log('arrive');
                // name.value = '';
                // price.value = '';
                // quantity.value = '';
                // description.value = '';
                // shop_id.value = '';
                // category_id.value
                // image.value = '';
                // images.value = '';

                const currentPage = store.state.products.currentPage; // Utilisez la pagination actuelle dans la redirection
                router.push({ path: '/dashboard/products', query: { success: true, page: currentPage } });
            } catch (validationErrors) {
                errors.value = validationErrors;
            }finally{
                store.dispatch('loader/setLoading', false);
            }
        };

        const fetchAllCategories = async () => {
             store.dispatch('loader/setLoading', true);
            try {
                await store.dispatch('categories/fetchAllCategories');
                categories.value = store.getters['categories/allCategories'];
            } catch (error) {
                console.log(error);
            }
        };

        const fetchAllAtributes = async () => {
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

        const fetchAllShops = async () => {
             store.dispatch('loader/setLoading', true);
            try {
                await store.dispatch('shops/fetchAllShops');
                shops.value = store.getters['shops/allShops'];
            } catch (error) {
                console.log(error);
            }finally{
                store.dispatch('loader/setLoading', false);
            }
        };

        const fetchProperties = async (attributeId, index) => {
            await store.dispatch('properties/fetchPropertiesByAttribute', attributeId);
            properties.value[index] = store.state.properties.propertiesByAttribute[attributeId];
        };


        // const addDefaultField = () => {
        //     attribute_fields.push({ attribute_id: '', property_id: '' });
        // };


        const addField = () => {
            attribute_fields.value.push({ attribute_id: '', property_id: '' });
        };

        const removeField = (index) => {
            attribute_fields.value.splice(index, 1);
        };

        const handleFileUpload = (event) => {
            const files = Array.from(event.target.files);
            images.value = files;
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



        onMounted(async () => {
            loadProduct(route.params.id);
            await fetchAllAtributes();
            await fetchAllShops();
            // await fetchProperties();
            await fetchAllCategories();
            await searchSelect();
            // addDefaultField();
        });


        return {
            name,
            errors,
            updateExistingProduct,
            shop_id,
            categories,
            shops,
            price,
            quantity,
            description,
            category_id,
            properties,
            category_id,
            errors,
            attributes,
            image,
            imageUrl,
            onFileChange,
            attribute_fields,
            fetchProperties,
            addField,
            removeField,
            handleFileUpload,
            fetchAllShops,
        };
    }
};
</script>

<style>
@import 'tom-select/dist/css/tom-select.css';
</style>
