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
                  <v-text-field color="primary" label="Service Name" outlined dense class="rounded-xl mx-4 pt-6"></v-text-field>
                </v-col>
              </v-row>
              <v-divider></v-divider>
              <v-row>
                <v-col cols="12">
                  <v-text-field label="Description" counter="300" outlined auto-grow class="rounded-xl mx-4 pt-6"></v-text-field>
                </v-col>
              </v-row>
              <v-divider></v-divider>
              <v-row>
                <v-col cols="12">
                  <v-text-field label="Location" outlined dense class="rounded-xl mx-4 pt-6"></v-text-field>
                </v-col>
              </v-row>
              <v-divider></v-divider>
              <v-row class="pb-6">
                <v-col cols="12">
                  <v-text-field color="primary" label="Activities" outlined dense class="rounded-xl mx-4 pt-6"></v-text-field>
                  <v-btn class="mx-4 black--text" color="primary" rounded>Add Activity</v-btn>
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
                  <v-text-field color="primary" label="Price" outlined dense class="rounded-xl pt-6"></v-text-field>
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
                  <v-text-field color="primary" label="Price" outlined dense class="rounded-xl pt-6"></v-text-field>
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
              <v-btn to="add-service/promotion" class="ma-6 black--text float-right" color="primary" rounded>Continue</v-btn>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import AgencyDescription from "./AgencyDescription";
export default {
  name: "AddServices",
  components: {AgencyDescription},
  data: () => ({
    start_date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    end_date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    menu: false,
    menu1: false,
    rules: [
      value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
    ],
    items: ['USD', 'PEN'],
    files: [],
    search: null,
  }),
}
</script>

<style scoped>
.continue {
  float: right;
}
</style>
