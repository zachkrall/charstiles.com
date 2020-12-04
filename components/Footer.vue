<template>
  <footer>
    <div class="row">
      <div class="col">
        <nuxt-link to="/">Overview</nuxt-link>
        <br />Art
        <br />Talks
        <br />Workshops
        <br />About
        <br />Contact
        <br />
      </div>
      <div class="col">
        <a href="https://twitter.com/charstiles">Twitter</a>
        <br />Instagram
        <br />Recurse Center
      </div>
    </div>
    <div class="row">
      <div class="col full">&copy; Copyright {{ (new Date()).getFullYear() }} Char Stiles</div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: #161816;
  color: #efefef;
}

.row {
}

.row .col {
  padding: var(--padding);
  display: inline-block;
  vertical-align: top;
  max-width: 20vw;
}

.row .col.full {
  max-width: 100%;
}
</style>