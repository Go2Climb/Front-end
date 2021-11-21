<template>
 <v-card class="py-4 px-8 rounded-lg">
   <header class="title font-weight-bold pl-0">Reviews</header>
   <div class="py-3">
     <div v-if="Object.keys(reviews).length === 0">
       <div class="d-flex justify-center align-center">
         <v-img
             max-height="100px"
             max-width="100px"
             src="https://i.ibb.co/82q8FhX/65842.png">
         </v-img>
       </div>
       <div class="d-flex justify-center">
         <p>You still do not have user reviews, get
           customers by promoting your services</p>
       </div>
     </div>
     <v-card v-for="(review, index) in reviews" v-bind:key="index" class="pa-4 mb-4">
       <div class="d-flex align-center">
         <v-avatar><img v-bind:src="review.customer.photo"></v-avatar>
         <div>
           <v-card-title>{{review.customer.name}} {{review.customer.lastName}}</v-card-title>
           <v-card-subtitle>{{review.date}}</v-card-subtitle>
         </div>
         <v-spacer></v-spacer>
         <div>
           <v-icon color ="amber"> mdi-star </v-icon>
           <p>{{review.score}}.0</p>
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
export default {
  name: "Reviews",
  props:['reviews'],
}
</script>

<style scoped>
  .logo{
    border-radius: 50%;
  }
</style>
