<template>
    <div>
        <h1 class="m-4">Lista de Tareas</h1>
        <button class="btn btn-primary" @click="fetchTasks"><i class="fa fa-spinner"></i>Cargar Tareas</button>
        <div v-if="tasks.length > 0">
            <div class ="card" v-for="task in tasks" :key="task.id">
                <div class="card-body">
                    <h5 :style="{ textDecoration: task.completed ? 'line-through' : 'none' }">{{ task.todo }}</h5>
                    <span class="estado m-5">{{ task.completed ? 'Completada' : 'Pendiente' }}</span>
                    <button class="btn btn-third" @click="toggleTaskCompletion(task)">
                      <i class="fa" :class="completed ? 'fa-undo' : 'fa-check'"></i>
                    </button>
                    <button class="btn btn-secondary" @click="deleteTask(task)"><i class="fa fa-trash"></i></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "TaskList",
    data() {
        return {
            tasks: [], // Almacenamiento local de las tareas traídas de la API
        };
    },
    methods: {
        // Llamada para obtener las tareas desde la API externa
        async fetchTasks() {
          try {
            const response = await axios.get('https://dummyjson.com/todos');
            console.log(response.data);
            if (response.data && response.data.todos) {
              this.tasks = response.data.todos;
            } else {
              console.error('No se encontraron tareas en la respuesta.');
            }
          } catch (error) {
            console.error('Error al obtener las tareas:', error);
          }
        },

        // Cambiar el estado de una tarea (completada/no completada)
        toggleTaskCompletion(task) {
            task.completed = !task.completed;
        },

        // Eliminar la tarea seleccionada
        deleteTask(task) {
            this.tasks = this.tasks.filter((t) => t.id !== task.id);
        },
    },
};
</script>

<style scoped>
.btn-primary {
  background-color: #d1b390;
  color: rgb(105, 68, 19);
  cursor: pointer;
  border-color: #d1b390;
}
.btn-primary:hover {
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

.btn-third{
  color: rgb(78, 226, 48);
  background-color: transparent;
  border-color: #2c2c2cde;
}
.btn-third:hover{
  background-color: burlywood;
}
.btn-secondary {
  color: #868686;
  background-color: transparent;
  border-color: #2c2c2cde;
}
</style>