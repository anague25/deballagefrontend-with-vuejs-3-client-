<template>
  <main>
    <PageHeader>
      <template #title>Acceder a votre compte</template>
      <template #subtitle>Connectez-vous a l'application pour benifier des meilleurs fonctionnalites</template>
    </PageHeader>
    <!-- Main page content-->
    <div class="container-xl px-4 mt-n10">
      <!-- Example form-->
      <div class="card mb-4">
        <div class="card-header d-flex justify-content-between">
          <p>Se connecter</p>
          <RouterLink to="#" class="btn btn-primary btn-sm">Login</RouterLink>
        </div>
        <div class="card-body">
          <form @submit.prevent="login">
            <!-- Form Group (username)-->
            <div class="mb-3">
              <label class="small mb-1" for="email"><b>Email</b></label>
              <input type="email" class="form-control" v-model="email" id="email" placeholder="Enter Your Email">
              <span v-if="errors.email" class="text-danger m-1">{{ errors.email[0] }}</span>
            </div>
            <div class="mb-3">
              <label class="small mb-1" for="password"><b>Mot de passe</b></label>
              <input type="password" class="form-control" v-model="password" id="password" placeholder="Enter Password">
              <span v-if="errors.password" class="text-danger m-1">{{ errors.password[0] }}</span>
            </div>
            <button class="btn btn-primary" type="submit">Connexion</button>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import PageHeader from '@/components/dashbord/dashboardSlots/PageHeader.vue';
import Swal from 'sweetalert2';
import Loader from '@/components/dashbord/loader/Loader.vue';


export default {
  components: {
    PageHeader
  },
  setup() {
    const email = ref('');
    const password = ref('');
    const errors = ref({});
    const store = useStore();
    const router = useRouter();

    const login = async () => {
      try {
        const response = await store.dispatch('auth/login', { email: email.value, password: password.value });
        if (response.data.user.role != "admin") {
          await store.dispatch('auth/logout');
        } else {
          router.push('/dashboard/users');
        }
      } catch (error) {
        if (error.response && error.response.data && error.response.data.errors) {
          errors.value = error.response.data.errors;
        } else if (error.response && error.response.data && error.response.data.message) {
          Swal.fire({
            title: "Oop'!",
            text: error.response.data.message,
            icon: 'error',
            confirmButtonText: 'OK'
          });
        } else {
          Swal.fire({
            title: "Oop'!",
            text: "Une erreur s'est produite. Veuillez réessayer.",
            icon: 'error',
            confirmButtonText: 'OK'
          });
        }

      }
    };

    return {
      email,
      password,
      login,
      errors
    };
  }
};
</script>