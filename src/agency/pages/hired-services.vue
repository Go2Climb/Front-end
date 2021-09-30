<template>
  <v-row align="center" class="mx-auto">
    <v-col cols="12">
      <v-card class="mx-auto">
        <v-data-table :headers="headers" :items="clients" sort-by="name" class="elevation-1" show-group-by>
          <template v-slot:top>
            <v-toolbar flat>
              <!-- Change status -->
              <v-dialog>

              </v-dialog>
            </v-toolbar>
          </template>
        </v-data-table>
      </v-card>
    </v-col>
  </v-row>

</template>

<script>
import HiredService from '../services/hired-services.service'

export default {
  name: "hired-services",
  data: () => ({
    headers: [
      { text: 'Nombre y apellidos', align: 'start', value: 'name', groupable: false  },
      { text: 'Correo', align: 'left', value: 'email', sortable: false, groupable: false },
      { text: 'Teléfono', align: 'left', value: 'phoneNumber', sortable: false, groupable: false },
      { text: 'Cantidad (personas)', align: 'left', value: 'amount', groupable: false },
      { text: 'Servicio', align: 'left', value: 'service'},
      { text: 'Fecha de salida', align: 'left', value: 'scheduledDate', groupable: false },
      { text: 'Monto', align: 'left', value: 'price', groupable: false  },
      { text: 'Estado', align: 'left', value: 'status', groupable: false },
    ],
    clients: [],
    dialogChangeStatus: false,
    dialogDelete: false,
    editIndex: -1,
    editedItem: {name: '', email: '', phoneNumber: '', amount: '', service: '', scheduledDate: '', price: 0, status: ''},
    serviceStatus: ['pending', 'active', 'finished'],
  }),

  //calculated properties
  watch: {
    dialogChangeStatus(val) {
      val || this.closed();
    },
    dialogDelete(val) {
      val || this.dialogDelete();
    }
  },

  methods: {
    getDisplayHiredService(hiredService) {
      return {
        name: `${hiredService.customer.name} ${hiredService.customer.lastname}`,
        email: hiredService.customer.email,
        phoneNumber: hiredService.customer.phoneNumber,
        amount: hiredService.amount,
        service: '',
        scheduledDate: hiredService.scheduledDate,
        price: hiredService.price,
        status: hiredService.status,
      }
    },

    retrieveHiredServices() {
      HiredService.getExtendInformation("customer")
          .then((response) => {
            this.clients = response.data.map(this.getDisplayHiredService);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          }),

          HiredService.getExtendInformation("service")
              .then((response) => {
                for(let position = 0; position < response.data.length; position++) {
                  this.clients[position].service = response.data[position].service.name;
                }
                console.log(response.data);
              })
              .catch(e => {
                console.log(e);
              })
    },

    refreshList() {
      this.retrieveHiredServices();
    },

    editStatusService(id) {
      //TODO: Implement external edit
      console.log(id);
    },

    deleteHiredService(id) {
      HiredService.delete(id)
          .then( () => {
            this.refreshList();
          })
          .catch( e => {
            console.log(e);
          });
    },

    changeStatusItem(item) {
      this.editedIndex = this.clients.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItem(item) {
      this.editedIndex = this.clients.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    closeChangeStatus() {
      this.dialogChangeStatus = false;
    },

    closeDelete() {
      this.dialogDelete = false;
    }

  },
  mounted() {
    this.retrieveHiredServices();
  }
}
</script>

<style scoped>

</style>