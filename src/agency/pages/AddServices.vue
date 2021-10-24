<template>
  <v-main class="secondary">
    <v-container>
      <v-row>
        <v-col cols="12" class="col-md-3">
          <AgencyDescription></AgencyDescription>
        </v-col>
        <v-col cols="12" class="col-md-9">
          <v-card class="mb-6">
            <v-card-title class="mb-2 font-weight-bold">Add new service</v-card-title>
            <v-card-subtitle class="font-weight-black mb-4">Service Details</v-card-subtitle>
            <v-divider></v-divider>
            <v-form>
              <v-row>
                <v-col cols="12">
                  <v-text-field v-model="item.name" color="primary" label="Service Name" outlined dense class="rounded-xl mx-4 pt-6"></v-text-field>
                </v-col>
              </v-row>
              <v-divider></v-divider>
              <v-row>
                <v-col cols="12">
                  <v-text-field v-model="item.description" label="Description" counter="300" outlined auto-grow class="rounded-xl mx-4 pt-6"></v-text-field>
                </v-col>
              </v-row>
              <v-divider></v-divider>
              <v-row>
                <v-col cols="12">
                  <v-text-field v-model="item.location" label="Location" outlined dense class="rounded-xl mx-4 pt-6"></v-text-field>
                </v-col>
              </v-row>
              <v-divider></v-divider>
              <v-row class="pb-6">
                <v-col cols="12">
                  <v-text-field v-model="activity.description" color="primary" label="Activities" outlined dense class="rounded-xl mx-4 pt-6"></v-text-field>
                  <v-btn class="mx-4 black--text" color="primary" rounded @click="saveActivity">Add Activity</v-btn>
                </v-col>
              </v-row>
              <v-divider></v-divider>
              <v-row>
                <v-col cols="3">
                  <template>
                    <v-container fluid>
                      <v-combobox color="primary" :items="items" label="Currency" :search-input.sync="search" class="rounded-xl pt-3" outlined dense hide-selected></v-combobox>
                    </v-container>
                  </template>
                </v-col>
                <v-col cols="3" >
                  <v-text-field v-model="item.price" color="primary" type="number" label="Price" min="0" outlined dense class="rounded-xl pt-6"></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :return-value.sync="start_date" transition="scale-transition" offset-y min-width="auto">
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field v-model="start_date" label="Start Date" outlined dense prepend-inner-icon="mdi-calendar" readonly v-bind="attrs" v-on="on" class="rounded-xl mx-4 pt-6"></v-text-field>
                    </template>
                    <v-date-picker v-model="start_date" no-title scrollable>
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                      <v-btn text color="primary" @click="$refs.menu.save(start_date)">OK</v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-col>
                <v-col cols="3">
                  <v-menu ref="menu1" v-model="menu1" :close-on-content-click="false" :return-value.sync="end_date" transition="scale-transition" offset-y min-width="auto">
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field v-model="end_date" label="End Date" outlined dense prepend-inner-icon="mdi-calendar" readonly v-bind="attrs" v-on="on" class="rounded-xl mx-4 pt-6"></v-text-field>
                    </template>
                    <v-date-picker v-model="end_date" no-title scrollable>
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="menu1 = false">Cancel</v-btn>
                      <v-btn text color="primary" @click="$refs.menu1.save(end_date)">OK</v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>
              <v-divider></v-divider>
              <v-row>
                <v-col cols="3">
                  <template>
                    <v-container fluid>
                      <v-combobox color="primary" :items="items" label="Currency" :search-input.sync="search" class="rounded-xl pt-3" outlined dense hide-selected></v-combobox>
                    </v-container>
                  </template>
                </v-col>
                <v-col cols="3" >
                  <v-text-field v-model="item.newPrice" color="primary" label="Offer Price" type="number" min="0" outlined dense class="rounded-xl pt-6"></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-menu ref="menu2" v-model="menu2" :close-on-content-click="false" :return-value.sync="start_date" transition="scale-transition" offset-y min-width="auto">
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field v-model="start_date" label="Start Date" outlined dense prepend-inner-icon="mdi-calendar" readonly v-bind="attrs" v-on="on" class="rounded-xl mx-4 pt-6"></v-text-field>
                    </template>
                    <v-date-picker v-model="start_date" no-title scrollable>
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="menu2 = false">Cancel</v-btn>
                      <v-btn text color="primary" @click="$refs.menu2.save(start_date)">OK</v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-col>
                <v-col cols="3">
                  <v-menu ref="menu3" v-model="menu3" :close-on-content-click="false" :return-value.sync="end_date" transition="scale-transition" offset-y min-width="auto">
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field v-model="end_date" label="End Date" outlined dense prepend-inner-icon="mdi-calendar" readonly v-bind="attrs" v-on="on" class="rounded-xl mx-4 pt-6"></v-text-field>
                    </template>
                    <v-date-picker v-model="end_date" no-title scrollable>
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="menu3 = false">Cancel</v-btn>
                      <v-btn text color="primary" @click="$refs.menu3.save(end_date)">OK</v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-col>
                <v-btn class="mx-6 mb-8 black--text" color="primary" rounded>Add Offer</v-btn>
              </v-row>
              <v-divider></v-divider>
              <v-row>
                <v-col cols="12" class="mx-4 pt-6">
                  Add Images
                  <template>
                    <v-file-input
                        v-model="files"
                        color="primary"
                        counter
                        multiple
                        placeholder="Select your files"
                        prepend-icon="mdi-paperclip"
                        outlined
                        dense
                        class="rounded-xl pt-2 mr-8"
                        :show-size="1000"
                    >
                      <template v-slot:selection="{ text }">
                        <v-chip
                            color="primary" dark label small>{{ text }}
                        </v-chip>
                      </template>
                    </v-file-input>
                  </template>
                </v-col>
              </v-row>
              <v-card-actions>
                <v-btn class="ma-6 black--text float-right" color="primary" rounded @click="save" v-on:click="getServiceId(item.id)">Continue</v-btn>
              </v-card-actions>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import AgencyDescription from "./AgencyDescription";
import ServiceService from '../services/services.service';

export default {
  name: "AddServices",
  components: {AgencyDescription},
  data: () => ({
    start_date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    end_date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    menu: false,
    menu1: false,
    menu2: false,
    menu3: false,
    rules: [
      value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
    ],
    items: ['USD', 'PEN'],
    files: [],
    search: null,
    item: {
      id: 's11',
      agencyId: '',
      name: '',
      price: '',
      newPrice: '',
      location: '',
      isOffer: 0,
      photos: "https://www.boletomachupicchu.com/gutblt/wp-content/uploads/2018/06/montana-siete-colores-informacion.jpg",
      description: '',
    },
    activity: {
      id: '',
      serviceId: '',
      name: 'activity1',
      description: '',
    },
  }),

  methods: {
    save() {
      ServiceService.create(this.item)
        .then(() => {
        })
        .catch(e => {
          console.log(e);
        })
    },
    saveActivity(){
      ServiceService.createActivity(this.item.id, this.activity)
          .then(() => {

          })
          .catch(e => {
            console.log(e);
          })
    },
    getServiceId(id){
      this.$router.push({ path: `/agency/add-service/promotion/${id}`})
    },
  },

  beforeMount() {
    this.item.agencyId = this.$route.params.id;
  },

  onMounted() {
    this.activity.serviceId = this.item.id;
  }
}
</script>

<style scoped>
</style>
