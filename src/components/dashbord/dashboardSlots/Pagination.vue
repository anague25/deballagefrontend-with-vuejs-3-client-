<template>
    <nav class="dataTable-pagination">
      <ul class="pagination">
        <li class="page-item" :class="{ disabled: currentPage === 1 }">
          <a class="page-link" @click.prevent="fetchPage(currentPage - 1)" href="#">
            <slot name="previous">Previous</slot>
          </a>
        </li>
        <li v-for="page in totalPages" :key="page" class="page-item" :class="{ active: page === currentPage }">
          <a class="page-link" @click.prevent="fetchPage(page)" href="#">{{ page }}</a>
        </li>
        <li class="page-item" :class="{ disabled: currentPage === totalPages }">
          <a class="page-link" @click.prevent="fetchPage(currentPage + 1)" href="#">
            <slot name="next">Next</slot>
          </a>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    props: {
      currentPage: {
        type: Number,
        required: true
      },
      totalPages: {
        type: Number,
        required: true
      },
      fetchPage: {
        type: Function,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  /* Ajoutez ici vos styles pour ce composant */
  </style>
  