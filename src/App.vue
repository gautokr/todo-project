<template>
  <div id="app">
    <!-- Barra de navegación con enlaces a diferentes rutas -->
    <nav>
      <img src="favicon.ico" alt="logo" width="70px" height="auto">
      <router-link to="/">Añadir Tarea</router-link> |
      <router-link to="/gettasks">Lista de Tareas</router-link> |
      <router-link to="/combinedview">Lista Combinada</router-link> 
    </nav>
    <!-- Aquí se cargará el componente correspondiente a la ruta seleccionada -->
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}

nav {
  padding: 15px;
  background-color: rgba(247, 221, 183, 0.849);
  font-size: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

nav a {
  font-weight: bold;
  color: #5e4907;
}

nav a.router-link-exact-active {
  color: #574005;
}
</style>
