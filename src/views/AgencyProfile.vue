<template>
  <v-main class="secondary">
    <v-container>
      <v-row>
        <v-col cols="12" class="col-md-3">
          <AgencyDescription></AgencyDescription>
        </v-col>
        <v-col cols="12" class="col-md-9">
          <v-card class="mb-6">
            <v-card-title>Servicios</v-card-title>
            <div class="px-4 d-flex justify-space-between">
              <v-btn depressed dark class="grey">Ofertas</v-btn>
              <v-btn dark fab small color="primary"><v-icon dark>mdi-plus</v-icon></v-btn>
            </div>
            <v-row class="px-4 py-2 wrap">
              <v-col cols="12" class="col-md-3">
                <v-card
                    :loading="loading"
                    class="my-2"
                    max-width="374"
                >
                  <template slot="progress">
                    <v-progress-linear
                        color="deep-purple"
                        height="10"
                        indeterminate
                    ></v-progress-linear>
                  </template>

                  <a href="">
                    <v-img
                        height=120
                        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                    ></v-img>
                  </a>

                  <a href="" class="text-decoration-none">
                    <v-card-title class="d-flex flex-column align-center pb-0 black--text">Cafe Badilico</v-card-title>
                  </a>

                  <v-card-text class="d-flex flex-column align-center">
                    <v-row
                        align="center"
                        class="mx-0"
                    >
                      <a href="" class="text-decoration-none">
                        <v-rating
                            :value="4"
                            color="amber"
                            dense
                            half-increments
                            readonly
                            size="20"
                        ></v-rating>
                      </a>
                    </v-row>

                    <div class="pt-3 text-subtitle-1 d-flex flex-row">
                      <a href="" class="text-decoration-none ">
                        <div class="text-decoration-line-through pr-2 black--text">$500</div>
                      </a>
                      <a href="" class="text-decoration-none">
                        <div class="black--text">$480</div>
                      </a>
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" class="col-md-3">
                <v-card
                    :loading="loading"
                    class="my-2"
                    max-width="374"
                >
                  <template slot="progress">
                    <v-progress-linear
                        color="deep-purple"
                        height="10"
                        indeterminate
                    ></v-progress-linear>
                  </template>

                  <a href="">
                    <v-img
                        height=120
                        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                    ></v-img>
                  </a>

                  <a href="" class="text-decoration-none">
                    <v-card-title class="d-flex flex-column align-center pb-0 black--text">Cafe Badilico</v-card-title>
                  </a>

                  <v-card-text class="d-flex flex-column align-center">
                    <v-row
                        align="center"
                        class="mx-0"
                    >
                      <a href="" class="text-decoration-none">
                        <v-rating
                            :value="4"
                            color="amber"
                            dense
                            half-increments
                            readonly
                            size="20"
                        ></v-rating>
                      </a>
                    </v-row>

                    <div class="pt-3 text-subtitle-1 d-flex flex-row">
                      <a href="" class="text-decoration-none ">
                        <div class="text-decoration-line-through pr-2 black--text">$500</div>
                      </a>
                      <a href="" class="text-decoration-none">
                        <div class="black--text">$480</div>
                      </a>
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" class="col-md-3">
                <v-card
                    :loading="loading"
                    class="my-2"
                    max-width="374"
                >
                  <template slot="progress">
                    <v-progress-linear
                        color="deep-purple"
                        height="10"
                        indeterminate
                    ></v-progress-linear>
                  </template>

                  <a href="">
                    <v-img
                        height=120
                        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                    ></v-img>
                  </a>

                  <a href="" class="text-decoration-none">
                    <v-card-title class="d-flex flex-column align-center pb-0 black--text">Cafe Badilico</v-card-title>
                  </a>

                  <v-card-text class="d-flex flex-column align-center">
                    <v-row
                        align="center"
                        class="mx-0"
                    >
                      <a href="" class="text-decoration-none">
                        <v-rating
                            :value="4"
                            color="amber"
                            dense
                            half-increments
                            readonly
                            size="20"
                        ></v-rating>
                      </a>
                    </v-row>

                    <div class="pt-3 text-subtitle-1 d-flex flex-row">
                      <a href="" class="text-decoration-none ">
                        <div class="text-decoration-line-through pr-2 black--text">$500</div>
                      </a>
                      <a href="" class="text-decoration-none">
                        <div class="black--text">$480</div>
                      </a>
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" class="col-md-3">
                <v-card
                    :loading="loading"
                    class="my-2"
                    max-width="374"
                >
                  <template slot="progress">
                    <v-progress-linear
                        color="deep-purple"
                        height="10"
                        indeterminate
                    ></v-progress-linear>
                  </template>

                  <a href="">
                    <v-img
                        height=120
                        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                    ></v-img>
                  </a>

                  <a href="" class="text-decoration-none">
                    <v-card-title class="d-flex flex-column align-center pb-0 black--text">Cafe Badilico</v-card-title>
                  </a>

                  <v-card-text class="d-flex flex-column align-center">
                    <v-row
                        align="center"
                        class="mx-0"
                    >
                      <a href="" class="text-decoration-none">
                        <v-rating
                            :value="4"
                            color="amber"
                            dense
                            half-increments
                            readonly
                            size="20"
                        ></v-rating>
                      </a>
                    </v-row>

                    <div class="pt-3 text-subtitle-1 d-flex flex-row">
                      <a href="" class="text-decoration-none ">
                        <div class="text-decoration-line-through pr-2 black--text">$500</div>
                      </a>
                      <a href="" class="text-decoration-none">
                        <div class="black--text">$480</div>
                      </a>
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" class="col-md-3">
                <v-card
                    :loading="loading"
                    class="my-2"
                    max-width="374"
                >
                  <template slot="progress">
                    <v-progress-linear
                        color="deep-purple"
                        height="10"
                        indeterminate
                    ></v-progress-linear>
                  </template>

                  <a href="">
                    <v-img
                        height=120
                        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                    ></v-img>
                  </a>

                  <a href="" class="text-decoration-none">
                    <v-card-title class="d-flex flex-column align-center pb-0 black--text">Cafe Badilico</v-card-title>
                  </a>

                  <v-card-text class="d-flex flex-column align-center">
                    <v-row
                        align="center"
                        class="mx-0"
                    >
                      <a href="" class="text-decoration-none">
                        <v-rating
                            :value="4"
                            color="amber"
                            dense
                            half-increments
                            readonly
                            size="20"
                        ></v-rating>
                      </a>
                    </v-row>

                    <div class="pt-3 text-subtitle-1 d-flex flex-row">
                      <a href="" class="text-decoration-none ">
                        <div class="text-decoration-line-through pr-2 black--text">$500</div>
                      </a>
                      <a href="" class="text-decoration-none">
                        <div class="black--text">$480</div>
                      </a>
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" class="col-md-3">
                <v-card
                    :loading="loading"
                    class="my-2"
                    max-width="374"
                >
                  <template slot="progress">
                    <v-progress-linear
                        color="deep-purple"
                        height="10"
                        indeterminate
                    ></v-progress-linear>
                  </template>

                  <a href="">
                    <v-img
                        height=120
                        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                    ></v-img>
                  </a>

                  <a href="" class="text-decoration-none">
                    <v-card-title class="d-flex flex-column align-center pb-0 black--text">Cafe Badilico</v-card-title>
                  </a>

                  <v-card-text class="d-flex flex-column align-center">
                    <v-row
                        align="center"
                        class="mx-0"
                    >
                      <a href="" class="text-decoration-none">
                        <v-rating
                            :value="4"
                            color="amber"
                            dense
                            half-increments
                            readonly
                            size="20"
                        ></v-rating>
                      </a>
                    </v-row>

                    <div class="pt-3 text-subtitle-1 d-flex flex-row">
                      <a href="" class="text-decoration-none ">
                        <div class="text-decoration-line-through pr-2 black--text">$500</div>
                      </a>
                      <a href="" class="text-decoration-none">
                        <div class="black--text">$480</div>
                      </a>
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" class="col-md-3">
                <v-card
                    :loading="loading"
                    class="my-2"
                    max-width="374"
                >
                  <template slot="progress">
                    <v-progress-linear
                        color="deep-purple"
                        height="10"
                        indeterminate
                    ></v-progress-linear>
                  </template>

                  <a href="">
                    <v-img
                        height=120
                        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                    ></v-img>
                  </a>

                  <a href="" class="text-decoration-none">
                    <v-card-title class="d-flex flex-column align-center pb-0 black--text">Cafe Badilico</v-card-title>
                  </a>

                  <v-card-text class="d-flex flex-column align-center">
                    <v-row
                        align="center"
                        class="mx-0"
                    >
                      <a href="" class="text-decoration-none">
                        <v-rating
                            :value="4"
                            color="amber"
                            dense
                            half-increments
                            readonly
                            size="20"
                        ></v-rating>
                      </a>
                    </v-row>

                    <div class="pt-3 text-subtitle-1 d-flex flex-row">
                      <a href="" class="text-decoration-none ">
                        <div class="text-decoration-line-through pr-2 black--text">$500</div>
                      </a>
                      <a href="" class="text-decoration-none">
                        <div class="black--text">$480</div>
                      </a>
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" class="col-md-3">
                <v-card
                    :loading="loading"
                    class="my-2"
                    max-width="374"
                >
                  <template slot="progress">
                    <v-progress-linear
                        color="deep-purple"
                        height="10"
                        indeterminate
                    ></v-progress-linear>
                  </template>

                  <a href="">
                    <v-img
                        height=120
                        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                    ></v-img>
                  </a>

                  <a href="" class="text-decoration-none">
                    <v-card-title class="d-flex flex-column align-center pb-0 black--text">Cafe Badilico</v-card-title>
                  </a>

                  <v-card-text class="d-flex flex-column align-center">
                    <v-row
                        align="center"
                        class="mx-0"
                    >
                      <a href="" class="text-decoration-none">
                        <v-rating
                            :value="4"
                            color="amber"
                            dense
                            half-increments
                            readonly
                            size="20"
                        ></v-rating>
                      </a>
                    </v-row>

                    <div class="pt-3 text-subtitle-1 d-flex flex-row">
                      <a href="" class="text-decoration-none ">
                        <div class="text-decoration-line-through pr-2 black--text">$500</div>
                      </a>
                      <a href="" class="text-decoration-none">
                        <div class="black--text">$480</div>
                      </a>
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
          <v-card class="mb-4">
            <v-card-title>Reseñas</v-card-title>
            <v-row class="px-4">
              <v-col cols="12" class="d-flex flex-row align-center col-md-6">
                <div class="pr-4 col-5">Profesionalismo</div>
                <v-progress-linear class="col-7" value="100" light background-color="grey" color="black"></v-progress-linear>
              </v-col>
              <v-col cols="12" class="d-flex flex-row align-center col-md-6">
                <div class="pr-4 col-5">Calidad/Precio</div>
                <v-progress-linear class="col-7" value="100" light background-color="grey" color="black"></v-progress-linear>
              </v-col>
              <v-col cols="12" class="d-flex flex-row align-center col-md-6">
                <div class="pr-4 col-5">Seguridad</div>
                <v-progress-linear class="col-7" value="100" light background-color="grey" color="black"></v-progress-linear>
              </v-col>
              <v-col cols="12" class="d-flex flex-row align-center col-md-6">
                <div class="pr-4 col-5">Costos</div>
                <v-progress-linear class="col-7" value="100" light background-color="grey" color="black"></v-progress-linear>
              </v-col>
            </v-row>
            <div class="pa-8">

              <v-card class="pa-4 mb-4">
                <div class="d-flex align-center">
                  <v-avatar><img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"></v-avatar>
                  <div>
                    <v-card-title>Julieta Rodrigues Gala</v-card-title>
                    <v-card-subtitle>septiembre de 2021</v-card-subtitle>
                  </div>
                </div>
                <v-card-text>
                  <p>Tuve una buena experiencia con este servicio. Nunca me había atrevido a realizar alpinismo, pero
                    con esta empresa he cambiado mi forma de ver las cosas. Los guías son muy serviciales y me ayudaron
                    en muchos tramos, me enseñaron los mejores lugares del trayecto y siempre estuve segura.
                    Lo recomiendo, 10/10</p>
                </v-card-text>
              </v-card>
              <v-card class="pa-4">
                <div class="d-flex align-center">
                  <v-avatar><img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"></v-avatar>
                  <div>
                    <v-card-title>Sebastian Mazca Ilz</v-card-title>
                    <v-card-subtitle>diciembre de 2020</v-card-subtitle>
                  </div>
                </div>
                <v-card-text>
                  <p>No es mi primera vez con TravelNew, nunca me decepcionan, es cierto que para algunos tramos los
                    costos son bastante altos en comparación a los demás, pero no lo cambiaría por nada,
                    gracias!!!!!!!!!</p>
                </v-card-text>
              </v-card>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import AgencyDescription from "./AgencyDescription";
export default {
  name: "CustomerProfile",
  components: {AgencyDescription}
}
</script>

<style scoped>

</style>