<template>
  <v-card class="py-4 px-8 mb-4 rounded-lg">
    <v-list>
      <v-subheader class="title font-weight-bold pl-0">{{services.name}}</v-subheader>
      <v-row>
        <v-col>
          <v-subheader > <v-icon color ="blue"> mdi-map-marker-circle </v-icon> {{services.location}}</v-subheader>
        </v-col>
        <v-col>
          <v-subheader class="title font-weight-bold justify-end"> <v-icon color ="amber"> mdi-star </v-icon>  {{services.score}}</v-subheader>
        </v-col>
      </v-row>

      <v-row class="justify-center">
        <v-col class="d-flex child-flex ">
          <v-img
              :src= services.photos
              :lazy-src="`https://picsum.photos/10/6?image=${125}`"
              aspect-ratio="1"
              max-height="200"
              class="grey lighten-2"
          >
            <template v-slot:placeholder>
              <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
              >
                <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-col>
        <v-col class="d-flex child-flex justify-center"

        >
          <v-row>
            <v-col
                v-for="n in 4"
                :key="n"
                class="d-flex child-flex"
                cols="6"
            >
              <v-img
                  :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                  :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                  aspect-ratio="1"
                  max-height="85"
                  class="grey lighten-2"
              >
                <template v-slot:placeholder>
                  <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                  >
                    <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-list-item-group class="ml-3">
        <v-row class="my-8">
          <div>
            <v-img :src="`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxU5N0gjC5KeKFAVkh-sN7ogtf4lSQ_WsMJQ&usqp=CAU`"
                   min-height="80px"
                   max-width="80px"
                   class="logo ma-0"
            ></v-img>
          </div>
          <div class="d-flex flex-column justify-center">
            <v-subheader>Offered by {{agency.name}}</v-subheader>
            <v-subheader class="align-lg-start">Registered agency since October 2020</v-subheader>
          </div>
          <div class="d-flex align-center align-end ml-auto">
            <v-subheader class="font-weight-bold title">${{services.price}}</v-subheader>
          </div>
        </v-row>
        <v-subheader class="font-weight-bold align-lg-start">{{services.description}}</v-subheader>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
import ServicesService from "../../agency/services/services.service";
import AgenciesService from "../services/agencies.service";
export default {
  name: "AgencyInfo",

  data: () => ({
    services: [],
    agency: [],
    id: 's1'

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
    retrieveAgency(){
      AgenciesService.getById(1).then((response) =>{
        this.agency = response.data;
        console.log(response.data);
      }).catch(e => {
        console.log(e);
      })
    }

  },

  mounted() {
    this.retrieveServices();
    this.retrieveAgency();
  }
}
</script>


<style scoped>
.logo{
  margin-top: 25px;
  border-radius: 50%;
}
.full-witch {
  min-width: 100%;
}
</style>