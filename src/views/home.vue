<template>
<div class="my-5 mx-4">
  <div class="flex flex-row justify-between">
    <h1 class="text-gray-500 font-bold text-lg">Brewista</h1>
    <svg class="h-8 w-8"></svg>
  </div>
  <h2 class="text-gray-300 mt-8">LATEST BREWS</h2>
  <div class="todos">
    <!--  <div
      @dblclick="onDblClick(todo)"
      v-for="todo in allTodos"
      :key="todo.id"
      class="todo"
      v-bind:class="{ 'is-complete': todo.completed }"
    >
      {{ todo.title }}
      <i @click="deleteTodo(todo.id)" class="fas fa-trash-alt"></i>
    </div>-->
  </div>
  <navigation-button></navigation-button>
</div>
  
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import NavigationButton from "../components/NavigationButton.vue";

export default {
  name: "Home",
  components: {
    NavigationButton,
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