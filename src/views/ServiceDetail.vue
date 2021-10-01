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
                <v-subheader class="font-weight-medium subtitle-1">Salida</v-subheader>
                <v-text-field type="date" full-width solo hide-details single-line flat class="rounded-pill" placeholder="Ingrese la fecha"  outlined color="blue"></v-text-field>
                <v-subheader class="font-weight-medium subtitle-1">Personas</v-subheader>
                <v-text-field type="text" full-width solo hide-details single-line flat class="rounded-pill ajustar" placeholder="Ingrese el numero de personas" outlined color="blue"></v-text-field>
                <v-btn class="rounded-pill my-5 ml-15" color="primary">  Solicitar</v-btn>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-col>

        <v-col cols="12" class="col-md-9">
          <!-- SECTION: OFFERS -->

          <agency-info></agency-info>

          <v-row>
            <v-col>
          <!-- SECTION: Activities -->
              <v-card class="py-4 px-8 mb-4 rounded-lg">
                <v-list>
                  <header class="title font-weight-bold pl-0">las actividades que realizaras</header>
                  <v-subheader v-for="activities in services.activities" :key ="activities.name"> <v-icon class="pa-1">mdi-playlist-check</v-icon>{{activities.description}}</v-subheader>

                  <v-list-item-group >


                  </v-list-item-group>
                </v-list>
              </v-card>
            </v-col>
          <!-- SECTION: Good2Know -->
            <v-col>
              <v-card class="py-4 px-8 mb-4 rounded-lg">
                <v-list>
                  <header class="title font-weight-bold pl-0">Es bueno saberlo</header>
                  <v-subheader class="justify-end"> Este servicio atiende a los visitantes de lunes a viernes</v-subheader>
                  <v-subheader class="font-weight-light justify-lg-end">desde 10:00 am hasta 20:00 pm</v-subheader>
                  <v-list-item-group >


                  </v-list-item-group>
                </v-list>
              </v-card>
            </v-col>
          </v-row>

          <!-- SECTION: reviews -->

              <reviews></reviews>

        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import ServicesService from "../agency/services/services.service";

import AgencyInfo from "../agency/pages/AgencyInfo";
import Reviews from "../agency/pages/Reviews";


export default {
  name: "ServiceDetail",
  components: {Reviews, AgencyInfo},
  data: () => ({
    services: [],
    agency: [],
    id: 's1'

  }),

  methods: {
    retrieveServices(){
      console.log(this.id)
      ServicesService.getById(this.id)
          .then((response) => {
            this.services = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          })
    },


  },

  mounted() {
    this.retrieveServices();


  }
}
</script>

<style scoped>

</style>