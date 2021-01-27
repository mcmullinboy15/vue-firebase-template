<template>
  <v-card>
    <v-card-title>404</v-card-title>
    <v-card-subtitle>Page Not Found</v-card-subtitle>
    <v-card-text>
      The specified file was not found on this website. Please check the URL for
      mistakes and try again.
    </v-card-text>
    <v-card-actions>
      <v-btn :to="{ name: 'Home' }" color="primary">
        Home page
      </v-btn>
      <v-btn :to="{ name: 'Login' }" color="primary">
        Login Page
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
