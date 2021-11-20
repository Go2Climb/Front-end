<template xmlns:v-text-field="http://www.w3.org/1999/html">

  <v-container>
  <v-card v-if="editinfo == false">
    <v-col class="justify-center align-center ml-8">
    <v-img
        class="logo align-center justify-center"
        :src= "agency.photo">
    </v-img>
    </v-col>
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
    <v-col class="justify-center align-center ml-8">
    <v-img
        class="logo align-center justify-center"
        :src= "agency.photo">
    </v-img>
    </v-col>
    <v-form>
    <v-card-text>
      <v-row>
        <v-text-field
            :hint="agency.name"
            label="Agency name"
            v-model="newinfo.name"
            :rules="required"


        ></v-text-field>
      </v-row>
      <v-row>
        <v-text-field
            :hint="agency.email"
            label="Email"

            v-model="newinfo.email"
        ></v-text-field>
      </v-row>
      <v-row>
      <v-text-field
          :hint="agency.description"
          label="Description"
          v-model="newinfo.description"

      >
      </v-text-field>
      </v-row>
      <v-row>


        <v-text-field
            label= "Location"
            :hint="agency.location"

            v-model="newinfo.location"
        ></v-text-field>

      </v-row>

      <v-row>

        <v-text-field
            label="RUC"
            :hint="agency.RUC"
            v-model="newinfo.RUC"
        ></v-text-field>
      </v-row>
      <v-row>

          <v-text-field
              :hint="agency.phoneNumber"
              label="Phone"
              v-model="newinfo.phoneNumber"
          >
          </v-text-field>

      </v-row>

    </v-card-text>
    </v-form>
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
    },
    required: [v => !!v || 'Required.']

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
