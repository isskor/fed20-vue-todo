<template>
  <v-container fluid>
    <v-row class=" px-5 mt-5">
      <v-subheader class="text-h2 grey--text text--darken-2">Todos</v-subheader>
    </v-row>

    <v-row justify="center" class="mt-16">
      <TodoCard />
    </v-row>
  </v-container>
</template>

<script>
import TodoCard from '../components/TodoCard';

export default {
  components: { TodoCard },
  name: 'Home',
};
</script>
<style scoped>

</style>
