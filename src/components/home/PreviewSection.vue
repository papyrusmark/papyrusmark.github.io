<template>
  <v-sheet class="d-flex flex-column justify-center text-center pa-16 bg-gradient">
    <v-container
      class="h-100 d-flex align-center justify-center"
      :min-height="$vuetify.display.mdAndUp ? 650 : 500"
    >
      <div class="w-100 w-md-50 text-center">
        <h1 class="text-h4 text-md-h2 font-weight-bold my-6 text-white">Your Words, Structured.</h1>

        <div class="text-body-1 text-white mb-10 text-white">
          PapyrusMark is a modern desktop Markdown editor built for creators who value clarity,
          speed, and focus.
        </div>

        <div class="d-flex ga-4 justify-center">
          <v-btn-primary class="text-none" text="Get started" />

          <v-btn-outlined append-icon="mdi-chevron-right" color="white" text="Learn more" />
        </div>
      </div>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>
