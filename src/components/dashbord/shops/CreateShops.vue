<template>

    <main>
        <PageHeader>
            <template #title>Boutiques</template>
            <template #subtitle>Ajouter une boutique</template>
        </PageHeader>
        <Loader></Loader>
        <!-- Main page content-->
        <div class="container-xl px-4 mt-n10">

            <!-- Example form-->

            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between">
                    <p>Gerer les boutiques</p>
                    <RouterLink to='/dashboard/shops' class="btn btn-primary btn-sm">Boutiques</RouterLink>
                </div>
                <div class="card-body">
                    <form @submit.prevent="createNewShop" enctype="multipart/form-data">
                        <!-- Form Group (username)-->
                        <div class="mb-3">
                            <label class="small mb-1" for="name"><b>Nom</b></label>
                            <input type="text" class="form-control" v-model="name" id="name"
                                placeholder="Enter Property Name">
                            <span v-if="errors.name" class="text-danger m-1">{{ errors.name[0] }}</span>
                        </div>

                        <div class="mb-3">
                            <label class="small mb-1" for="description"><b>Description</b></label>
                            <textarea class="form-control" v-model="description" id="description"
                                placeholder="Enter Shop Description "></textarea>
                            <span v-if="errors.description" class="text-danger m-1">{{ errors.description[0] }}</span>
                        </div>


                        <div class="mb-3">
                            <label class="small mb-1" for="ex-dropdown-input"><b>Utilisateur</b></label>
                            <select class="form-control" v-model="user_id" id="ex-dropdown-input" autocomplete="off">
                                <option value="">None</option>
                                <option v-for="user in users" :key="user.id" :value="user.id">{{
                                    user.firstName
                                }}</option>
                            </select>
                            <span v-if="errors.user_id" class="text-danger m-1">{{ errors.user_id[0] }}</span>
                        </div>

                        <div class="mb-3">
                            <label class="small mb-1" for="state"><b>Etat ou permision</b></label>
                            <select class="form-control" v-model="state" id="state" autocomplete="off">
                                <option value="init">Init</option>
                                <option value="enable">Enable</option>
                                <option value="desable">Desable</option>

                            </select>
                            <span v-if="errors.state" class="text-danger m-1">{{ errors.state[0] }}</span>
                        </div>





                        <!-- Champs dynamiques cities-beighborhood -->
                        <div v-for="(field, index) in city_fields" :key="index">
                            <label><b>Ville</b></label>
                            <select class="form-control" v-model="field.city_id"
                                @change="fetchNeighborhoods(field.city_id, index)">
                                <option v-for="city in cities" :key="city.id" :value="city.id">{{
                                    city.name }}</option>
                            </select>
                            <span v-if="errors[`city_fields.${index}.city_id`]" class="text-danger m-1">{{
                                errors[`city_fields.${index}.city_id`][0] }}</span>
                            <br>
                            <label><b>Quartier</b></label>
                            <select class="form-control" v-model="field.neighborhood_id">
                                <option v-for="neighborhood in neighborhoods[index]" :key="neighborhood.id"
                                    :value="neighborhood.id">{{
                                        neighborhood.name }}</option>
                            </select>
                            <span v-if="errors[`city_fields.${index}.neighborhood_id`]" class="text-danger m-1">{{
                                errors[`city_fields.${index}.neighborhood_id`][0] }}</span>
                            <br>
                            <button class="btn btn-danger btn-sm my-2" type="button"
                                @click="removeFieldCityNeighborhood(index)">Supprimer</button>
                        </div>
                        <button class="btn btn-success btn-sm my-2" type="button"
                            @click="addFieldCityNeighborhood">Ajouter</button>


                        <!-- Champs dynamiques category-subcategory -->
                        <div v-for="(field, index) in category_fields" :key="index">
                            <label><b>Categorie</b></label>
                            <select class="form-control" v-model="field.category_id"
                                @change="fetchSubCategories(field.category_id, index)">
                                <option v-for="category in categories" :key="category.id" :value="category.id">{{
                                    category.name }}</option>
                            </select>
                            <span v-if="errors[`category_fields.${index}.category_id`]" class="text-danger m-1">{{
                                errors[`category_fields.${index}.category_id`][0] }}</span><br>

                            <label><b>Sous-categorie</b></label>
                            <select class="form-control" v-model="field.subCategory_id">
                                <option v-for="subCategory in subCategories[index]" :key="subCategory.id"
                                    :value="subCategory.id">{{
                                        subCategory.name }}</option>
                            </select>
                            <span v-if="errors[`category_fields.${index}.subCategory_id`]" class="text-danger m-1">{{
                                errors[`category_fields.${index}.subCategory_id`][0] }}</span><br>

                            <button class="btn btn-danger btn-sm my-2" type="button"
                                @click="removeFieldCategorySubCategory(index)">Supprimer</button>
                        </div>
                        <button class="btn btn-success btn-sm my-2" type="button"
                            @click="addFieldCategorySubCategory">Ajouter</button>




                        <div class="mb-3">
                            <label class="small mb-1" for="image"><b>Image de profile</b></label>
                            <input type="file" class="form-control" @change="onFileChangeProfile" id="image"
                                placeholder="Enter Profie Image">
                            <img v-if="imageUrlProfile" :src="imageUrlProfile" alt="Selected Image" class="mt-2"
                                width="50" height="50" />
                            <span v-if="errors.profile" class="text-danger m-1">{{ errors.profile[0] }}</span>
                        </div>

                        <div class="mb-3">
                            <label class="small mb-1" for="image"><b>Image de couverture</b></label>
                            <input type="file" class="form-control" @change="onFileChangeCover" id="image"
                                placeholder="Enter Cover Image">
                            <img v-if="imageUrlCover" :src="imageUrlCover" alt="Selected Image" class="mt-2" width="50"
                                height="50" />
                            <span v-if="errors.cover" class="text-danger m-1">{{ errors.cover[0] }}</span>
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
import { ref, onMounted, reactive } from 'vue';
import { useStore } from 'vuex';
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
        const category_fields = reactive([]);
        const city_fields = reactive([]);
        const errors = ref({});
        const categories = ref([]);
        const users = ref([]);
        const cities = ref([]);
        const neighborhoods = ref([]);
        const subCategories = ref([]);
        const name = ref('');
        const state = ref('init');
        const user_id = ref('');
        const profile = ref('');
        const cover = ref('');
        const imageUrlProfile = ref('');
        const imageUrlCover = ref('');
        const description = ref('');

        const fetchAllCategories = async () => {
             store.dispatch('loader/setLoading', true);
            try {
                await store.dispatch('categories/fetchAllCategories');
                categories.value = store.getters['categories/allCategories'];
            } catch (error) {
                console.log(error);
            }finally{
                store.dispatch('loader/setLoading', false);
            }
        };

        const fetchAllUsers = async () => {
             store.dispatch('loader/setLoading', true);
            try {
                await store.dispatch('users/fetchAllUsers');
                users.value = store.getters['users/allUsers'];
            } catch (error) {
                console.log(error);
            }finally{
                store.dispatch('loader/setLoading', false);
            }
        };

        const fetchAllCities = async () => {
             store.dispatch('loader/setLoading', true);
            try {
                await store.dispatch('cities/fetchAllCities');
                cities.value = store.getters['cities/allCities'];
            } catch (error) {
                console.log(error);
            }finally{
                store.dispatch('loader/setLoading', false);
            }
        };

        const fetchSubCategories = async (categoryId, index) => {
            console.log(categoryId);
            await store.dispatch('categories/fetchSubCategoriesByCategory', categoryId);
            subCategories.value[index] = store.state.categories.subCategoriesByCategory[categoryId];
        };

        const fetchNeighborhoods = async (cityId, index) => {
            await store.dispatch('neighborhoods/fetchNeighborhoodsByCity', cityId);
            neighborhoods.value[index] = store.state.neighborhoods.neighborhoodsByCity[cityId];
        };

        const addDefaultFieldCategory = () => {
            category_fields.push({ category_id: '', subCategory_id: '' });
        };

        const addDefaultFieldCity = () => {
            city_fields.push({ city_id: '', neighborhood_id: '' });
        };


        const addFieldCategorySubCategory = () => {
            category_fields.push({ category_id: '', subCategory_id: '' });
        };

        const addFieldCityNeighborhood = () => {
            city_fields.push({ city_id: '', neighborhood_id: '' });
        };

        const removeFieldCategorySubCategory = (index) => {
            category_fields.splice(index, 1);
        };
        const removeFieldCityNeighborhood = (index) => {
            city_fields.splice(index, 1);
        };



        const createNewShop = async () => {
            errors.value = {};
             store.dispatch('loader/setLoading', true);
            try {
                const formData = new FormData();
                formData.append('name', name.value);
                formData.append('description', description.value);
                formData.append('user_id', user_id.value);
                formData.append('profile', profile.value);
                formData.append('cover', cover.value);
                formData.append('state', state.value);

                city_fields.forEach((field, index) => {
                    formData.append(`city_fields[${index}][city_id]`, field.city_id);
                    formData.append(`city_fields[${index}][neighborhood_id]`, field.neighborhood_id);
                });

                category_fields.forEach((field, index) => {
                    formData.append(`category_fields[${index}][category_id]`, field.category_id);
                    formData.append(`category_fields[${index}][subCategory_id]`, field.subCategory_id);
                });


                for (let [key, value] of formData.entries()) {
                    console.log(`${key}: ${value}`);
                }

                await store.dispatch('shops/createShop', formData);
                console.log('arrive');

            } catch (validationErrors) {
                errors.value = validationErrors;
                console.log(validationErrors);
            }finally{
                store.dispatch('loader/setLoading', false);
            }
        };

        const searchSelect = () => {
            new TomSelect('#ex-dropdown-input', {
                plugins: ['dropdown_input', 'remove_button'],
            });
        }

        const onFileChangeProfile = (e) => {
            const files = e.target.files;
            if (files.length > 0) {
                profile.value = files[0];
                const reader = new FileReader();
                reader.onload = (e) => {
                    imageUrlProfile.value = e.target.result;
                };
                reader.readAsDataURL(profile.value); // Utilisez image.value plutôt que imageUrl.value
            }
        };

        const onFileChangeCover = (e) => {
            const files = e.target.files;
            if (files.length > 0) {
                cover.value = files[0];
                const reader = new FileReader();
                reader.onload = (e) => {
                    imageUrlCover.value = e.target.result;
                };
                reader.readAsDataURL(cover.value); // Utilisez image.value plutôt que imageUrl.value
            }
        };

        onMounted(async () => {
            addDefaultFieldCategory();
            addDefaultFieldCity();
            await fetchAllCategories();
            await fetchAllUsers();
            await fetchAllCities();
            await searchSelect();
        });


        return {
            name,
            subCategories,
            neighborhoods,
            user_id,
            users,
            state,
            categories,
            cities,
            description,
            errors,
            createNewShop,
            cover,
            profile,
            imageUrlProfile,
            imageUrlCover,
            onFileChangeProfile,
            onFileChangeCover,
            category_fields,
            city_fields,
            fetchSubCategories,
            fetchNeighborhoods,
            addFieldCityNeighborhood,
            addFieldCategorySubCategory,
            removeFieldCategorySubCategory,
            removeFieldCityNeighborhood,
            fetchAllCities,
        };
    }
};
</script>

<style>
@import 'tom-select/dist/css/tom-select.css';
</style>