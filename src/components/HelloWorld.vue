<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <v-flex xs12>
        <v-img
          :src="require('../assets/work_register_logo.png')"
          class="my-3"
          contain
          height="200"
        ></v-img>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Work Register
        </h1>
        <p class="subheading font-weight-regular">
          No Worries! Your buddy is here to keep track of your work
          <br>Give me Headache of your project management
          <!-- <a href="https://community.vuetifyjs.com" target="_blank">Discord Community</a> -->
        </p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HelloWorld',

  data: () => ({
  })
})
</script>
