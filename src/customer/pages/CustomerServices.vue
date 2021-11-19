<template>
  <v-row>
    <v-col v-if="hiredServices.length > 0">
      <v-data-table :headers="headers" :items="hiredServices" sort-by="name" class="elevation-1">
        <template v-slot:item.actions="{ item }">
          <v-btn color="primary" rounded small @click="addReview(item)">
            Rate service
          </v-btn>
        </template>
      </v-data-table>
    </v-col>

    <div v-if="hiredServices.length <= 0" class="mx-auto mb-10">
      <div class="d-flex justify-center align-center">
        <v-img
            max-height="100px"
            max-width="100px"
            src="https://i.ibb.co/82q8FhX/65842.png">
        </v-img>
      </div>
      <div class="d-flex justify-center">
        <p>You still do not have contracted services, discover Go2climb and start the trip of your life</p>
      </div>
    </div>
  </v-row>
</template>

<script>
import CustomersService from '../services/customers.service'
export default {
  name: "CustomerServices",
  data: () => ({
    hiredServices: [],
    /*
    displayHiredServices: [],
    resource: {
      info: '',
      cost: '',
      status: ''
    }, */
    headers: [
      {text: 'N° transaction', align: 'start', value: 'id'},
      { text: 'Contracted service', align: 'start', value: 'service.name'},
      { text: 'Total cost', align: 'start', value: `service.price`},
      { text: 'Service status', align: 'start', value: 'status'},
      { text: 'Service actions', align: 'start', value: 'actions'}
    ]
  }),
  methods: {
    retrieveHiredServices(){
      CustomersService.getHiredServicesByCustomerIdWithServiceInformation(1)
          .then(response => {
            this.hiredServices = response.data;
            console.log(this.hiredServices);
          }).catch(e => {
        console.log(e);
      })
    },

    addReview(item) {
      console.log(item);
    }

  },
  mounted(){
    this.retrieveHiredServices();
  }
}
</script>

<style scoped>

</style>