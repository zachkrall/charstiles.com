<template>
  <div>
    <Title>Char Stiles</Title>
    <Nav />
    <nuxt />
    <Subscribe />
    <Footer />
  </div>
</template>

<script>
import Title from '~/components/Title'
import Nav from '~/components/Nav'
import Subscribe from '~/components/Subscribe'
import Footer from '~/components/Footer'

export default {
  components: { Title, Nav, Subscribe, Footer },
  data({ $ }) {
    return {
      links: []
    }
  },
  mounted() {
    const format = ({ title, path }) => ({ title, path })
    this.$content()
      .fetch()
      .then(data => {
        this.links = data.map(format)
      })
  }
}
</script>

<style>
:root {
  --padding: 1em;
}
html {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

@media screen and (min-width: 700px) {
  html {
    font-size: 2.1vw;
  }
}

*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  font-size: inherit;
  font-weight: normal;
}

h1 {
  text-transform: uppercase;
}

h2 {
  opacity: 0.7;
  text-transform: uppercase;
}

p {
  font-family: 'Roboto Mono';
}
</style>
