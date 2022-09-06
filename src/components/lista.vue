<template>
  <div>{{ tasks }}</div>
</template>

<script>
import apiTasks from "../api/tasks.js";

export default {
  name: "ListaTarefas",
  data() {
    return {
      tasks: [],
    };
  },
  created() {
    apiTasks.getTasks().then((data) => {
      this.tasks = data;
    });
  },
};
</script>
