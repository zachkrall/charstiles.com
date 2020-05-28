<template>
  <nav>
    <ul>
      <li v-for="([title,url],key) in links" :key="key">
        <nuxt-link :to="url">
          <span>{{title}}</span>
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        ['Overview', '/home'],
        ['Art', '/art'],
        ['Talks', '/talks'],
        ['Workshops', '/workshops'],
        ['About', '/about'],
        ['Contact', '/contact']
      ]
    }
  }
}
</script>

<style scoped>
nav ul {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
nav ul li {
  display: block;
}
nav ul li a {
  padding: var(--padding);
  color: inherit;
  text-decoration: none;
  text-transform: uppercase;
}
nav ul li a span {
  padding: 0.3em 0.5em;
  margin-left: -0.5em;
}
nav ul li a:hover span {
  background: var(--green);
  border-radius: 0.25em;
}
</style>