<template>
  <v-card class="pa-5">
    <v-card-title> Payment </v-card-title>
    <v-divider></v-divider>
    <v-row>
      <v-container>
      <v-card
          outlined
          class="ma-5 card1"
         >
        <v-row class="mb-n8">
          <v-col class="align-center">
            <v-img
                :src="service.photos"
                width="250px"
                class="rounded"
            ></v-img>


          </v-col>
          <v-col>
            <v-card-text class="font-weight-bold mb-n8">{{service.name}}</v-card-text>
            <v-card-text class="mb-n8">{{service.location}}</v-card-text>
            <v-card-text>Offered by {{service.agencyId}}</v-card-text>

          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card-text class="mb-n8">
              Departure Date: {{date}}
            </v-card-text>
            <v-card-text>
              Number of Passengers: {{people}}
            </v-card-text>
          </v-col>
          <v-col class="align-content-end">
            <v-card-text class="font-weight-bold">Total amount ${{service.price}}</v-card-text>
          </v-col>

        </v-row>



      </v-card>

      </v-container>
    </v-row>
    <v-row class="mb-n8">
      <v-card-text>Payment method</v-card-text>
      <v-container>
        <v-row justify="center" class="mb-n16">
          <v-col cols="10" >
        <v-text-field shaped placeholder="Card Number" outlined></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center" class="mb-n16">
          <v-col cols="10" >
            <v-text-field  placeholder="Holder Name" outlined></v-text-field>
          </v-col>
        </v-row>
        <v-row align-content="center" justify="center" >
          <v-col cols="4" class="align-center" >
            <v-text-field  placeholder="Month/Year" class="text2 justify-end" outlined></v-text-field>
          </v-col>

          <v-col cols="4" class="align-center">
              <v-text-field placeholder="ccv" outlined class="text1"></v-text-field>
          </v-col>

        </v-row>
      </v-container>

    </v-row>
    <v-row justify="center">
      <v-btn rounded
             width="200px"
            color="#9CD4E7">Pay</v-btn>
    </v-row>

  </v-card>

</template>

<script>
export default {
  name: "SolicitService",
  props: ['pDetail', 'ppl', 'dte'],

  data: () => ({
    date: '',
    people: 0,
    service: []

  }),
  methods:{

  },
  mounted(){
    this.date = this.dte,
    this.people= this.ppl,
    this.service = this.pDetail
  }

}
</script>

<style scoped>
.text1{
  border-bottom-right-radius: 25px ;
}
.text2{
  border-bottom-left-radius: 25px ;
}
.card1{
  border-radius: 25px;
  outline-color: #9CD4E7;
}
</style>
