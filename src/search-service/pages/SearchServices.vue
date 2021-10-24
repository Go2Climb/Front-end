<template>
  <v-main app class="secondary">
    <v-container>
      <v-row class="d-flex flex-md-row flex-xl-column">
        <v-col cols="12" class="col-md-3">
          <v-card class="pa-4">
            <v-card-titlen class="px-0">Filters</v-card-titlen>
            <div>
              <v-card-subtitle class="px-0">Price</v-card-subtitle>
              <div class="d-flex justify-center align-center">
                <v-text-field type="number" placeholder="MIN" solo class="mr-2" :rules="rules"></v-text-field>
                <p class="mb-6"> - </p>
                <v-text-field type="number" placeholder="MAX" solo class="ml-2" :rules="rules"></v-text-field>
              </div>
            </div>
            <div>
              <v-card-subtitle class="pa-0">Agency score</v-card-subtitle>
              <div class="pb-1" v-for="(score, index) in agencyScore" v-bind:key="index">
                <a href="" class="text-decoration-none">
                  <div class="d-flex align-center">
                    <v-rating
                        empty-icon="mdi-star-outline"
                        full-icon="mdi-star"
                        half-icon="mdi-star-half"
                        length="5"
                        :value="score"
                        readonly
                        class="mr-2"
                        small
                        color="yellow"
                        background-color="black"
                    ></v-rating>
                    <p class="ma-0 text-decoration-none black--text">o más</p>
                  </div>
                </a>
              </div>
            </div>
            <div class="pt-4">
              <v-card-subtitle class="pa-0">Service score</v-card-subtitle>
              <div class="pb-1" v-for="(score, index) in serviceScore" v-bind:key="index">
                <a href="" class="text-decoration-none">
                  <div class="d-flex align-center">
                    <v-rating
                        empty-icon="mdi-star-outline"
                        full-icon="mdi-star"
                        half-icon="mdi-star-half"
                        length="5"
                        :value="score"
                        readonly
                        class="mr-2"
                        small
                        color="yellow"
                        background-color="black"
                    ></v-rating>
                    <p class="ma-0 black--text">o más</p>
                  </div>
                </a>
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" class="col-md-9">
          <v-card min-height="568.7" class="pa-4">
            <v-card-subtitle class="px-0">More than {{services.length}} matches for <span class="font-weight-bold">{{word}}</span></v-card-subtitle>
            <v-divider></v-divider>
            <div class="d-flex flex-column">
              <div>
                <v-card class="d-flex mt-3 mb-1 rounded-xl" v-for="(service, index) in services" v-bind:key="index">
                  <v-row>
                    <v-col cols="4" class="col-4">
                      <a href="">
                        <v-img max-width="300px" max-height="150px" class="rounded-l-xl" :src="service.photos"></v-img>
                      </a>
                    </v-col>
                    <v-col cols="8" class="pa-3 d-flex flex-column justify-center">
                      <a href="" class="text-decoration-none black--text">
                        <v-card-title class="pa-0">{{service.name}}</v-card-title>
                      </a>
                      <v-rating
                          empty-icon="mdi-star-outline"
                          full-icon="mdi-star"
                          half-icon="mdi-star-half"
                          length="5"
                          :value="service.score"
                          readonly
                          class="ma-0"
                          small
                      ></v-rating>
                      <div class="d-flex align-center ma-0">
                        <p class="mb-0">by
                          <a href="" class="text-decoration-none"><span class="font-weight-bold black--text">TravelNew</span></a>
                        </p>
                        <v-rating
                            empty-icon="mdi-star-outline"
                            full-icon="mdi-star"
                            half-icon="mdi-star-half"
                            length="5"
                            :value="service.score"
                            readonly
                            class="ml-2 my-0"
                            small
                        ></v-rating>
                      </div>
                      <p class="font-weight-bold headline ma-0">${{service.price}}</p>
                    </v-col>
                  </v-row>
                </v-card>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import ServiceService from '../services/services.service'
import AgenciesService from '../services/agencies.service'
export default {
  name: "SearchServices",
  data: () => ({
    services: [],
    agency: [],
    word: ' ',
    agencyScore: [5, 4, 3, 2, 1],
    serviceScore: [5, 4, 3, 2, 1],
  }),
  methods: {
    getServicesByName() {
      ServiceService.getByName(this.word)
          .then((response) => {
            this.services = response.data;
            for(let i = 0; i < response.data.length; i++)
            {
              AgenciesService.getById(this.services.at(i).idAgency)
                  .then((res) => {
                    this.services.nameAgency = res.data.name;
                  })
                  .catch(e => {
                    console.log(e);
                  })
            }
          })
          .catch(e => {
            console.log(e);
          })
    },
    getAgencyInfo() {
      for(let i = 0; i < this.services.length; i++)
      {
        AgenciesService.getById(this.services.at(i).idAgency)
            .then((response) => {
              this.agency.push(response.data);
            })
            .catch(e => {
              console.log(e);
            })
      }
    },
    searchByInput() {
      this.getServicesByName();
      this.getAgencyInfo();
      console.log(this.services);
    },
  },
  mounted() {
    this.searchByInput();
  },
  beforeMount() {
    this.word = this.$route.params.name
  },
}
</script>

<style scoped>

</style>