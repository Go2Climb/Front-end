<template>
  <v-main app class="secondary">
    <v-container>
      <v-row class="d-flex flex-md-row flex-xl-column">
        <v-col cols="12" class="col-md-3">
          <!--Filters-->
          <v-card class="rounded-lg pa-1">
            <v-list flat>
              <v-subheader class="font-weight-bold title">Categories</v-subheader>
              <v-list-item-group>
                <v-list-item href="#secOffers">
                  <v-list-item-title>Offers of the day</v-list-item-title>
                </v-list-item>
                <v-list-item href="#secPopular">
                  <v-list-item-title>The most popular</v-list-item-title>
                </v-list-item>
                <v-list-item href="#secForYou">
                  <v-list-item-title>For you</v-list-item-title>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-col>

        <v-col cols="12" class="col-md-9">
          <!-- SECTION: OFFERS -->
          <v-card id="secOffers" class="py-4 px-8 mb-4 rounded-lg">
            <v-list>
              <v-subheader class="title font-weight-bold pl-0">Offers of the day</v-subheader>
              <v-list-item-group>
                <v-row>
                    <v-col cols="12" class="col-md-3 wrap" v-for="service in services" :key="service.id">
                      <v-card
                          class="my-2"
                          max-width="374"
                          min-height="250"
                      >
                        <template slot="progress">
                          <v-progress-linear
                              color="deep-purple"
                              height="100"
                              indeterminate
                          ></v-progress-linear>
                        </template>

                        <a href="">
                          <v-img
                              height=120
                              :src="service.photos"
                          ></v-img>
                        </a>

                        <a href="" class="text-decoration-none">
                          <v-card-title class="d-flex flex-column align-center pb-0 black--text text-sm-body-2"> {{ service.name }} </v-card-title>
                        </a>

                        <v-card-text class="d-flex flex-column align-center">
                          <v-row
                              align="center"
                              class="mx-0"
                          >
                            <a href="" class="text-decoration-none">
                              <v-rating
                                  :value="service.score"
                                  color="amber"
                                  dense
                                  half-increments
                                  readonly
                                  size="20"
                              ></v-rating>
                            </a>
                          </v-row>

                          <div class="pt-3 text-subtitle-1 d-flex flex-row">
                            <a href="" class="text-decoration-none ">
                              <div class="text-decoration-line-through pr-2 black--text">$500</div>
                            </a>
                            <a href="" class="text-decoration-none">
                              <div class="black--text"> {{ `$${service.price}.00` }} </div>
                            </a>
                          </div>
                        </v-card-text>
                      </v-card>
                    </v-col>

                </v-row>
              </v-list-item-group>
            </v-list>
          </v-card>

          <!-- SECTION: MORE POPULAR -->
          <v-card id="secPopular" class="py-4 px-8 mb-4 rounded-lg">
            <v-list>
              <v-subheader class="title font-weight-bold pl-0">The most popular</v-subheader>
              <v-list-item-group >
                <v-row>
                  <v-col cols="12" class="col-md-3">
                    <v-card
                        class="my-2"
                        max-width="374"
                    >
                      <template slot="progress">
                        <v-progress-linear
                            color="deep-purple"
                            height="10"
                            indeterminate
                        ></v-progress-linear>
                      </template>

                      <a href="">
                        <v-img
                            height=120
                            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                        ></v-img>
                      </a>

                      <a href="" class="text-decoration-none">
                        <v-card-title class="d-flex flex-column align-center pb-0 black--text">Cafe Badilico</v-card-title>
                      </a>

                      <v-card-text class="d-flex flex-column align-center">
                        <v-row
                            align="center"
                            class="mx-0"
                        >
                          <a href="" class="text-decoration-none">
                            <v-rating
                                :value="4"
                                color="amber"
                                dense
                                half-increments
                                readonly
                                size="20"
                            ></v-rating>
                          </a>
                        </v-row>

                        <div class="pt-3 text-subtitle-1 d-flex flex-row">
                          <a href="" class="text-decoration-none">
                            <div class="black--text">$480</div>
                          </a>
                        </div>
                      </v-card-text>
                    </v-card>
                  </v-col>
                  <v-col cols="12" class="col-md-3">
                    <v-card
                        class="my-2"
                        max-width="374"
                    >
                      <template slot="progress">
                        <v-progress-linear
                            color="deep-purple"
                            height="10"
                            indeterminate
                        ></v-progress-linear>
                      </template>

                      <a href="">
                        <v-img
                            height=120
                            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                        ></v-img>
                      </a>

                      <a href="" class="text-decoration-none">
                        <v-card-title class="d-flex flex-column align-center pb-0 black--text">Cafe Badilico</v-card-title>
                      </a>

                      <v-card-text class="d-flex flex-column align-center">
                        <v-row
                            align="center"
                            class="mx-0"
                        >
                          <a href="" class="text-decoration-none">
                            <v-rating
                                :value="4"
                                color="amber"
                                dense
                                half-increments
                                readonly
                                size="20"
                            ></v-rating>
                          </a>
                        </v-row>

                        <div class="pt-3 text-subtitle-1 d-flex flex-row">
                          <a href="" class="text-decoration-none">
                            <div class="black--text">$480</div>
                          </a>
                        </div>
                      </v-card-text>
                    </v-card>
                  </v-col>
                  <v-col cols="12" class="col-md-3">
                    <v-card
                        class="my-2"
                        max-width="374"
                    >
                      <template slot="progress">
                        <v-progress-linear
                            color="deep-purple"
                            height="10"
                            indeterminate
                        ></v-progress-linear>
                      </template>

                      <a href="">
                        <v-img
                            height=120
                            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                        ></v-img>
                      </a>

                      <a href="" class="text-decoration-none">
                        <v-card-title class="d-flex flex-column align-center pb-0 black--text">Cafe Badilico</v-card-title>
                      </a>

                      <v-card-text class="d-flex flex-column align-center">
                        <v-row
                            align="center"
                            class="mx-0"
                        >
                          <a href="" class="text-decoration-none">
                            <v-rating
                                :value="4"
                                color="amber"
                                dense
                                half-increments
                                readonly
                                size="20"
                            ></v-rating>
                          </a>
                        </v-row>

                        <div class="pt-3 text-subtitle-1 d-flex flex-row">
                          <a href="" class="text-decoration-none">
                            <div class="black--text">$480</div>
                          </a>
                        </div>
                      </v-card-text>
                    </v-card>
                  </v-col>
                  <v-col cols="12" class="col-md-3">
                    <v-card
                        class="my-2"
                        max-width="374"
                    >
                      <template slot="progress">
                        <v-progress-linear
                            color="deep-purple"
                            height="10"
                            indeterminate
                        ></v-progress-linear>
                      </template>

                      <a href="">
                        <v-img
                            height=120
                            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                        ></v-img>
                      </a>

                      <a href="" class="text-decoration-none">
                        <v-card-title class="d-flex flex-column align-center pb-0 black--text">Cafe Badilico</v-card-title>
                      </a>

                      <v-card-text class="d-flex flex-column align-center">
                        <v-row
                            align="center"
                            class="mx-0"
                        >
                          <a href="" class="text-decoration-none">
                            <v-rating
                                :value="4"
                                color="amber"
                                dense
                                half-increments
                                readonly
                                size="20"
                            ></v-rating>
                          </a>
                        </v-row>

                        <div class="pt-3 text-subtitle-1 d-flex flex-row">
                          <a href="" class="text-decoration-none">
                            <div class="black--text">$480</div>
                          </a>
                        </div>
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>

              </v-list-item-group>
            </v-list>
          </v-card>

          <!-- SECTION: FOR YOU -->
          <v-card id="secForYou" class="py-4 px-8 rounded-lg">
            <v-list>
              <v-subheader class="title font-weight-bold pl-0">For you</v-subheader>
              <v-list-item-group >
                <v-row>
                  <v-col cols="12" class="col-md-3">
                    <v-card
                        class="my-2"
                        max-width="374"
                    >
                      <template slot="progress">
                        <v-progress-linear
                            color="deep-purple"
                            height="10"
                            indeterminate
                        ></v-progress-linear>
                      </template>

                      <a href="">
                        <v-img
                            height=120
                            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                        ></v-img>
                      </a>

                      <a href="" class="text-decoration-none">
                        <v-card-title class="d-flex flex-column align-center pb-0 black--text">Cafe Badilico</v-card-title>
                      </a>

                      <v-card-text class="d-flex flex-column align-center">
                        <v-row
                            align="center"
                            class="mx-0"
                        >
                          <a href="" class="text-decoration-none">
                            <v-rating
                                :value="4"
                                color="amber"
                                dense
                                half-increments
                                readonly
                                size="20"
                            ></v-rating>
                          </a>
                        </v-row>

                        <div class="pt-3 text-subtitle-1 d-flex flex-row">
                          <a href="" class="text-decoration-none">
                            <div class="black--text">$480</div>
                          </a>
                        </div>
                      </v-card-text>
                    </v-card>
                  </v-col>
                  <v-col cols="12" class="col-md-3">
                    <v-card
                        class="my-2"
                        max-width="374"
                    >
                      <template slot="progress">
                        <v-progress-linear
                            color="deep-purple"
                            height="10"
                            indeterminate
                        ></v-progress-linear>
                      </template>

                      <a href="">
                        <v-img
                            height=120
                            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                        ></v-img>
                      </a>

                      <a href="" class="text-decoration-none">
                        <v-card-title class="d-flex flex-column align-center pb-0 black--text">Cafe Badilico</v-card-title>
                      </a>

                      <v-card-text class="d-flex flex-column align-center">
                        <v-row
                            align="center"
                            class="mx-0"
                        >
                          <a href="" class="text-decoration-none">
                            <v-rating
                                :value="4"
                                color="amber"
                                dense
                                half-increments
                                readonly
                                size="20"
                            ></v-rating>
                          </a>
                        </v-row>

                        <div class="pt-3 text-subtitle-1 d-flex flex-row">
                          <a href="" class="text-decoration-none">
                            <div class="black--text">$480</div>
                          </a>
                        </div>
                      </v-card-text>
                    </v-card>
                  </v-col>
                  <v-col cols="12" class="col-md-3">
                    <v-card
                        class="my-2"
                        max-width="374"
                    >
                      <template slot="progress">
                        <v-progress-linear
                            color="deep-purple"
                            height="10"
                            indeterminate
                        ></v-progress-linear>
                      </template>

                      <a href="">
                        <v-img
                            height=120
                            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                        ></v-img>
                      </a>

                      <a href="" class="text-decoration-none">
                        <v-card-title class="d-flex flex-column align-center pb-0 black--text">Cafe Badilico</v-card-title>
                      </a>

                      <v-card-text class="d-flex flex-column align-center">
                        <v-row
                            align="center"
                            class="mx-0"
                        >
                          <a href="" class="text-decoration-none">
                            <v-rating
                                :value="4"
                                color="amber"
                                dense
                                half-increments
                                readonly
                                size="20"
                            ></v-rating>
                          </a>
                        </v-row>

                        <div class="pt-3 text-subtitle-1 d-flex flex-row">
                          <a href="" class="text-decoration-none">
                            <div class="black--text">$480</div>
                          </a>
                        </div>
                      </v-card-text>
                    </v-card>
                  </v-col>
                  <v-col cols="12" class="col-md-3">
                    <v-card
                        class="my-2"
                        max-width="374"
                    >
                      <template slot="progress">
                        <v-progress-linear
                            color="deep-purple"
                            height="10"
                            indeterminate
                        ></v-progress-linear>
                      </template>

                      <a href="">
                        <v-img
                            height=120
                            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                        ></v-img>
                      </a>

                      <a href="" class="text-decoration-none">
                        <v-card-title class="d-flex flex-column align-center pb-0 black--text">Cafe Badilico</v-card-title>
                      </a>

                      <v-card-text class="d-flex flex-column align-center">
                        <v-row
                            align="center"
                            class="mx-0"
                        >
                          <a href="" class="text-decoration-none">
                            <v-rating
                                :value="4"
                                color="amber"
                                dense
                                half-increments
                                readonly
                                size="20"
                            ></v-rating>
                          </a>
                        </v-row>

                        <div class="pt-3 text-subtitle-1 d-flex flex-row">
                          <a href="" class="text-decoration-none">
                            <div class="black--text">$480</div>
                          </a>
                        </div>
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>

              </v-list-item-group>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import ServicesService from '../agency/services/services.service'

export default {
  name: "Home",
  data: () => ({
    services: []
  }),

  methods: {
    retrieveServices(){
      ServicesService.getAll()
          .then((response) => {
            this.services = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          })
    }
  },

  mounted() {
    this.retrieveServices();
  }
}
</script>

<style scoped>

</style>