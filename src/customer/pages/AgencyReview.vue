<template>
  <v-row justify="center">
    <v-dialog v-model="dialogAgency" persistent max-width="600px">
      <v-card class="rounded-xl">
        <v-card-text class="pa-2">
          <div cols="12" class="d-flex align-center justify-space-around">
            <v-btn icon color="black" @click="closeForm">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <div class="mx-auto"><h3>Agency review</h3></div>
            <v-btn icon disabled></v-btn>
          </div>
          <hr class="hr">
          <v-form ref="form" class="mx-8 v-border-none" lazy-validation border-none>
            <h3 class="mt-4">Agency score</h3>
            <p>Enter a score from 0.0 to 5.0</p>
            <v-row wrap>
              <v-col cols="6">
                <p>Professionalism</p>
                <v-text-field type="number" solo dense hide-details></v-text-field>
              </v-col>
              <v-col cols="6">
                <p>Price/Quality</p>
                <v-text-field type="number" solo dense hide-details></v-text-field>
              </v-col>
              <v-col cols="6">
                <p>Security</p>
                <v-text-field type="number" solo dense hide-details></v-text-field>
              </v-col>
              <v-col cols="6">
                <p>Costs</p>
                <v-text-field type="number" solo dense hide-details></v-text-field>
              </v-col>
            </v-row>
            <h3 class="my-4">Comment (optional)</h3>
            <v-textarea
                class="rounded-lg "
                auto-grow
                solo
                rows="3"
                row-height="25"
                placeholder="Your comment.."
                hide-details
            ></v-textarea>
            <p class="mt-1 d-flex justify-end">Maximum 360 characters.</p>
          </v-form>
          <div class="mx-8 d-flex justify-end">
            <v-btn color="secondary" class="mt-6 btn-size mr-2" rounded>Omit</v-btn>
            <v-btn color="primary" class="mt-6 btn-size" rounded>Continue</v-btn>
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
  name: "AgencyReview",
  props: {
    dialogAgency: Boolean
  },
  methods: {
    closeForm(){
      this.$refs.form.reset();
      this.dialogAgency = false;
      this.$emit('dialog-agency-false');
    },
  }
}
</script>

<style scoped>
  .btn-size {
    width: 150px;
  }
</style>
