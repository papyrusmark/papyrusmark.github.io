<template>
  <Layout>
    <v-container fluid class="pa-0">
      <v-sheet
        dark
        class="d-flex flex-column justify-space-between text-center pa-16"
        min-height="70vh"
        color="#1e1e2f"
      >
        <v-row justify="center" class="flex-grow-1">
          <v-col cols="12" md="8" class="d-flex flex-column justify-center">
            <v-responsive class="mx-auto text-center" max-width="600">
              <div class="white text-h2 font-weight-bold mb-4" style="line-height: 1.2">
                OpenUp AI content <br />
                Make You
              </div>
              <p class="text-h6 font-weight-light mb-8 mx-auto" style="max-width: 600px">
                Using advanced artificial intelligence and deep learning, Article Forge writes
                entire 1500+ word articles automatically. From product descriptions.
              </p>
              <v-row justify="center">
                <v-col>
                  <v-btn size="large" rounded color="primary" class="mr-3 text-capitalize"
                    >Download</v-btn
                  >
                  <v-btn
                    size="large"
                    rounded
                    color="white"
                    variant="outlined"
                    class="text-capitalize"
                    >Test</v-btn
                  >
                </v-col>
              </v-row>
            </v-responsive>
          </v-col>
        </v-row>

        <v-row justify="center" class="mt-0">
          <v-col cols="12" class="pa-0">
            <v-img
              height="600"
              src="https://themewant.com/products/html/openup/assets/images/banner/02.svg"
              contain
              class="mx-auto"
              max-width="900"
            ></v-img>
          </v-col>
        </v-row>
      </v-sheet>

      <v-sheet class="pa-12" color="grey-lighten-4">
        <v-container class="pa-md-12 pa-sm-6" fluid>
          <v-responsive class="text-center mx-auto mb-6 mb-md-12" max-width="700">
            <h1 class="text-md-h4 font-weight-bold mb-4 text-sm-h5">Gain access for One Price</h1>
            <p class="text-subtitle-1 text-medium-emphasis">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis
              est labore voluptatibus! Eaque cupiditate minima, at placeat totam.
            </p>
          </v-responsive>

          <v-sheet border class="mx-auto pa-2" max-width="1000" rounded="xl">
            <v-row>
              <v-col cols="12" md="4">
                <v-card
                  border
                  class="h-100 flex-column d-flex align-center justify-center pa-4"
                  color="grey"
                  rounded="xl"
                  variant="tonal"
                >
                  <div
                    class="text-subtitle-1 font-weight-medium mb-3 opacity-70 text-high-emphasis"
                  >
                    Pay once, get access forever
                  </div>

                  <div class="text-h3 mb-8 text-high-emphasis font-weight-bold">
                    $199
                    <small class="text-overline">USD</small>
                  </div>

                  <v-btn
                    class="mb-5 text-none"
                    color="success"
                    max-height="36"
                    max-width="256"
                    rounded="lg"
                    text="Get access"
                    variant="flat"
                    width="100%"
                  />

                  <div class="text-caption text-medium-emphasis w-75 text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </div>
                </v-card>
              </v-col>

              <v-col class="pa-6" cols="12" md="8">
                <h2 class="text-h5 font-weight-bold mb-4">Lifetime subscription</h2>
                <p class="text-medium-emphasis mb-4">
                  Get the most out of Vuetify with a lifetime subscription. This is a limited time
                  offer and will not be available in the future. Get access to all current and
                  future features, including full access to all snips components.
                </p>

                <div class="d-flex align-center mb-8">
                  <span class="text-primary text-no-wrap text-body-2 font-weight-medium me-4"
                    >What you get</span
                  >
                  <v-divider />
                </div>

                <v-row dense>
                  <v-col cols="12" md="6">
                    <v-icon color="success" icon="$success" />
                    <span class="text-caption ms-2">Unlimited updates</span>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-icon color="success" icon="$success" />
                    <span class="text-caption ms-2">All pro components</span>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-icon color="success" icon="$success" />
                    <span class="text-caption ms-2">Lifetime support</span>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-icon color="success" icon="$success" />
                    <span class="text-caption ms-2">Premium integrations</span>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-sheet>
        </v-container>
      </v-sheet>

      <v-sheet>
        <v-container class="pa-sm-6 pa-md-12">
          <v-responsive class="text-center mx-auto" max-width="700">
            <p class="font-weight-medium text-primary">Develop faster</p>
            <p class="mt-2 text-h5 font-weight-bold text-md-h4">
              Everything you need to build a great app.
            </p>
            <p class="mt-4 text-body-1 text-medium-emphasis">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis
              est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque
              veniam neque porro libero rerum unde voluptatem!
            </p>
          </v-responsive>

          <v-row class="mt-8">
            <v-col class="d-flex" cols="12" md="4">
              <v-responsive class="mx-auto" max-width="500" width="100%">
                <v-list-item
                  class="px-0"
                  rounded="lg"
                  subtitle="Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu."
                >
                  <template #title>
                    <p class="text-body-2 font-weight-bold pb-2">
                      <v-icon class="mr-2" color="primary" icon="mdi-cloud-upload" size="small" />
                      Push to deploy
                    </p>
                  </template>
                  <v-chip
                    append-icon="mdi-arrow-right"
                    class="mt-6"
                    color="primary"
                    link
                    size="small"
                    text="Learn more"
                  />
                </v-list-item>
              </v-responsive>
            </v-col>

            <v-col class="d-flex" cols="12" md="4">
              <v-responsive class="mx-auto" max-width="500" width="100%">
                <v-list-item
                  class="px-0"
                  rounded="lg"
                  subtitle="Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh."
                >
                  <template #title>
                    <p class="text-body-2 font-weight-bold pb-2">
                      <v-icon class="mr-2" color="primary" icon="mdi-lock" size="small" />
                      SSL certificates
                    </p>
                  </template>
                  <v-chip
                    append-icon="mdi-arrow-right"
                    class="mt-6"
                    color="primary"
                    link
                    size="small"
                    text="Learn more"
                  />
                </v-list-item>
              </v-responsive>
            </v-col>

            <v-col class="d-flex" cols="12" md="4">
              <v-responsive class="mx-auto" max-width="500" width="100%">
                <v-list-item
                  class="px-0"
                  rounded="lg"
                  subtitle="Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum."
                >
                  <template #title>
                    <p class="text-body-2 font-weight-bold pb-2">
                      <v-icon class="mr-2" color="primary" icon="mdi-sync" size="small" />
                      Simple queues
                    </p>
                  </template>
                  <v-chip
                    append-icon="mdi-arrow-right"
                    class="mt-6"
                    color="primary"
                    link
                    size="small"
                    text="Learn more"
                  />
                </v-list-item>
              </v-responsive>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>
    </v-container>
  </Layout>
</template>
