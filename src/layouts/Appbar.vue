<template>
  <v-app-bar app color="#0E1424" elevation="0" height="85">
    <v-spacer></v-spacer>
    <v-toolbar-title class="ml-4">
      <v-img
        src="https://themewant.com/products/html/openup/landing/assets/images/logo.svg"
        alt="Openup Logo"
        contain
        height="40"
        width="100"
      ></v-img>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items class="d-flex align-center">
      <v-btn text>Home</v-btn>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on">
            Use Cases
            <v-icon right>mdi-menu-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in ['Item 1', 'Item 2']" :key="index">
            <v-list-item-title>{{ item }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on">
            Pages
            <v-icon right>mdi-menu-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in ['Page 1', 'Page 2']" :key="index">
            <v-list-item-title>{{ item }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on">
            Feature
            <v-icon right>mdi-menu-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in ['Feature 1', 'Feature 2']" :key="index">
            <v-list-item-title>{{ item }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on">
            Shop
            <v-icon right>mdi-menu-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in ['Shop Item 1', 'Shop Item 2']" :key="index">
            <v-list-item-title>{{ item }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn text>Contact</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>

    <v-btn rounded color="white" variant="tonal" class="px-5 py-2 text-capitalize">Download</v-btn>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>
