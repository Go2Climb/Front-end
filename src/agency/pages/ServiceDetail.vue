<template>
  <v-main app class="secondary">
    <v-container>
      <v-row class="d-flex flex-md-row flex-xl-column">
        <v-col cols="12" class="col-md-3">
          <!--
          <v-card class="rounded-lg pa-4">
            <div>
              <v-subheader class="font-weight-bold title pl-0"> ${{ services.price }}</v-subheader>
              <div>
                <v-subheader class="font-weight-medium subtitle-1 pl-0">Output</v-subheader>
                <v-text-field dense outlined type="date" full-width solo hide-details single-line flat class="rounded-xl" color="blue"></v-text-field>
                <v-subheader class="font-weight-medium subtitle-1 pl-0">Persons</v-subheader>
                <v-combobox menu-props dense outlined class="rounded-xl" :items="numberPeople" disable-lookup placeholder="Number of people"></v-combobox>
                <v-btn block class="rounded-pill mb-5" color="primary">Solicit</v-btn>
              </div>
            </div>
          </v-card>
          -->
          <v-card class="rounded-lg pa-4">
            <v-btn block class="rounded-pill mb-5 text-uppercase" color="primary">Edit service</v-btn>
          </v-card>
        </v-col>
        <v-col cols="12" class="col-md-9">
          <!-- SECTION: OFFERS -->
          <AgencyInfo></AgencyInfo>
          <v-row>
            <v-col>
          <!-- SECTION: Activities -->
              <v-card class="py-4 px-8 mb-4 rounded-lg">
                <v-list>
                  <header class="title font-weight-bold pl-0">The activities you will do</header>
                  <v-subheader v-for="activity in activities" :key ="activity.name">
                    <v-icon class="pa-1">mdi-playlist-check</v-icon>{{activity.description}}
                  </v-subheader>

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
          <Reviews></Reviews>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import ServiceService from "../services/services.service"
import AgencyInfo from "./AgencyInfo";
import Reviews from "./Reviews";


export default {
  name: "ServiceDetail",
  components: {Reviews, AgencyInfo},
  data: () => ({
    activities: [],
    idService: 's1',
    numberPeople: ["1 People", "2 People", "3 People"]
  }),

  methods: {
    getActivities(){
      ServiceService.getActivities(this.idService)
          .then((response) => {
            this.activities = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          })
    },
  },

  mounted() {
    this.getActivities();
  }
}
</script>

<style scoped>

</style>