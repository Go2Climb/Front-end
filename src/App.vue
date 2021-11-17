<template>
  <v-app>
    <navbar v-on:sign-in="setDialogLogin"
            v-on:sign-up-user="setDialogRegistrationCustomer"
            v-on:sign-up-agency="setDialogRegistrationAgency"
    ></navbar>
    <router-view></router-view>
    <LogIn :dialog="dialogLogin" v-on:dialog-false="setDialogLogin" v-on:set-id-sign-in="setIdSignIn"></LogIn>
    <registration-customer :dialog="dialogRegistrationCustomer" v-on:dialog-false="setDialogRegistrationCustomer"></registration-customer>
    <registration-agency :dialog="dialogRegistrationAgency" v-on:dialog-false="setDialogRegistrationAgency"></registration-agency>

    <Footer></Footer>
  </v-app>
</template>

<script>
import Footer from "./views/Footer";
import LogIn from "./authentication/pages/Login";
import RegistrationCustomer from "./authentication/pages/RegistrationCustomer";
import Navbar from "./views/Navbar";
import RegistrationAgency from "./authentication/pages/RegistrationAgency";
export default {
  name: 'App',
  components: {RegistrationAgency, Navbar, RegistrationCustomer, LogIn, Footer},
  data: () => ({
    idSignIn: '',
    dialogLogin: false,
    dialogRegistrationCustomer: false,
    dialogRegistrationAgency: false,
  }),
  computed: {

  },
  methods: {
    setIdSignIn(id){
      this.idSignIn = id;
    },
    setDialogLogin(){
      this.dialogLogin = !this.dialogLogin;
    },
    setDialogRegistrationCustomer(){
      this.dialogRegistrationCustomer = !this.dialogRegistrationCustomer;
    },
    setDialogRegistrationAgency(){
      this.dialogRegistrationAgency = !this.dialogRegistrationAgency;
    }
  },
};
</script>
