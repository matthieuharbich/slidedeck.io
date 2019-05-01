<template>
  <div id="open-data">
    <div class="reveal">
      <div class="slides">
        <section data-background="pink">
					<h1>Slidffe</h1>
					<p>Ma première slide</p>
					<p>Open data is about</p>
					<p class="reference">ma référence</p>
				</section>
				<section data-background="http://i.giphy.com/90F8aUepslB84.gif">
					<h3>Slide 2</h3>
					<p>yes</p>
				</section>
        <section>
          Richard bonjour!
        </section>
        <section>
          <section>
            1
          </section>
          <section>
            vertical
          </section>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Reveal from 'reveal.js/js/reveal'
import HomeButton from './HomeButton'
export default {
  name: 'OpenData',
  mounted() {
    // Reveal.initialize()
    
  },
  components: {
    HomeButton
  }
  
}
</script>

<style>
@import url('../../node_modules/reveal.js/css/reveal.css');
@import url('../../node_modules/reveal.js/css/theme/white.css');
#open-data {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  height: 100vh;
}
</style>