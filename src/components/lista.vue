<template>
  <ul>
    <router-link to="/nova">Nova tarefa</router-link>
    <li v-for="tarefa in tasks" :key="tarefa.id">
      <h3>
        {{ tarefa.nome }}
      </h3>
      <div>
        <span>{{ tarefa.projeto }}</span> |
        <span>{{ tarefa.prioridade }}</span>
      </div>
      <router-link to="/editar">
        <button @click="mostraTeladeEdicao(tarefa)">Editar</button>
      </router-link>
      <button @click="deletaTarefa(tarefa.id)">Deletar</button>
    </li>
  </ul>
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
    this.buscaTarefas();
  },
  methods: {
    buscaTarefas() {
      apiTasks.getTasks((data) => {
        this.tasks = data;
      });
    },
    deletaTarefa(tarefaId) {
      apiTasks.deleteTask(tarefaId, (data) => {
        console.log(data);
        this.buscaTarefas();
      });
    },
    mostraTeladeEdicao(task) {
      console.log(task);
    },
  },
};
</script>
