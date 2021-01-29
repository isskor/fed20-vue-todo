import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      {
        todoName: 'Buy GameStop',
        todoPerson: 'MeMe',
        todoContent: 'Load up',
        completed: false,
        date: '28/01/2021, 13:35:11',
      },
      {
        todoName: 'HODL GME',
        todoPerson: 'MEme',
        todoContent: 'Hold on for dear life',
        completed: false,
        date: '29/01/2021, 13:35:11',
      },
      {
        todoName: 'buy moar GME',
        todoPerson: 'bertil',
        todoContent: 'LOOOOOAD',
        completed: false,
        date: '30/01/2021, 13:35:11',
      },
      {
        todoName: 'Sue RobinHood',
        todoPerson: 'todoperson4',
        todoContent: 'RobinHood = rob the hood',
        completed: false,
        date: '31/01/2021, 13:35:11',
      },
    ],

    currentTheme: {
      'bg-primary': '#ffc6d2',
      'bg-secondary': '#d7a7b0',
      'sh-primary': '#cb9da7',
      'sh-secondary': '#ffd5e1',
    },
    themes: {
      pink: {
        'bg-primary': '#ffc6d2',
        'bg-secondary': '#d7a7b0',
        'sh-primary': '#cb9da7',
        'sh-secondary': '#ffd5e1',
      },
      blue: {
        'bg-primary': '#c5d4ff',
        'bg-secondary': '#a6b2d7',
        'sh-primary': '#9ca8cb',
        'sh-secondary': '#d4e4ff',
      },
      green: {
        'bg-primary': '#c0fac6',
        'bg-secondary': '#a1d3a7',
        'sh-primary': '#98c79d',
        'sh-secondary': '#ceffd5',
      },
      grey: {
        'bg-primary': '#868686',
        'bg-secondary': '#717171',
        'sh-primary': '#6a6a6a',
        'sh-secondary': '#909090',
      },
      white: {
        'bg-primary': '#eeeeee',
        'bg-secondary': '#c8c8c8',
        'sh-primary': '#bdbdbd',
        'sh-secondary': '#ffffff',
      },
    },
  },
  getters: {
    getTodos: (state) => state.todos.filter((t) => t.completed !== true),
    getCompletedTodos: (state) =>
      state.todos.filter((t) => t.completed === true),
  },
  mutations: {
    addTodo(state, payload) {
      state.todos.unshift(payload);
    },
    moveTodo(state, { todo, direction }) {
      const i = state.todos.findIndex((t) => t.todoName === todo.todoName);
      state.todos.splice(i, 1);

      if (direction === 'up') state.todos.splice(i - 1, 0, todo);
      if (direction === 'down') state.todos.splice(i + 1, 0, todo);
      console.log(direction);
    },

    moveToComplete(state, todo) {
      todo.completed = true;
    },
    removeTodo(state, todo) {
      state.todos = state.todos.filter((t) => t !== todo);
    },
    setTheme(state, theme) {
      state.currentTheme = theme;
    },
  },
  actions: {
    addTodo({ commit }, todo) {
      commit('addTodo', todo);
    },
    moveUp({ commit }, todo) {
      const direction = 'up';
      commit('moveTodo', { todo, direction });
    },
    moveDown({ commit }, todo) {
      const direction = 'down';
      commit('moveTodo', { todo, direction });
    },
    moveToComplete({ commit }, todo) {
      commit('moveToComplete', todo);
    },
    removeTodo({ commit }, todo) {
      commit('removeTodo', todo);
    },
    setTheme({ commit }, theme) {
      commit('setTheme', theme);
    },
  },
  modules: {},
});
