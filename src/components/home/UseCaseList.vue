<template>
  <v-sheet
    dark
    class="d-flex flex-column justify-center text-center pa-16 bg-gradient"
    min-height="70vh"
  >
    <v-row class="text-center my-8" justify="center">
      <v-col cols="12">
        <h1 class="text-h3 font-weight-bold text-white mb-4">Generate AI Copy writing</h1>
        <h2 class="text-h4 font-weight-medium text-white mb-8">Favorite Tools</h2>
        <p class="text-subtitle-1 text-grey-lighten-1">
          Get better results in a fraction of the time.Finally, a writing tool you'll actually use.
        </p>
      </v-col>
    </v-row>

    <v-row>
      <v-col v-for="(tool, i) in tools" :key="i" cols="12" md="4" class="d-flex">
        <v-card class="mx-auto pa-6 single-tools-feature" flat max-width="400">
          <v-icon size="48" class="mb-4" :color="tool.iconColor">{{ tool.icon }}</v-icon>
          <v-card-title class="text-h6 font-weight-bold mb-2 text-white">{{
            tool.title
          }}</v-card-title>
          <v-card-text class="flex-grow-1 text-white">
            {{ tool.description }}
          </v-card-text>
          <v-card-actions>
            <v-btn text :to="tool.link" color="blue-lighten-2"
              >Try {{ tool.title }} <v-icon right>mdi-arrow-right</v-icon></v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    tools: [
      {
        icon: 'mdi-file-document-outline',
        title: 'Blog Content',
        description: 'Write a first draft. The first draft should be written in long-form style.',
        link: '/blog-content',
      },
      {
        icon: 'mdi-share-variant-outline',
        title: 'Social Media Content',
        description: 'Social media content should be visually appealing, using images and videos.',
        link: '/social-media-content',
      },
      {
        icon: 'mdi-cart-outline',
        title: 'eCommerce Copy',
        description: 'Introducing a new line of wireless earbuds designed for active people.',
        link: '/ecommerce-copy',
      },
      {
        icon: 'mdi-tag-outline',
        title: 'Sales Copy',
        description: "Tired of overspending on products that don't live up to their promises?",
        link: '/sales-copy',
      },
      {
        icon: 'mdi-web',
        title: 'Website Copy',
        description:
          'Our toys are made from the highest quality materials and designed to delight.',
        link: '/website-copy',
      },
      {
        icon: 'mdi-bullhorn-outline',
        title: 'Digital Ad Copy',
        description:
          'Advertise with confidence: Our toys are crafted from premium materials for lasting fun.',
        link: '/digital-add-copy',
      },
    ],
  }),
}
</script>
