<template>
  <div id="slide_template">
    <button><router-link :to="{ name: 'Home' }">Home</router-link></button>
    <div id="slides">
      <div class="reveal">
        <div class="slides">
          <section  v-for="(slide, index) in presentation.slides" :key="index" :data-background="slide.data_background">
            <h1>{{slide.h1}}</h1>
            <h1>Test</h1>
            <h2>{{slide.h2}}</h2>
            <p v-for="paragraph in slide.paragraphs" :key="paragraph.p">{{paragraph.p}}</p>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Reveal from 'reveal.js/js/reveal'
import HomeButton from './HomeButton'
import axios from 'axios'
export default {
  name: 'Slides',
  data(){
    return{
      title:'ouaiuoauoai',
      presentation: ""
    }
  },
  mounted() {
    if (localStorage.getItem('reloaded')) {
        // The page was just reloaded. Clear the value from local storage
        // so that it will reload the next time this page is visited.
        
       
        // .then(Reveal.initialize())
        var self = this
      // Reveal.configure({ history: true });
      axios
          .get('http://localhost:5000/matthieuharbich/api_v1/projects')
          .then(function(res){
            console.log(res.data)
            console.log(self)
            self.projects = res.data
          })
          .then(function(){
            console.log(self.projects)
        Reveal.initialize()

          })
        this.title = this.$route.params.name
       
        localStorage.removeItem('reloaded');
    } else {
        // Set a flag so that we know not to reload the page twice.
        localStorage.setItem('reloaded', '1');
        location.reload();
    }
    

    
    // location.reload();
    
    // console.log($route.params.presentation)
  },
  components: {
    HomeButton
  },
  created(){
    
      console.log(this)
    //  var pres = {
    //       name: 'Open data',
    //       slides: [
    //         {
    //           h2: 'Bonjour monsieurs!',
    //           data_background:"pink",
    //           paragraphs:[
    //             {p:'premier paragraphe'},
    //             {p:'deuxième paragraphe'},
    //             {p:'troisième paragraphe'}
    //           ]
    //         },
    //         {
    //           h1: 'oui oui oui',
    //           data_background: "http://i.giphy.com/90F8aUepslB84.gif"
    //         },
    //         {
    //           h2: 'ceci est un header 2',
    //           data_background:"https://media.giphy.com/media/9u1kwNLzdvGPcWCHHA/giphy.gif"
    //         }
    //       ]
    //     }
        // this.title = this.$route.params.name
        // this.presentation = pres
  }
  
}
</script>

<style>
@import url('../../node_modules/reveal.js/css/reveal.css');
@import url('../../node_modules/reveal.js/css/theme/white.css');
#slides {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  height: 100vh;
}

#slide_template > button{
  position:fixed;
  top:10px;
  right:10px;
  z-index:1000;
}
</style>