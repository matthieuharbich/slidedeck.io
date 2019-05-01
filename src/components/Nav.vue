<template>
  <div id="navigation">
    <ul>
      <li class="presentation_tile"  v-for="(presentation, index) in presentations" :key="index">
        <router-link  :to="{ name: 'Slides', params:{name:presentation.url_id }}">{{presentation.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Nav',
  data () {
    return {
      presentations: []
    }
  },
  created(){
    axios
      .get('http://localhost:5000/slide/api_v1/slides')
      .then(response => (this.presentations = response.data))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body{
  margin:0;
  padding:0;
}

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.presentation_tile{
  width:200px;
  height:200px;
  float:left;
  background-color: aquamarine;
}
</style>
