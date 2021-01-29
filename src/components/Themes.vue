<template>
  <div class="align-self-center">   
        <v-btn
          elevation="5"
          fab
          x-small
          v-for="(theme, i) in themes"
          :key="i"
          :style="{background: theme['bg-primary']}"
          @click="changeTheme(theme)"
          class="mr-2"
        ></v-btn>
        </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
    computed:{
        ...mapState(['themes']),
    },
    methods:{
        ...mapActions(['setTheme']),
        changeTheme(theme){
            this.setTheme(theme)
        }
    }
}
</script>

<style>

</style>