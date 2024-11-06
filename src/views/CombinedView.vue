<template>
    <div>
      <h1 class="m-4">Lista Combinada</h1>
      <div class="add-task-container">
        <div class="input-group">
          <input 
            v-model="newTask" 
            @keyup.enter="addTask" 
            placeholder="Nueva Tarea" 
            class="task-input"
          />
          <button @click="addTask" class="add-button">Listo</button>
        </div>
      </div>

      <div v-if="tasks.length > 0" class="task-list">
        <div v-for="task in tasks" :key="task.id" class="task-item">
          <span :class="{ completed: task.completed }">{{ task.todo }}</span>
          <div>
            <button class="btn btn-primary" @click="toggleTaskCompletion(task)">
              <i class="fa" :class="task.completed ? 'fa-undo' : 'fa-check'"></i>
            </button>
            <button class="btn btn-secondary" @click="deleteTask(task)">
              <i class="fa fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
  
      <div class="mt-4">
        <button class="btn btn-cargar" @click="fetchTasks">
          <i class="fa fa-spinner"></i> Cargar Tareas
        </button>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "TaskManager",
    data() {
      return {
        newTask: "", 
        tasks: [],
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
        this.tasks.unshift(newTask);
        this.newTask = ""; 
      },
      deleteTask(task) {
        this.tasks = this.tasks.filter((t) => t.id !== task.id);
      },
      toggleTaskCompletion(task) {
        task.completed = !task.completed;
      },
      async fetchTasks() {
        try {
          const response = await axios.get("https://dummyjson.com/todos");
          if (response.data && response.data.todos) {
            this.tasks = response.data.todos;
          } else {
            console.error("No se encontraron tareas en la respuesta.");
          }
        } catch (error) {
          console.error("Error al obtener las tareas:", error);
        }
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
.btn-primary:hover {
    background-color: burlywood;
}

.btn-secondary {
  color: #868686;
  background-color: transparent;
  border-color: #2c2c2cde;
}
.btn-cargar {
  background-color: #d1b390;
  color: rgb(105, 68, 19);
  cursor: pointer;
  border-color: #d1b390;
}
.btn-cargar:hover {
  background-color: #b58d52;  
  transform: scale(1.05); 
}
.fa-spinner {
  padding-right: 10px;
}
.card {
  margin-top: 10px;
}
.completed {
  text-decoration: line-through;
  color: rgb(212, 0, 0);
}
.estado {
  size: 20px;
  font-size: 12px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;;
  padding: 5px;
  color: white;
  background-color: rgb(114, 63, 2);
  border-radius: 8px;
}

.btn-secondary {
  color: #868686;
  background-color: transparent;
  border-color: #2c2c2cde;
}
</style>