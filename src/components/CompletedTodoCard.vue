<template>
  <v-col cols="8">
    <div
      class=" todo__card--comp mb-8 pa-2 pa-sm-8"
      color="blue"
      v-for="(todo, j) in getCompletedTodos"
      :key="todo + j"
    >
      <v-row>
        <v-col cols="12">
            <v-card-subtitle class="pa-0">{{ todo.date }}</v-card-subtitle>
          <v-card-title
            >{{ todo.todoName }}
            <v-spacer></v-spacer>
          </v-card-title>

          <v-card-subtitle>{{ todo.todoPerson }}</v-card-subtitle>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="8">
          <v-card-text
            >{{todo.todoContent}}</v-card-text
          >
        </v-col>
        <CardButtons :todo="todo" />
      </v-row>
    </div>
  </v-col>
</template>

<script>
import { mapGetters } from 'vuex';
import CardButtons from './cardButtons';
export default {
  name: 'CompletedTodoCard',
  components: { CardButtons },
  computed: {
    ...mapGetters(['getCompletedTodos']),
  },
};
</script>

<style>
.todo__card--comp {
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(50px);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  overflow: hidden;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.3);
  border-radius: 16px;
}
</style>
