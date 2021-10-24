<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card class="rounded-xl">
        <v-card-text class="pa-2">
          <div cols="12">
            <v-btn icon color="black" @click="closeForm">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </div>
          <hr>
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
  </v-row>
</template>

<script>
export default {
  name: "LogIn",
  props: {
    dialog: Boolean
  },
  data: () => ({
    email: null,
    password: null,
    emailRules: [
      v => !!v || 'Email is required',
    ],
    passwordRules: [
      v => !!v || 'Password is required',
    ]
    //emailRules: [
 //   v => !!v || 'Email is required',
  //  v => /.+@.+/.test(v) || 'E-mail must be valid'
//],
//passwordRules: [
 // v => !!v || 'Password is required',
  //v => (v && v.length >= 6) || 'Password must have at least 6 characters',
  //v => /(?=.*[A-Z])/.test(v) || 'Must have one uppercase character',
  //v => /(?=.*\d)/.test(v) || 'Must have one number',
  //v => /([!@$%])/.test(v) || 'Must have one special character [!@$%]'
//]
  }),
  methods: {
    closeForm(){
      this.$refs.form.reset();
      this.dialog = false;
      this.$emit('dialog-false');
    },
    handleSubmit(){
      this.$refs.form.validate();
      const data = {
        email: this.email,
        password: this.password
      }

      console.log(data);
    }
  }
}
</script>

<style scoped>

</style>