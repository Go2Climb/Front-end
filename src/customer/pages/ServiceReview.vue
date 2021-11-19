<template>
  <v-row justify="center">
    <v-dialog v-model="dialogService" persistent max-width="600px">
      <v-card class="rounded-xl">
        <v-card-text class="pa-2">
          <div cols="12" class="d-flex align-center justify-space-around">
            <v-btn icon color="black" @click="closeForm">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <div class="mx-auto"><h3>Service review</h3></div>
            <v-btn icon disabled></v-btn>
          </div>
          <hr class="hr">
          <v-form ref="form" class="mx-8 v-border-none" lazy-validation border-none>
            <h3 class="mt-4">Overall service score</h3>
            <p>Enter a score from 0.0 to 5.0</p>
            <v-text-field
                class="mt-2 rounded-lg"
                placeholder = "Your rating is..."
                oninput="if(this.value < 0) this.value = 0; else if (this.value > 5) this.value = 5;"
                type="number"
                min="0"
                max="5"
                :rules="passwordRules"
                required
                solo
                dense
            ></v-text-field>
            <h3 class="my-4">Comment (optional)</h3>
            <v-textarea
                class="rounded-lg "
                auto-grow
                solo
                rows="3"
                row-height="25"
                placeholder="Your comment.."
                counter="360"
            ></v-textarea>
          </v-form>
          <div class="mx-8 d-flex justify-end">
            <v-btn color="primary" class="mt-6 btn-size" rounded @click="setAgencyReview">Continue</v-btn>
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
  name: "CustomerReviews",
  props: {
    dialogService: Boolean,
    id: Number
  },
  data: () => ({
  }),
  methods: {
    closeForm(){
      this.$refs.form.reset();
      this.dialogService = false;
      this.$emit('dialog-service-false');
    },
    setAgencyReview() {
      this.dialogAgency = true;
      this.$emit('dialog-continue');
    },
    continueForm() {
      this.$emit("dialogAgency");
    }
  }
}
</script>

<style scoped>
  .v-border-none {
    border: 0px solid white;
  }
  .hr {
    border-top: 1px solid gray;
    border-bottom: 0px solid white;
    height: 0px;
  }
  .btn-size {
    width: 150px;
  }
</style>
