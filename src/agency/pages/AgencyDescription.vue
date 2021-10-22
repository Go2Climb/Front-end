<template>
  <v-card>
    <v-img
        height=150
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png">
    </v-img>
    <v-card-text>
      <v-card-title>TravelNew</v-card-title>
      <v-card-subtitle>travelnew@gmail.com</v-card-subtitle>
      <v-row align="center" class="mx-3">
        <v-rating
            :value="4"
            color="amber"
            dense
            half-increments
            readonly
            size="20"
        ></v-rating>
      </v-row>
      <v-card-text class="">
        <p>We are an agency dedicated to mountaineering for beginners and experienced people. We have
          more than 20 years of experience in the field of mountaineering. We appreciate your visit.</p>
      </v-card-text>
      <v-card-text>
        <div class="d-flex flex-column">
          <p class="font-weight-bold">Location</p>
          <p>Maicena, Lima - Peru</p>
        </div>
        <div class="d-flex flex-column">
          <p class="font-weight-bold">RUC</p>
          <p>641478521</p>
        </div>
        <div class="d-flex flex-column">
          <p class="font-weight-bold">Telephone</p>
          <p>+51 952364789</p>
        </div>
      </v-card-text>
    </v-card-text>
    <v-card-actions>
      <template>
        <v-btn block color="primary">
          Edit information
        </v-btn>
      </template>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "AgencyDescription"
}
</script>

<style scoped>

</style>