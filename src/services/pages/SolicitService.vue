<template>
  <v-dialog v-model="dialogSolicit" persistent max-width="600px">
    <v-card class="rounded-xl">
      <v-card-text class="pa-2">
        <div cols="12" class="d-flex align-center justify-space-around">
          <v-btn icon color="black" @click="closeForm">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <div class="mx-auto"><h3>Pay Service</h3></div>
          <v-btn icon disabled></v-btn>
        </div>
        <hr class="hr">
        <v-form ref="form" class="mx-8 v-border-none" lazy-validation border-none>
          <h3 class="mt-4">Service Selected</h3>
          <v-card class="mt-5 mb-7 rounded-xl">
            <v-row class="px-4">
              <v-col cols="6">
                <v-img class="rounded-xl" src="https://www.peru.travel/Contenido/Destino/Imagen/es/2/1.3/Principal/Ancash.jpg"></v-img>
              </v-col>
              <v-col cols="6" class="d-flex flex-column justify-center">
                <p class="font-weight-bold">{{service.name}}</p>
                <div class="d-flex">
                  <p class="font-weight-bold text-secondary pr-1">Ofrecido por</p>
                  <span class="font-weight-bold black-text">TravelNew</span>
                </div>
              </v-col>
              <v-col cols="6">
                <p>Fecha de salida: {{dateFormatted}}</p>
                <p>Número de personas: {{nPeople}}</p>
              </v-col>
              <v-col cols="6" class="d-flex flex-column align-end">
                <p class="ma-0">Total importe:</p>
                <p class="font-weight-bold ma-0 title">${{service.price}}.00</p>
              </v-col>
            </v-row>
          </v-card>
          <h3 class="my-4">Payment method</h3>
          <v-text-field hide-details="auto" type="text" placeholder="Credit/debit card number" solo dense class="rounded-t-xl rounded-b-0"></v-text-field>
          <v-text-field hide-details="auto" type="text" placeholder="Name of the account holder" solo dense class="rounded-0"></v-text-field>
          <div class="d-flex">
            <v-text-field type="text" placeholder="MM/YY" solo dense class="rounded-bl-xl rounded-t-0 rounded-r-0"></v-text-field>
            <v-text-field type="text" placeholder="CVC/CVV" solo dense class="rounded-br-xl rounded-t-0 rounded-l-0"></v-text-field>
          </div>
        </v-form>
        <div class="mx-8 d-flex justify-end">
          <v-btn block color="primary" class="mb-2" rounded @click="saveServiceReview">Pay</v-btn>
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import HiredService from '../../agency/services/hiredServices.service'
import moment from 'moment'
export default {
  name: "SolicitService",
  props: ['service', 'date', 'nPeople', 'dialogSolicit'],
  data: () => ({
    errors: [],
    service: [],
    dateOutput: '',
    rules: [
      value => !!value || 'Required.',
      value => (value && value.length >= 3) || 'Min 3 characters',
    ],
  }),
  computed: {
    dateFormatted: function () {
      let dateFormatted = moment(dateFormatted).format('DD/MM/YYYY');
      return dateFormatted;
    }
  },
  methods:{
    closeForm() {
      this.$refs.form.reset();
      this.dialogSolicit = false;
      this.$emit('dialog-solicit-false');
    },
    createService(){
      this.item.serviceId = this.service.id
      this.item.amount = this.people
      this.item.scheduledDate = this.date
      this.item.price = this.service.price
      this.item.status = 'active'

      console.log(this.item)
      HiredService.create(this.item).catch(e => {
        console.log(e);
      })
    },
  },
  mounted(){
    this.dateOutput = this.date;
  }

}
</script>

<style scoped>
  .text-secondary {
    color: gray;
  }
</style>
