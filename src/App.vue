<template>
  <v-app>
    <v-row class="child-flex">
      <div style="flex-basis: 20%">
        <v-toolbar dark>
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn
                color="primary"
                dark
                v-on="on"
              ><v-icon left></v-icon>
                Boards
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(board, index) in boards"
                :key="index"
                click=""
              >
                <v-list-item-title>{{ board.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-spacer></v-spacer>
            <!-- <v-toolbar-title v-text="title"></v-toolbar-title> -->
            <h1>Work Register</h1>
          <v-spacer></v-spacer>
            <v-btn to="/login" color="primary" >Login</v-btn>
            <v-btn to="/register" tag="span" >Register</v-btn>
        </v-toolbar>
      </div>
    </v-row>
    <v-content>
        <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'App',

  components: {
  },
  data: () => ({
    boards: [
      { title: 'Board 1' },
      { title: 'Board 2' },
      { title: 'Board 3' },
      { title: 'Board 4' }
    ]
  }),
  title: 'Work Register'
})
</script>
