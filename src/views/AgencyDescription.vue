<template>
  <v-card>
    <v-img
        height=150
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png">
    </v-img>
    <v-card-text>
      <v-card-title>TravelNew</v-card-title>
      <v-card-subtitle>travelnew@gmail.com</v-card-subtitle>
      <v-row align="center" class="mx-3">
        <v-rating
            :value="4"
            color="amber"
            dense
            half-increments
            readonly
            size="20"
        ></v-rating>
      </v-row>
      <v-card-text class="">
        <p>Somos una agencia destinada al alpinismo para principiantes y personas experimentadas. Contamos con
          más de 20 años de experiencia en el rubro de alpinismo. Agradecemos tu visita.</p>
      </v-card-text>
      <v-card-text>
        <div class="d-flex flex-column">
          <p class="font-weight-bold">Ubicacion</p>
          <p>Maicena, Lima - Perú</p>
        </div>
        <div class="d-flex flex-column">
          <p class="font-weight-bold">RUC</p>
          <p>641478521</p>
        </div>
        <div class="d-flex flex-column">
          <p class="font-weight-bold">Telefono</p>
          <p>+51 952364789</p>
        </div>
      </v-card-text>
    </v-card-text>
    <v-card-actions>
      <template>
        <v-btn block color="primary">
          Editar información
        </v-btn>
      </template>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "AgencyDescription"
}
</script>

<style scoped>

</style>