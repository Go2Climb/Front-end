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
                error-count="2"
                required
            ></v-text-field>
            <v-text-field
                label = "Password"
                v-model="password"
                type="password"
                :rules="passwordRules"
                error-count="2"
                required
            ></v-text-field>
            <h3 class="mt-3">Account information</h3>
            <v-text-field
                label = "Name"
                v-model="name"
                :rules="nameRules"
                required
            ></v-text-field>
            <v-text-field
                label = "Lastname"
                v-model = "lastname"
                :rules="lastnameRules"
                required
            ></v-text-field>
            <v-btn color="primary" class="my-6" block rounded  @click="handleRegister()">Complete</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "Registration",
  props: {
    dialog: Boolean
  },
  data: () => ({
    email: '',
    password: '',
    name: '',
    lastname: '',
    emailRules: [
      v => !!v || 'Email is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
    passwordRules: [
      v => !!v || 'Password is required',
      v => (v && v.length >= 6) || 'Password must have at least 6 characters',
      v => /(?=.*[A-Z])/.test(v) || 'Must have one uppercase character',
      v => /(?=.*\d)/.test(v) || 'Must have one number',
      v => /([!@$%])/.test(v) || 'Must have one special character [!@$%]'
    ],
    nameRules: [
      v => !!v || 'Name is required',
    ],
    lastnameRules: [
      v => !!v || 'Lastname is required',
    ]
  }),
  methods: {
    closeForm(){
      this.$refs.form.reset();
      this.dialog = false;
      this.$emit('dialog-false');
    },
    handleRegister(){
    }
  }
}
</script>

<style scoped>

</style>