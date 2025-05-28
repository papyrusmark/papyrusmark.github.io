<template>
  <v-sheet color="grey-lighten-4">
    <v-container class="pa-md-12 pa-sm-6" fluid>
      <v-row align="center">
        <v-col class="text-center text-lg-left pa-6 pa-md-12" cols="12" lg="6">
          <v-responsive class="mx-auto" max-width="500">
            <h1 class="text-h5 text-md-h4 font-weight-bold mb-4">
              Boost your productivity. Start using our app today.
            </h1>

            <p class="text-subtitle-2 text-medium-emphasis mb-6">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
              commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
            </p>

            <v-btn-primary text="Get started" />

            <v-btn-outlined class="ml-3" append-icon="mdi-arrow-right" text="Learn more" />
          </v-responsive>
        </v-col>

        <v-col cols="12" lg="5" contain>
          <v-img
            cover
            min-height="300"
            position="left"
            :rounded="$vuetify.display.smAndDown ? true : 'e-lg'"
            :src="previewImage"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import previewImage from '/preview.png'

export default {
  data() {
    return {
      previewImage,
    }
  },
}
</script>
