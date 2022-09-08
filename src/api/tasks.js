import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

export default {
  getTasks: (callbackFunction) => {
    axios
      .get("/tarefas")
      .then((r) => {
        callbackFunction(r.data);
      })
      .catch((error) => {
        console.log("error:", error);
      });
  },
  postTask: (newTask, callbackFunction) => {
    axios
      .post("/tarefas", newTask)
      .then((r) => callbackFunction(r.data))
      .catch((error) => {
        console.log("error:", error);
      });
  },
  deleteTask: (taskId, callbackFunction) => {
    axios.delete(`/tarefas/${taskId}`).then((r) => callbackFunction(r.data));
  },
  putTask: (taskId, name, project, priority) => {
    const newVersionOfTask = {
      nome: name,
      projeto: project,
      prioridade: priority,
    };
    axios
      .put(`http://localhost:3000/tarefas/${taskId}`, newVersionOfTask)
      .then((r) => console.log("Tarefa atualizada", r.data))
      .catch((error) => console.log("error:", error));
  },
};

// getTasks: () =>
//   new Promise((resolve, reject) => {
//     fetch("http://localhost:3000/tarefas")
//       .then((r) => r.json())
//       .then((data) => {
//         resolve(data);
//       })
//       .catch((error) => {
//         reject(error);
//       });
//   }),
