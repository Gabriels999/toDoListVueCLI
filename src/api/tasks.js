export default {
  getTasks: () =>
    new Promise((resolve, reject) => {
      fetch("http://localhost:3000/tarefas")
        .then((r) => r.json())
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    }),
};
