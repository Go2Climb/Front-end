<template>
  <v-main app class="secondary">
    <v-container>
      <v-row class="d-flex flex-md-row flex-xl-column">
        <v-col cols="12" class="col-md-3">
          <!--Filters-->
          <v-card class="rounded-lg pa-1">
            <v-list>
              <v-subheader class="font-weight-bold title"> ${{ services.price }}</v-subheader>
              <v-list-item-group>
                <v-subheader class="font-weight-medium subtitle-1">Output</v-subheader>
                <v-text-field type="date" full-width solo hide-details single-line flat class="rounded-pill" placeholder="Enter the date"  outlined color="blue"></v-text-field>
                <v-subheader class="font-weight-medium subtitle-1">Persons</v-subheader>
                <v-text-field type="text" full-width solo hide-details single-line flat class="rounded-pill adjust" placeholder="Enter the number of people" outlined color="blue"></v-text-field>
                <v-btn class="rounded-pill my-5 ml-15" color="primary">Solicit</v-btn>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-col>

        <v-col cols="12" class="col-md-9">
          <!-- SECTION: OFFERS -->
          <agency-info :Sid = "id" :AgId ="services.agencyId"></agency-info>

          <v-row>
            <v-col>
              <!-- SECTION: Activities -->
              <v-card class="py-4 px-8 mb-4 rounded-lg">
                <v-list>
                  <header class="title font-weight-bold pl-0">The activities you will do</header>
                  <v-subheader v-for="act in activities" :key ="act.name"><v-icon class="pa-1">mdi-playlist-check</v-icon>{{act.description}}</v-subheader>

                  <v-list-item-group >


                  </v-list-item-group>
                </v-list>
              </v-card>
            </v-col>
            <!-- SECTION: Good2Know -->
            <v-col>
              <v-card class="py-4 px-8 mb-4 rounded-lg">
                <v-list>
                  <header class="title font-weight-bold pl-0">Good to Know</header>
                  <v-subheader class="justify-end">This service serves visitors from Monday to Friday</v-subheader>
                  <v-subheader class="font-weight-light justify-lg-end">from 10:00 am to 20:00 pm</v-subheader>
                  <v-list-item-group >


                  </v-list-item-group>
                </v-list>
              </v-card>
            </v-col>
          </v-row>

          <!-- SECTION: reviews -->

          <reviews v-bind:AId = "id"></reviews>

        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import ServicesService from "../services/services.service";

import AgencyInfo from "./AgencyInfo";
import Reviews from "./Reviews";



export default {
  name: "ServiceDetail",
  components: {Reviews, AgencyInfo},
  props: ['serviceId'],


  data: () => ({
    services: [],
    activities:[],
    id : ' ',

  }),

  methods: {
    retrieveServices(){

      ServicesService.getById(this.id)
          .then((response) => {
            this.services = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          })
    },
    retrieveActivities(){
      ServicesService.getActivities(this.id)
          .then((response) => {
            this.activities = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          })
    }


  },

  mounted() {
    this.retrieveServices();
    this.retrieveActivities();

  },

  beforeMount() {
    //console.log("XD")
    this.id = this.$route.params.id
    //console.log(this.serviceId)
  }


}
</script>

<style scoped>

</style>