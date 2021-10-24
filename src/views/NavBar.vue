<template>
  <v-toolbar max-height="64px" color="primary">
    <v-toolbar-items class="container pa-0">
      <v-col cols="3" class="pa-0 d-none d-sm-flex d-md-flex d-lg-flex">
        <router-link to="/">
          <img class="mx-3" width="150px" v-bind:src="require('../assets/logo.png') " alt="Image of a snowy mountain, Go2Climb logo">
        </router-link>
      </v-col>
      <v-col cols="4" class="col-sm-3 col-md-3 d-flex flex-row align-center pa-0">
        <div class="d-flex justify-center align-center my-auto ml-3 rounded-pill white dense--btn">
          <v-btn height="40px" link="/agency/profile" href="/agency/profile" class="rounded-l-pill white" icon>
            <v-icon>mdi-account</v-icon>
          </v-btn>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-app-bar-nav-icon
                  class="rounded-r-pill dense--btn"
                  v-bind="attrs"
                  v-on="on"
              ></v-app-bar-nav-icon>
            </template>
            <v-list class="rounded-xl">
              <v-list-item
                  v-for="item in items"
                  :key="item.id"
                  @click="onOptionSelected(item)"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
        <router-link class="ml-3 d-none d-md-flex" to="/agency/clients"><v-btn dark text>Customers</v-btn></router-link>
      </v-col>
      <v-col cols="8" class="col-sm-6 col-md-6 py-0 pr-3 d-flex align-center justify-end">
        <div class="my-auto">
          <v-text-field clearable dense type="text" full-width solo hide-details single-line flat class="rounded-pill adjust" placeholder="What are you looking for?" prepend-inner-icon="mdi-magnify"></v-text-field>
        </div>
      </v-col>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: "NavBar",
  data: () => ({
    items: [
      { id: 0, title: 'Sign in'},
      { id: 1, title: 'Sign up as user' },
      { id: 2, title: 'Sign up as agency' },
    ]
  }),
  methods: {
    onOptionSelected(option) {
      if(option.id == 0) this.$emit('sign-in');
      if(option.id == 1) this.$emit('sign-up-user');
      if(option.id == 2) this.$emit('sign-up-agency');
    }
  }
}
</script>

<style scoped>
@media (min-width: 750px) {
  .adjust {
    width: 350px;
  }
}
@media (min-width: 900px) {
  .adjust {
    width: 500px;
  }
}
.dense--btn {
  max-height: 40px;
}
</style>