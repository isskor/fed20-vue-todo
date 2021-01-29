<template>
  <v-container>
    <v-row class=" px-5 mt-10 mt-sm-5">
      <v-subheader class="text-h2 grey--text text--darken-2"
        >New Todos</v-subheader
      >
    </v-row>
    <v-row justify="center">
      <v-col cols="10">
        <form class="mt-15 py-5 px-8" @submit.prevent="submitTodo">
          <v-text-field
            v-model="todoName"
            :error-messages="errors"
            label="Todo Name"
            class="pa-2 pa-sm-5"
            required
          ></v-text-field>
          <v-text-field
            v-model="todoPerson"
            :error-messages="errors"
            label="Assign To"
            class="pa-2 pa-sm-5"
            required
          ></v-text-field>
          <v-textarea
            v-model="todoContent"
            label="Description"
            class="mx-2 mx-sm-5 text__area"
            :counter="100"
          >
          </v-textarea>
          <v-row class=" pa-2 pa-sm-5 ma-0">
            <v-btn @click="clearForm" class="mt-5 mr-2">
              clear
            </v-btn>
            <v-btn class=" mt-5" type="submit">
              submit
            </v-btn>
          </v-row>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data: () => ({
    todoName: '',
    todoPerson: '',
    todoContent: '',
    errors: '',
    invalid: false,
  }),

  methods: {
    ...mapActions(['addTodo']),
    submitTodo() {
      const now = new Date();
      const newDate = now.toLocaleString('en-GB');
      const form = {
        todoName: this.todoName,
        todoPerson: this.todoPerson,
        todoContent: this.todoContent,
        date: newDate,
        todoId: this.todoName + newDate,
        completed: false,
      };
      this.addTodo(form);
      this.$router.push({ path: '/' });
    },
    clearForm() {
      this.todoName = '', 
      this.todoPerson = '';
      this.todoContent = '';
    },
  },
};
</script>

<style scoped>

form {
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(50px);
  border-radius: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.3);
}
.text__area {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 8px;
}
</style>
