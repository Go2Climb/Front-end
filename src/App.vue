<template>
  <v-app>
    <NavBar v-on:sign-in="setDialog" v-on:subscription="setDialogSubscription"></NavBar>
    <router-view></router-view>
    <LogIn :dialog="dialog" v-on:dialog-false="setDialog" v-on:set-id-sign-in="setIdSignIn"></LogIn>
    <Subscription :dialog="dialogSubscription" v-on:dialog-false="setDialogSubscription" v-on:set-id-subscription="setIdSubscription"></Subscription>
    <Footer></Footer>
  </v-app>
</template>

<script>
import NavBar from "./views/NavBar";
import Footer from "./views/Footer";
import LogIn from "./authentication/pages/LogIn";
import Subscription from "./agency/pages/Subscription";
export default {
  name: 'App',
  components: {LogIn, Footer, NavBar, Subscription},
  data: () => ({
    idSignIn: '',
    idSubscription: '',
    dialog: false,
    dialogSubscription: false
  }),
  methods: {
    setIdSignIn(id) {
      this.idSignIn = id;
    },
    setIdSubscription(id) {
      this.idSubscription = id;
    },
    setDialog(){
      this.dialog = !this.dialog;
    },
    setDialogSubscription(){
      this.dialogSubscription = !this.dialogSubscription;
    }
  }
};
</script>
