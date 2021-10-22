<template>
  <v-card>
    <v-img
        height=150
        :src= "agency.photo">
    </v-img>
    <v-card-text>
      <v-card-title>{{agency.name}}</v-card-title>
      <v-card-subtitle>{{ agency.email }}</v-card-subtitle>
      <v-row align="center" class="mx-3">
        <v-rating
            :value="agency.score"
            color="amber"
            dense
            half-increments
            readonly
            size="20"
        ></v-rating>
      </v-row>
      <v-card-text class="">
        <p>{{agency.description}}</p>
      </v-card-text>
      <v-card-text>
        <div class="d-flex flex-column">
          <p class="font-weight-bold">Location</p>
          <p>{{agency.location}}</p>
        </div>
        <div class="d-flex flex-column">
          <p class="font-weight-bold">RUC</p>
          <p>{{ agency.RUC }}</p>
        </div>
        <div class="d-flex flex-column">
          <p class="font-weight-bold">Telephone</p>
          <p>{{agency.phoneNumber}}</p>
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
import AgenciesService from '../services/agencies.service'

export default {
  name: "AgencyDescription",
  data: () => ({
    agency:[],
    id: 1
  }),

  methods:
      {
        retrieveAgency(){
          AgenciesService.getById(this.id).then((response) =>{
            this.agency = response.data;
            console.log(response.data);
          }).catch(e => {
            console.log(e);
          })

        },


      },

  mounted() {
    this.retrieveAgency()
  }

}
</script>

<style scoped>

</style>