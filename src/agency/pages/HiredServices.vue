<template>
  <v-row align="center" class="pa-4">
    <v-col cols="12">
      <h2 class="mb-3 title font-weight-bold">Hired services</h2>
      <div class="d-flex justify-end">
        <v-btn color="primary" class="mb-3">Download</v-btn>
      </div>
      <v-card class="mx-auto">
        <v-data-table :headers="headers" :items="hiredServices" sort-by="name" class="elevation-1" show-group-by>
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
      {text: 'Name and lastname', align: 'start', value: 'customer.name', groupable: false},
      {text: 'Email', align: 'left', value: 'customer.email', sortable: false, groupable: false},
      {text: 'Phone', align: 'left', value: 'customer.phoneNumber', sortable: false, groupable: false},
      {text: 'Quantity (people)', align: 'left', value: 'amount', groupable: false},
      {text: 'Service', align: 'left', value: 'service.name'},
      {text: 'Departure date', align: 'left', value: 'scheduledDate', groupable: false},
      {text: 'Mount', align: 'left', value: 'price', groupable: false},
      {text: 'Status', align: 'left', value: 'status', groupable: false},
    ],
    hiredServices: [],
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
    retrieveHiredServices() {
      HiredService.getExtendInformation(this.$store.state.auth.user.id, "true")
      .then(response => {
        this.hiredServices = response.data;
        for (let i = 0; i < response.data.length; i++){
          let name = `${response.data[i].customer.name} ${response.data[i].customer.lastName}`;
          this.hiredServices[i].customer.name = name;
        }
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