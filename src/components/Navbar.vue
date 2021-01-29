<template>
  <nav>
    <v-app-bar app class="navbar justify-between">
      <v-row justify="space-between">
        <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer">
        </v-app-bar-nav-icon>

        <v-toolbar-title class="text-uppercase grey--text">
          <h2 class="font-weight-light">TodoTodo</h2>
        </v-toolbar-title>
        <Themes class=" d-none d-sm-block"/>
      </v-row>
    </v-app-bar>
    <v-navigation-drawer id="sidenav" v-model="drawer" app>
      <v-list class="d-flex flex-column text-center pa-0" height="100%">
      <Themes class=" d-sm-none py-4"/>
        <v-list-item
          dark
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
        >
          <v-list-item-icon class="align-self-center ml-5">
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="text-start">
            {{ link.text }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Themes from '../components/Themes'
export default {
  data: () => ({
    drawer: false,
    links: [
      { icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/' },
      { icon: 'mdi-folder', text: 'New Todo', route: '/newtodo' },
      { icon: 'mdi-account', text: 'About', route: '/about' },
    ],
    snackbar: false,
  }),
  methods: {},
  components: {
    Themes
  },
};
</script>

<style>
#sidenav {
  background: transparent;
  backdrop-filter: blur(50px);
}

nav a.v-list-item {
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(50px);

  /* border-top: 1px solid rgba(255,255,255, 0.5); */
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
}
</style>
