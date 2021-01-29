<template>
  <v-app :style="themes">
    <Navbar />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar';
import { mapState } from 'vuex';
export default {
  name: 'App',

  components: {
    Navbar,
  },

  computed: {
    ...mapState(['currentTheme']),
    themes() {
      return {
        '--bg-primary': this.currentTheme['bg-primary'],
        '--bg-secondary': this.currentTheme['bg-secondary'],
        '--sh-primary': this.currentTheme['sh-primary'],
        '--sh-secondary': this.currentTheme['sh-secondary'],
      };
    },
  },
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
:root {
  --bg-primary: red;
  --bg-secondary: red;
  --sh-primary: red;
  --sh-secondary: red;
}
div[data-app='true'],
#app {
  background-color: var(--bg-primary);
  font-family: 'Montserrat', sans-serif;

}


</style>
