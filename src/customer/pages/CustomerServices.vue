<template>
  <v-data-table :headers="headers" :items="hiredServices" sort-by="name" class="elevation-1">
    <template v-slot:item.actions="{ item }">
      <v-btn color="primary" rounded small @click="addReview(item)">
        Rate service
      </v-btn>
    </template>
  </v-data-table>
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