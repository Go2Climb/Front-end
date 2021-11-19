<template>
  <v-data-table :headers="headers" :items="hiredServices" sort-by="name" class="elevation-1">
    <template v-slot:top>
      <ServiceReview :dialogService="dialogService" v-on:dialog-service-false="setCustomerReview" v-on:dialog-continue="setAgencyReview"></ServiceReview>
      <AgencyReview :dialogAgency="dialogAgency" v-on:dialog-agency-false="closeForm"></AgencyReview>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-btn color="primary" rounded small @click="setCustomerReview(item)">
        Rate service
      </v-btn>
    </template>
  </v-data-table>
</template>

<script>
import CustomersService from '../services/customers.service'
import ServiceReview from '../pages/ServiceReview'
import AgencyReview from '../pages/AgencyReview'
export default {
  name: "CustomerServices",
  components: {ServiceReview, AgencyReview},
  data: () => ({
    hiredServices: [],
    dialogService: false,
    dialogAgency: false,
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
    ],
  }),
  methods: {
    retrieveHiredServices(){
      CustomersService.getHiredServicesByCustomerId("c2")
          .then(response => {
            this.hiredServices = response.data;
            console.log(this.hiredServices);
          }).catch(e => {
        console.log(e);
      })
    },

    getDisplayInfoHiredServices(){
      for (let position = 0; position < this.hiredServices.length; position++){
        this.resource.info = `${this.hiredServices.service.name}`;
        this.displayHiredServices[position] = this.resource;
      }
    },
    setCustomerReview(item) {
      this.dialogService = !this.dialogService;
      console.log(item);
    },
    setAgencyReview() {
      this.dialogService = !this.dialogService;
      this.dialogAgency = !this.dialogAgency;
    },
    closeForm() {
      this.dialogAgency = !this.dialogAgency;
    }
  },
  mounted(){
    this.retrieveHiredServices();
  }
}
</script>

<style scoped>

</style>
