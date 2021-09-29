<template>
  <v-app app>
    <NavBar></NavBar>
    <router-view></router-view>
    <Footer></Footer>
  </v-app>
</template>

<script>
import NavBar from "./views/NavBar";
import Footer from "./views/Footer";
export default {
  name: 'App',
  components: {Footer, NavBar},
  data: () => ({
    //
  }),
};
</script>
