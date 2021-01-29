<template>
  <v-col cols="8">
    <div
      :class="[todo.completed ? 'todo__card--comp' : '']"
      class=" todo__card mb-8 pa-2 pa-sm-8"
      v-for="(todo, i) in [...getTodos, ...getCompletedTodos]"
      :key="i"
    >
      <v-row>
        <v-col cols="8" sm="6">
          <v-card-subtitle class="pa-0">{{ todo.date }}</v-card-subtitle>
          <v-card-title
            >{{ todo.todoName }}
            <v-spacer></v-spacer>
          </v-card-title>

          <v-card-subtitle>{{ todo.todoPerson }}</v-card-subtitle>
        </v-col>
        <UpDownArrows
          v-show="!todo.completed"
          :todo="todo"
          :index="i"
          :length="getTodos.length"
        />
      </v-row>
      <v-row>
        <v-col cols="12" sm="8">
          <v-card-text>{{ todo.todoContent }}</v-card-text>
        </v-col>
        <CardButtons :todo="todo" />
      </v-row>
    </div>
  </v-col>
</template>

<script>
import CardButtons from './cardButtons';
import UpDownArrows from './UpDownArrows';
import { mapGetters } from 'vuex';

export default {
  data: () => ({
    todos: null,
  }),
  components: {
    CardButtons,
    UpDownArrows,
  },
  computed: {
    ...mapGetters(['getTodos', 'getCompletedTodos']),
  },
};
</script>

<style scoped>
.todo__card {
  backdrop-filter: blur(50px);
  background: linear-gradient(145deg, var(--bg-primary), var(--bg-secondary));
  overflow: hidden;
  box-shadow: 5px 5px 10px var(--sh-primary), -5px -5px 10px var(--sh-secondary);
  border-radius: 16px;
}
.todo__card:hover {
  background: rgba(255, 255, 255, 0.5);
}

.todo__card--comp {
  background: rgba(0, 0, 0, 0.4);
}
</style>
