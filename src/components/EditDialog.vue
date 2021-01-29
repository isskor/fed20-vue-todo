<template>
  <v-dialog max-width="600px" v-model="dialog">
    <template v-slot:activator="{ on }">
      <v-btn
        class="mr-0 mr-sm-2"
        :todo="todo"
        rounded
        color="yellow lighten-4"
        v-on="on"
        small
        v-show="!todo.completed"
      >
        <v-icon fab color="grey">mdi-pencil</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <h2>Edit Todo</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field
            label="name"
            v-model="todo.todoName"
            prepend-icon="mdi-folder"
          >
          </v-text-field>
          <v-text-field
            label="name"
            v-model="todo.todoPerson"
            prepend-icon="mdi-account"
          >
          </v-text-field>
          <v-textarea
            label="Information"
            v-model="todo.todoContent"
            prepend-icon="mdi-pencil"
          >
          </v-textarea>
          <v-btn class="success mx-0 mt-3" @click="submit">Edit</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['todo'],
  data: () => ({
    dialog: false,
  }),
  methods: {
    submit() {
      this.dialog = false;
    },
  },
};
</script>

<style></style>
