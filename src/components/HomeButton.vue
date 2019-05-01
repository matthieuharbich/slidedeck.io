<template>
  <div class="HomeButton">
    <router-link class="homelink" :to="{ name: 'Home' }"></router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeButton',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.homelink {
  position:fixed;
  top:5px;
  right:5px;
  height: 10px;
  width:10px;
  background-color: pink;
}
</style>
