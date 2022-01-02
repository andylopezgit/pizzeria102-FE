<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Pizzas msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Pizzas from '../components/Pizzas.vue'

export default {
  name: 'Home',
  components: {
    Pizzas
  }
}
</script>
