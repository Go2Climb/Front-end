<template>
  <v-row align="center" class="pa-4">
    <v-col cols="12">
      <h2 class="mb-3 title font-weight-bold">Hired services</h2>
      <div class="d-flex justify-end">
        <v-btn color="primary" class="mb-3">Download</v-btn>
      </div>
      <v-card class="mx-auto">
        <v-data-table :headers="headers" :items="clients" sort-by="name" class="elevation-1" show-group-by>
          <template v-slot:item.status="props">
            <v-edit-dialog
                large
                persistent
            >
              <div>{{ props.item.status }}</div>

              <template v-slot:input>
                <div class="mt-4 text-h6">
                  Update status
                </div>
                <v-select
                    :items = "serviceStatus"
                    v-model="props.item.status"
                    label="Edit"
                ></v-select>
              </template>
            </v-edit-dialog>
          </template>
        </v-data-table>
      </v-card>
    </v-col>
  </v-row>

</template>

<script>
import HiredService from '../services/hiredServices.service'

export default {
  name: "hired-services",
  data: () => ({
    headers: [
      {text: 'Nombre y apellidos', align: 'start', value: 'name', groupable: false},
      {text: 'Correo', align: 'left', value: 'email', sortable: false, groupable: false},
      {text: 'Teléfono', align: 'left', value: 'phoneNumber', sortable: false, groupable: false},
      {text: 'Cantidad (personas)', align: 'left', value: 'amount', groupable: false},
      {text: 'Servicio', align: 'left', value: 'service'},
      {text: 'Fecha de salida', align: 'left', value: 'scheduledDate', groupable: false},
      {text: 'Monto', align: 'left', value: 'price', groupable: false},
      {text: 'Estado', align: 'left', value: 'status', groupable: false},
    ],
    clients: [],
    dialogChangeStatus: false,
    dialogDelete: false,
    editIndex: -1,
    editedItem: {
      name: '',
      email: '',
      phoneNumber: '',
      amount: '',
      service: '',
      scheduledDate: '',
      price: 0,
      status: ''
    },
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
                for (let position = 0; position < response.data.length; position++) {
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
          .then(() => {
            this.refreshList();
          })
          .catch(e => {
            console.log(e);
          });
    },

    changeStatusItem(item) {
      this.editedIndex = this.clients.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogChangeStatus = true;
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