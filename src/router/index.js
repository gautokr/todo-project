import Vue from 'vue';
import VueRouter from 'vue-router';
import AddTasks from '../views/AddTasks.vue';
import GetTasks from '../views/GetTasks.vue';
import CombinedView from '@/views/CombinedView.vue';
// Importa los otros componentes en esta sección

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'addtasks',
    component: AddTasks
  },
  {
    path: '/gettasks',
    name: 'GetTasks',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: GetTasks
  }, 
  {
    path: '/combinedview',
    name: 'CombinedView', // Ruta para añadir tareas
    component: CombinedView // Aquí se debe cargar el componente AddTask
    // Implementa la lógica para añadir nuevas tareas.
  },

  // Las demás rutas deben ir aquí también
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
