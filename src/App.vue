<template>
  <div id="app">
    <h2>PIZZERÍA DON REMOLO</h2>
    <input v-model="message" placeholder="Buscar comida" class="inputSearch">
    <div id="nav">
      <router-link to="/pizzas" class="linkTo">Pizzas</router-link>
      <router-link to="/empanadas" class="linkTo">Empanadas</router-link>
      <router-link to=/bebidas class="linkTo">Bebidas</router-link>
      <router-link to="/postres" class="linkTo">Postres</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f1f0de;
  padding: 1rem;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

.linkTo {
  padding: 20px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.inputSearch {
  width: 500px;
  padding: 0.5rem;
}
</style>
