<template>

    <main>
        <PageHeader>
            <template #title>Utilisateurs</template>
            <template #subtitle>Create An User</template>
        </PageHeader>
        <Loader></Loader>
        <!-- Main page content-->
        <div class="container-xl px-4 mt-n10">

            <!-- Example form-->

            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between">
                    <p>Gerer les utilisateurs</p>
                    <RouterLink to='/dashboard/users' class="btn btn-primary btn-sm">Utilisateurs</RouterLink>
                </div>
                <div class="card-body">
                    <form @submit.prevent="updateExistingUser">
                        <!-- Form Group (userfirstName)-->
                        <div class="mb-3">
                            <label class="small mb-1" for="firstName"><b>Nom</b></label>
                            <input type="text" class="form-control" v-model="firstName" id="firstName"
                                placeholder="Enter User First Name">
                            <span v-if="errors.firstName" class="text-danger m-1">{{ errors.firstName[0] }}</span>
                        </div>
                        <div class="mb-3">
                            <label class="small mb-1" for="lastName"><b>Prenom</b></label>
                            <input type="text" class="form-control" v-model="lastName" id="lastName"
                                placeholder="Enter User Last Name">
                            <span v-if="errors.lastName" class="text-danger m-1">{{ errors.lastName[0] }}</span>
                        </div>
                        <div class="mb-3">
                            <label class="small mb-1" for="email"><b>Email</b></label>
                            <input type="text" class="form-control" v-model="email" id="email"
                                placeholder="Enter User Email">
                            <span v-if="errors.email" class="text-danger m-1">{{ errors.email[0] }}</span>
                        </div>
                        <div class="mb-3">
                            <label class="small mb-1" for="phone"><b>Telephone</b></label>
                            <input type="phone" class="form-control" v-model="phone" id="phone"
                                placeholder="Enter User phone">
                            <span v-if="errors.phone" class="text-danger m-1">{{ errors.phone[0] }}</span>
                        </div>
                        <div class="mb-3">
                            <label class="small mb-1" for="password"><b>Mot de passe</b></label>
                            <input type="password" class="form-control" v-model="password" id="password"
                                placeholder="Enter User password">
                            <span v-if="errors.password" class="text-danger m-1">{{ errors.password[0] }}</span>
                        </div>
                        <div class="mb-3">
                            <label class="small mb-1" for="password_confirmation"><b>Confirmer le mot de
                                    passe</b></label>
                            <input type="password" class="form-control" v-model="password_confirmation"
                                id="password_confirmation" placeholder="Enter User password_confirmation">
                            <span v-if="errors.password_confirmation" class="text-danger m-1">{{
                                errors.password_confirmation[0]
                            }}</span>
                        </div>

                        <div class="mb-3">
                            <label class="small mb-1" for="role"><b>Role</b></label>
                            <select class="form-control" v-model="role" id="role">
                                <option value="admin">admin</option>
                                <option value="user">user</option>
                            </select>
                            <span v-if="errors.role" class="text-danger m-1">{{ errors.role[0] }}</span>
                        </div>

                        <div class="mb-3">
                            <label class="small mb-1" for="state"><b>Etat</b></label>
                            <select class="form-control" v-model="state" id="state">
                                <option value="init">Init</option>
                                <option value="enable">Enable</option>
                                <option value="desable">Desable</option>
                            </select>
                            <span v-if="errors.state" class="text-danger m-1">{{ errors.state[0] }}</span>
                        </div>

                        <div class="mb-3">
                            <label class="small mb-1" for="gender"><b>Genre</b></label>
                            <select v-model="gender" id="" class="form-control">
                                <option value="M">Homme</option>
                                <option value="F">Femme</option>

                            </select>
                            <span v-if="errors.gender" class="text-danger m-1">{{ errors.gender[0] }}</span>
                        </div>

                        <div class="mb-3">
                            <label class="small mb-1" for="profile"><b>Profile </b></label>
                            <input type="file" class="form-control" @change="onFileChangeProfile" id="profile"
                                placeholder="Enter profile Image">
                            <img v-if="imageUrlProfile" :src="imageUrlProfile" alt="Selected Image" class="mt-2"
                                width="50" height="50" />
                            <span v-if="errors.profile" class="text-danger m-1">{{ errors.profile[0] }}</span>
                        </div>

                        <div class="mb-3">
                            <label class="small mb-1" for="cniRecto"><b>Recto de la CNI</b></label>
                            <input type="file" class="form-control" @change="onFileChangeCniRecto" id="cniRecto"
                                placeholder="Enter cniRecto Image">
                            <img v-if="imageUrlCniRecto" :src="imageUrlCniRecto" alt="Selected Image" class="mt-2"
                                width="50" height="50" />
                            <span v-if="errors.cniRecto" class="text-danger m-1">{{ errors.cniRecto[0] }}</span>
                        </div>

                        <div class="mb-3">
                            <label class="small mb-1" for="cniVerso"><b>Verso de la CNI</b></label>
                            <input type="file" class="form-control" @change="onFileChangeCniVerso" id="cniVerso"
                                placeholder="Enter cniVerso Image">
                            <img v-if="imageUrlCniVerso" :src="imageUrlCniVerso" alt="Selected Image" class="mt-2"
                                width="50" height="50" />
                            <span v-if="errors.cniVerso" class="text-danger m-1">{{ errors.cniVerso[0] }}</span>
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
        const firstName = ref('');
        const lastName = ref('');
        const email = ref('');
        const phone = ref('');
        const role = ref('');
        const state = ref('');
        const password = ref('');
        const password_confirmation = ref('');
        const imageUrlCniRecto = ref('');
        const imageUrlCniVerso = ref('');
        const imageUrlProfile = ref('');
        const gender = ref('');
        const cniRecto = ref('');
        const cniVerso = ref('');
        const profile = ref('');
        const errors = ref({});
        const path = store.getters['getImagePaths/getPath'];



        const loadUser = async (id) => {
            id = Number(id); // Convertir l'ID en nombre
            const user = store.getters['users/userById'](id);
            if (user) {
                firstName.value = user.firstName;
                lastName.value = user.lastName;
                gender.value = user.gender;
                email.value = user.email;
                state.value = user.state;
                phone.value = user.phone;

                // name.value = product.name;
                console.log(user)
                if (user.role) {
                    role.value = user.role;
                }
                if (user.profile) {
                    imageUrlProfile.value = path + user.profile;
                }
                if (user.cniRecto) {
                    imageUrlCniRecto.value = path + user.cniRecto;
                }
                if (user.cniVerso) {
                    imageUrlCniVerso.value = path + user.cniVerso;
                }


            } else {
                router.push('/dashboard/users');
            }
        };




        const updateExistingUser = async () => {
            errors.value = {};
            store.dispatch('loader/setLoading', true);
            try {
                const formData = new FormData();
                formData.append('id', route.params.id);
                formData.append('firstName', firstName.value);
                formData.append('lastName', lastName.value);
                formData.append('email', email.value);
                formData.append('gender', gender.value);
                formData.append('phone', phone.value);

                if (role.value) {
                    formData.append('role', role.value);
                }
                if (state.value) {
                    formData.append('state', state.value);
                }
                if (password.value) {
                    formData.append('password', password.value);
                    formData.append('password_confirmation', password_confirmation.value);
                }

                if (profile.value) {
                    formData.append('profile', profile.value);
                }
                if (cniRecto.value) {
                    formData.append('cniRecto', cniRecto.value);
                }
                if (cniVerso.value) {
                    formData.append('cniVerso', cniVerso.value);
                }

                // console.log(image.value);
                for (let [key, value] of formData.entries()) {
                    console.log(`${key}: ${value}`);
                }
                await store.dispatch('users/updateUser', formData);
                const currentPage = store.state.users.currentPage; // Utilisez la pagination actuelle dans la redirection
                router.push({ path: '/dashboard/users', query: { success: true, page: currentPage } });
            } catch (validationErrors) {
                errors.value = validationErrors;
            }finally{
                store.dispatch('loader/setLoading', false);
            }
        };



        const onFileChangeCniRecto = (e) => {
            const files = e.target.files;
            if (files.length > 0) {
                cniRecto.value = files[0];
                const reader = new FileReader();
                reader.onload = (e) => {
                    imageUrlCniRecto.value = e.target.result;
                };
                reader.readAsDataURL(cniRecto.value); // Utilisez image.value plutôt que imageUrl.value
            }
        };
        const onFileChangeCniVerso = (e) => {
            const files = e.target.files;
            if (files.length > 0) {
                cniVerso.value = files[0];
                const reader = new FileReader();
                reader.onload = (e) => {
                    imageUrlCniVerso.value = e.target.result;
                };
                reader.readAsDataURL(cniVerso.value); // Utilisez image.value plutôt que imageUrl.value
            }
        };
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


        onMounted(async () => {
            loadUser(route.params.id);
        });

        return {
            firstName,
            lastName,
            password,
            password_confirmation,
            email,
            phone,
            gender,
            role,
            state,
            imageUrlCniRecto,
            imageUrlCniVerso,
            imageUrlProfile,
            onFileChangeCniRecto,
            onFileChangeCniVerso,
            onFileChangeProfile,
            errors,
            updateExistingUser,


        };
    }
};
</script>