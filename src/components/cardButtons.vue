<template>
  <v-col cols="12" sm="4" class="d-flex justify-space-around justify-sm-end mt-auto px-0 px-sm-4">
          <EditDialog :todo="todo" />
            
          <v-btn
            @click="completed(todo)"
            rounded
            color="green lighten-4"
            class="mr-0 mr-sm-2"
            elevation="25"
            small
            v-show="!todo.completed"
          >
            <v-icon fab color="green"> mdi-check </v-icon>
          </v-btn>
          <v-btn 
          @click="remove(todo)"
          rounded 
          small
          color="red lighten-4"
          elevation="25"
          >
            <v-icon fab color="red"> mdi-delete </v-icon>
          </v-btn>
        </v-col>
</template>

<script>
import EditDialog from './EditDialog'
import { mapActions } from 'vuex'

export default {
  props: ['todo'],
  components: { EditDialog },
  methods: {
    ...mapActions(['moveToComplete', 'removeTodo']),

    completed(todo) {
      this.moveToComplete(todo);
    },
    a(todo){
        console.log(todo);
    },
    remove(todo){
        this.removeTodo(todo)
    }
  },
}
</script>

<style>

</style>