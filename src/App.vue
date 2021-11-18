<template>
  <v-app>
    <NavBar app v-on:sign-in="setDialogLogin"
            v-on:sign-up-user="setDialogRegistration"
    ></NavBar>
    <router-view></router-view>
    <LogIn :dialog="dialogLogin" v-on:dialog-false="setDialogLogin" v-on:set-id-sign-in="setIdSignIn"></LogIn>
    <Registration :dialog="dialogRegistration" v-on:dialog-false="setDialogRegistration"></Registration>
    <Footer></Footer>
  </v-app>
</template>

<script>
import NavBar from "./views/NavBar";
import Footer from "./views/Footer";
import LogIn from "./authentication/pages/Login";
import Registration from "./authentication/pages/Registration";
export default {
  name: 'App',
  components: {Registration, LogIn, Footer, NavBar},
  data: () => ({
    idSignIn: '',
    dialogLogin: false,
    dialogRegistration: false
  }),
  methods: {
    setIdSignIn(id){
      this.idSignIn = id;
    },
    setDialogLogin(){
      this.dialogLogin = !this.dialogLogin;
    },
    setDialogRegistration(){
      this.dialogRegistration = !this.dialogRegistration;
    }
  }
};
</script>
