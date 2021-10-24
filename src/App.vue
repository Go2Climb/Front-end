<template>
  <v-app>
    <NavBar v-on:sign-in="setDialog"></NavBar>
    <router-view></router-view>
    <LogIn :dialog="dialog" v-on:dialog-false="setDialog"></LogIn>
    <Footer></Footer>
  </v-app>
</template>

<script>
import NavBar from "./views/NavBar";
import Footer from "./views/Footer";
import LogIn from "./authentication/pages/LogIn";
export default {
  name: 'App',
  components: {LogIn, Footer, NavBar},
  data: () => ({
    dialog: false
  }),
  methods: {
    setDialog(){
      this.dialog = !this.dialog;
    }
  }
};
</script>
