<template>
  <v-col cols="2" sm="6" class="text-end">
    <v-btn
      @click="up(todo)"
      class="mr-0 mr-sm-4 mb-4 mb-sm-0"
      :disabled="index === 0"
      rounded
      small
      color="green lighten-4"
    >
      <v-icon fab color="green darken-3">
        mdi-arrow-up-thick
      </v-icon>
    </v-btn>
    <v-btn
      @click="down(todo)"
      :disabled="index === length - 1"
      rounded
      small
      color=" grey lighten-4"
    >
      <v-icon fab color="red">
        mdi-arrow-down-thick
      </v-icon>
    </v-btn>
  </v-col>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['todo', 'index', 'length'],
    
  methods: {
    ...mapActions(['moveUp', 'moveDown']),
    up(todo) {
      this.moveUp(todo);
    },
    down(todo) {
      this.moveDown(todo);
    },
    
  },
};
</script>

<style></style>
