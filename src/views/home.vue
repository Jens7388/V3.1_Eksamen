<template>
  <div class="home">
    <navigation-button></navigation-button>
  </div>
  <div class="todos">
    <div
      @dblclick="onDblClick(todo)"
      v-for="todo in allTodos"
      :key="todo.id"
      class="todo"
      v-bind:class="{ 'is-complete': todo.completed }"
    >
      {{ todo.title }}
      <i @click="deleteTodo(todo.id)" class="fas fa-trash-alt"></i>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import NavigationButton from '../components/NavigationButton.vue';

export default {
  name: "Home",
  components: {
    NavigationButton
  },
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo", "updateTodo"]),
    onDblClick(todo) {
      const updTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed,
      };
      this.updateTodo(updTodo);
    },
  },
  computed: mapGetters(["allTodos"]),
  created() {
    this.fetchTodos();
  },
};
</script>