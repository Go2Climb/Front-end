<template>
  <v-toolbar max-height="64px" color="primary">
    <v-toolbar-items class="container pa-0">
      <v-col cols="3" class="pa-0 d-none d-sm-flex d-md-flex d-lg-flex">
        <router-link to="/">
          <img class="mx-3" width="150px" v-bind:src="require('../assets/logo.png') " alt="Imagen de una montaña nevagada, logo de Go2Climb">
        </router-link>
      </v-col>
      <v-col cols="4" class="col-sm-3 col-md-3 d-flex flex-row align-center pa-0">
        <div class="d-flex justify-center align-center my-auto ml-3 rounded-pill white">
          <v-btn class="rounded-l-pill" icon><v-icon>mdi-account</v-icon></v-btn>
          <v-app-bar-nav-icon class="rounded-r-pill"></v-app-bar-nav-icon>
        </div>
        <router-link class="ml-3 d-none d-md-flex" to="/"><v-btn dark text>Inicio</v-btn></router-link>

      </v-col>
      <v-col cols="8" class="col-sm-6 col-md-6 py-0 pr-3 d-flex align-center justify-end">
        <div class="my-auto">
          <v-text-field type="text" full-width solo hide-details single-line flat class="rounded-pill ajustar" placeholder="¿Qué esta buscando?" prepend-inner-icon="mdi-magnify"></v-text-field>
        </div>
      </v-col>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
@media (min-width: 750px) {
  .ajustar {
    width: 350px;
  }
}
@media (min-width: 900px) {
  .ajustar {
    width: 500px;
  }
}
</style>