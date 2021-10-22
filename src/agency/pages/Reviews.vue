<template>
 <v-card class="py-4 px-8 mb-4 rounded-lg">
   <header class="title font-weight-bold pl-0">Reviews</header>
   <div class="py-3">
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
</template>

<script>
import ServicesService from "../../agency/services/services.service";

export default {
  name: "Reviews",
  data: () => ({
    reviews: [],
    idService: 's1'

  }),

  methods: {
    retrieveServices(){
      ServicesService.getReviews(this.idService)
          .then((response) => {
            this.reviews = response.data;
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
.logo{
  border-radius: 50%;
}
</style>