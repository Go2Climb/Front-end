<template xmlns:v-text-field="http://www.w3.org/1999/html">

  <v-container>
  <v-card v-if="editinfo == false">
    <v-img
        class="logo"
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
    <v-card-actions class="justify-center">
      <template>
        <v-btn  v-on:click="edit" color="primary" >
          Edit information
        </v-btn>
      </template>
    </v-card-actions>
  </v-card>

  <v-card v-if="editinfo == true">
    <v-img
        height=150
        :src= "agency.photo">
    </v-img>
    <v-card-text>
      <v-text-field
          :label="agency.name"
          class="subtitle-2 ma-0 "
          dense
          v-model="newinfo.name"
      ></v-text-field>

      <v-text-field
          :label="agency.email"
          class="subtitle-1 ma-0"
          dense
          v-model="newinfo.email"
      ></v-text-field>


      <v-text-field
          :label="agency.description"
          class="ma-0 text-sm-subtitle-1"
          v-model="newinfo.description"

      >
      </v-text-field>

      <div class="d-flex flex-column">
        <p class="font-weight-bold ma-0">Location</p>
        <v-text-field
            :label="agency.location"
            class="ma-0"
            v-model="newinfo.location"
        ></v-text-field>
        </div>

      <div class="d-flex flex-column">
        <p class="font-weight-bold">RUC</p>
        <v-text-field
            :label="agency.RUC"
            class="ma-0"
            v-model="newinfo.RUC"
        ></v-text-field>

        <div class="d-flex flex-column">
          <p class="font-weight-bold ma-0">Telephone</p>
          <v-text-field
              :label="agency.phoneNumber"
              class="ma-0"
              v-model="newinfo.phoneNumber"
          >
          </v-text-field>
         </div>
      </div>

    </v-card-text>
      <v-card-actions class="justify-center">
      <v-btn  v-on:click="save" color="primary" >
        save
      </v-btn>
      </v-card-actions>
  </v-card>

  </v-container>

</template>

<script>
import AgenciesService from '../services/agencies.service'

export default {
  name: "AgencyDescription",
  data: () => ({
    agency:[],
    id: 1,
    editinfo: false,
    newinfo: {
      id: 1,
      name: " ",
      email: " ",
      description: " ",
      score: "5",
      location: " ",
      RUC: " ",
      phoneNumber: " ",
      photo: ""
    }
  }),

  methods:
      {
        retrieveAgency(){
          AgenciesService.getById(this.id).then((response) =>{
            this.agency = response.data;
            //console.log(response.data);
          }).catch(e => {
            console.log(e);
          })

        },

        edit(){
          this.editinfo = true
        },

        async save(){
          console.log(this.newinfo)
          await AgenciesService.update(this.id, this.newinfo)
          this.editinfo = false
          this.retrieveAgency()
        }
      },
  mounted() {
    this.retrieveAgency()
  }
}
</script>

<style scoped>
  .logo{
    border-radius: 50%;
    height: 150px;
    width: 150px;
  }
</style>
