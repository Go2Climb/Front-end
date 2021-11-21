<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <v-card class="rounded-xl">
      <v-card-text class="pa-2">
        <div cols="12" class="d-flex align-center justify-space-around">
          <v-btn icon color="black" @click="closeForm">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <div class="mx-auto"><h3>Log In</h3></div>
          <v-btn icon disabled></v-btn>
        </div>
        <hr class="hr">
        <v-form ref="form" class="mx-8" lazy-validation>
          <h3 class="mt-4">Welcome to Go2Climb</h3>
          <v-text-field
              label = "Email"
              v-model="email"
              :rules="emailRules"
              required
          ></v-text-field>
          <v-text-field
              label = "Password"
              v-model="password"
              type="password"
              :rules="passwordRules"
              required
          ></v-text-field>
          <span v-show="incorrectData" class="red--text text-caption">The data entered is not correct</span>
          <h4 class="mt-3">Do you forgot your password?</h4>
          <v-btn color="primary" class="mt-6" block rounded  @click="handleSubmit()">Sign in</v-btn>
        </v-form>
        <div class="mx-8">
          <hr class="mt-8 mb-8">
          <v-btn color="primary" class="mt-6" block rounded>Register and enjoy your adventure</v-btn>
          <v-btn color="primary" class="mt-2" block rounded>Register and offer tourist services</v-btn>
        </div>
      </v-card-text>
      <v-card-actions>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import AgenciesService from '../../agency/services/agencies.service'

export default {
  name: "LogIn",
  props: {
    dialog: Boolean
  },
  data: () => ({
    email: '',
    password: '',
    emailRules: [
      v => !!v || 'Email is required',
    ],
    passwordRules: [
      v => !!v || 'Password is required',
    ],
    incorrectData: false
  }),
  methods: {
    closeForm(){
      this.$refs.form.reset();
      this.dialog = false;
      this.incorrectData = false;
      this.$emit('dialog-false');
    },
    handleSubmit(){
      this.$refs.form.validate();
      AgenciesService.findByEmail(this.email)
      .then( (response) => {
        if (this.password === response.data[0].password){
            this.$emit('set-id-sign-in', response.data[0].id);
            this.closeForm();
        }
      })
      .catch(e => {
        this.incorrectData = true;
        console.log(e);
      });
    }
  }
}
</script>

<style scoped>

</style>
