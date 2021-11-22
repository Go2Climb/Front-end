<template>
  <v-app>
    <navbar v-on:closeSession="logout" v-bind:typeUser="typeUser" v-bind:idUser="idSignIn" app v-on:sign-in="setDialogLogin"
            v-on:sign-up-user="setDialogRegistrationCustomer"
            v-on:sign-up-agency="setDialogRegistrationAgency"
    ></navbar>
    <template>
      <router-view v-bind:idUser="idSignIn" v-bind:typeUser="typeUser" app></router-view>
      <LogIn :dialog="dialogLogin" v-on:dialog-false="setDialogLogin" v-on:set-id-sign-in="login"></LogIn>
      <registration-customer :dialog="dialogRegistrationCustomer" v-on:dialog-false="setDialogRegistrationCustomer"></registration-customer>
      <registration-agency :dialog="dialogRegistrationAgency" v-on:dialog-false="setDialogRegistrationAgency"></registration-agency>
    </template>
    <Footer app></Footer>
  </v-app>
</template>

<script>
import Navbar from "./views/Navbar";
import Footer from "./views/Footer";
import LogIn from "./authentication/pages/Login";
import RegistrationCustomer from "./authentication/pages/RegistrationCustomer";
import RegistrationAgency from "./authentication/pages/RegistrationAgency";
export default {
  name: 'App',
  components: {RegistrationAgency, Navbar, RegistrationCustomer, LogIn, Footer},
  data: () => ({
    idSignIn: null,
    typeUser: '',
    dialogLogin: false,
    dialogRegistrationCustomer: false,
    dialogRegistrationAgency: false,
  }),
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  methods: {
    setDialogLogin(){
      this.dialogLogin = !this.dialogLogin;
    },
    setDialogRegistrationCustomer(){
      this.dialogRegistrationCustomer = !this.dialogRegistrationCustomer;
    },
    setDialogRegistrationAgency(){
      this.dialogRegistrationAgency = !this.dialogRegistrationAgency;
    },


    login(){
      this.idSignIn = this.$store.state.auth.user.id;
      this.typeUser = this.$store.state.auth.type;
    },
    logout() {
      this.$store.dispatch('auth/logout');
      this.idSignIn = null;
      this.typeUser = '';
      this.$router.push('/');
    }
  },
};
</script>
