<template>
  <v-main class="secondary">
    <v-container>
      <v-row>
        <v-col cols="12" class="col-md-3">
          <AgencyDescription></AgencyDescription>
        </v-col>
        <v-col cols="12" class="col-md-9">
          <v-card class="mb-6">
            <v-card-title>Services</v-card-title>
            <div class="px-4 d-flex justify-space-between">
              <v-btn
                  depressed dark
                  v-on:click="setOnlyOffer()"
                  v-bind:class="[onlyOffer? active: noActive]">Offers
              </v-btn>
              <v-btn dark fab small color="primary"><v-icon dark>mdi-plus</v-icon></v-btn>
            </div>
            <v-row class="px-4 py-2 wrap">
              <v-col cols="12" class="col-md-3" v-for="(service, index) in services" :key="index">
                <v-card
                    class="my-2"
                    max-width="374"
                    min-height="310"
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
                        :src=service.photos
                    ></v-img>
                  </a>

                  <a href="" class="text-decoration-none">
                    <v-card-title class="d-flex flex-column align-center pb-0 black--text">{{service.name}}</v-card-title>
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
                      <a href="" class="text-decoration-none d-flex">
                        <div v-if="service.isOffer" class="text-decoration-line-through pr-2 black--text">${{service.price}}</div>
                        <div v-if="service.isOffer" class="black--text">${{service.newPrice}}</div>
                        <div v-else class="black--text">${{service.price}}</div>
                      </a>
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
          <v-card class="mb-4">
            <v-card-title>Reviews</v-card-title>
            <v-row class="px-4">
              <v-col cols="12" class="d-flex flex-row align-center col-md-6">
                <div class="pr-4 col-5">Professionalism</div>
                <v-progress-linear class="col-7" value="100" light background-color="grey" color="black"></v-progress-linear>
              </v-col>
              <v-col cols="12" class="d-flex flex-row align-center col-md-6">
                <div class="pr-4 col-5">Price/Quality</div>
                <v-progress-linear class="col-7" value="100" light background-color="grey" color="black"></v-progress-linear>
              </v-col>
              <v-col cols="12" class="d-flex flex-row align-center col-md-6">
                <div class="pr-4 col-5">Security</div>
                <v-progress-linear class="col-7" value="100" light background-color="grey" color="black"></v-progress-linear>
              </v-col>
              <v-col cols="12" class="d-flex flex-row align-center col-md-6">
                <div class="pr-4 col-5">Costs</div>
                <v-progress-linear class="col-7" value="100" light background-color="grey" color="black"></v-progress-linear>
              </v-col>
            </v-row>
            <div class="pa-8">
              <div v-if="Object.keys(reviews).length === 0">
                <div class="d-flex justify-center align-center">
                  <v-img
                      min-height="100px"
                      max-width="100px"
                      src="https://cdn-icons-png.flaticon.com/512/65/65842.png">
                  </v-img>
                </div>
                <div class="d-flex justify-center">
                  <p>You still do not have user reviews, get
                    customers by promoting your services</p>
                </div>
              </div>
              <v-card v-for="(review, index) in reviews" v-bind:key="index" class="pa-4 mb-4">
                <div class="d-flex align-center">
                  <v-avatar><img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"></v-avatar>
                  <div>
                    <v-card-title>{{review.author}}</v-card-title>
                    <v-card-subtitle>{{review.date}}</v-card-subtitle>
                  </div>
                </div>
                <v-card-text>
                  <p>{{review.comment}}</p>
                </v-card-text>
              </v-card>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import AgencyDescription from "./AgencyDescription";
import AgencyService from '../services/agencies.service'
export default {
  name: "CustomerProfile",
  components: {AgencyDescription},
  data: () => ({
    idAgency: 1,
    onlyOffer: 0,
    active: "primary",
    noActive: "secondary",
    services: [],
    reviews: []
  }),
  methods: {
    getServiceOfAgency(id) {
      AgencyService.getServices(id)
          .then((response) => {
            this.services = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          })
    },
    getReviewsOfAgency(id) {
      AgencyService.getReviews(id)
          .then((response) => {
            this.reviews = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          })
    },
    getServiceOfferOfAgency(id) {
      AgencyService.getServiceOffer(id)
          .then((response) => {
            this.services = response.data;
            console.log(response.data);
            console.log("hello");
          })
          .catch(e => {
            console.log(e);
          })
    },
    setOnlyOffer(){
      this.onlyOffer = !this.onlyOffer;
      if (this.onlyOffer) this.getServiceOfferOfAgency(this.idAgency);
      else this.getServiceOfAgency(this.idAgency);
    }
  },
  mounted() {
    this.getServiceOfAgency(this.idAgency);
    this.getReviewsOfAgency(this.idAgency);
  }

}
</script>

<style scoped>

</style>