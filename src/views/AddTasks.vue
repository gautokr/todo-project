<template>
  <div class="add-task-container">
      <h1>Añadir Tarea</h1>
      <div class="input-group">
          <input 
              v-model="newTask" 
              @keyup.enter="addTask" 
              placeholder="Nueva Tarea" 
              class="task-input"
          />
          <button @click="addTask" class="add-button">Listo</button>
      </div>

      <div v-if="tasks.length > 0" class="task-list">
          <div v-for="task in tasks" :key="task.id" class="task-item">
              <span :class="{ completed: task.completed }">{{ task.todo }}</span>
              <div>
                  <button class="btn btn-primary" @click="toggleTaskCompletion(task)">
                    <i class="fa" :class="completed ? 'fa-undo' : 'fa-check'"></i>
                  </button>
                  <button class="btn btn-secondary" @click="deleteTask(task)"> <i class="fa fa-trash"></i></button>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "AddTask",
  data() {
      return {
          newTask: "", // Campo de entrada para la nueva tarea
          tasks: [],   // Lista de tareas locales
      };
  },
  methods: {
      addTask() {
          if (this.newTask.trim() === "") return;

          const newTask = {
              todo: this.newTask,
              completed: false,
              id: Date.now(), 
          };

          // Añadir la nueva tarea al inicio de la lista
          this.tasks.unshift(newTask);
          this.newTask = ""; // Limpiar el campo de entrada después de agregar
      },

      // Elimina una tarea específica de la lista
      deleteTask(task) {
          this.tasks = this.tasks.filter((t) => t.id !== task.id);
      },

      // Cambia el estado de la tarea entre completada y no completada
      toggleTaskCompletion(task) {
          task.completed = !task.completed;
      },
  },
};
</script>

<style scoped>
.add-task-container {
  padding: 25px;
  max-width: 950px;
  margin: 0 auto;
}

.input-group {
  display: flex;
  margin-bottom: 10px;
}

.task-input {
  flex-grow: 1;
  padding: 5px;
  margin-right: 5px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.add-button {
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  background-color: #d1b390;
  color: rgb(105, 68, 19);
  cursor: pointer;
  font-weight: 500;
}

.task-list {
  margin-top: 20px;
}

.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eee;
}

.completed {
  text-decoration: line-through;
  color: rgb(212, 0, 0);
}

.btn-primary{
  color: rgb(78, 226, 48);
  background-color: transparent;
  border-color: #2c2c2cde;
}

.btn-secondary {
  color: #868686;
  background-color: transparent;
  border-color: #2c2c2cde;
}
</style>
