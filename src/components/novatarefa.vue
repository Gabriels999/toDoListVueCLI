<template>
  <section>
    <div>
      <div>
        <label for="nome">Nome da tarefa</label>
        <input
          v-model="novaTarefa.nome"
          type="text"
          name="nome"
          placeholder="Insira o nome da tarefa"
        />
      </div>
      <div>
        <label for="projeto">Projeto</label>
        <input
          v-model="novaTarefa.projeto"
          type="text"
          name="projeto"
          placeholder="Insira o projeto"
        />
      </div>
      <div>
        <label for="prioridade">Prioridade</label>
        <input
          v-model="novaTarefa.prioridade"
          type="text"
          name="prioridade"
          placeholder="Insira a prioridade"
        />
      </div>
      <button @click="salvaTarefa">Criar Tarefa</button>
    </div>
  </section>
</template>

<script>
import apiTasks from "../api/tasks.js";

export default {
  name: "NovaTarefa",
  data() {
    return {
      novaTarefa: {
        nome: "",
        projeto: "",
        prioridade: "",
      },
    };
  },
  methods: {
    salvaTarefa() {
      apiTasks.postTask(this.novaTarefa, (data) => {
        apiTasks.getTasks();
        console.log(data);
      });
    },
    // editaTarefa(task) {
    //   const { id, nome, projeto, prioridade } = task;
    //   apiTasks.putTask(id, nome, projeto, prioridade);
    // },
  },
};
</script>
