<template>
  <form>
    <input type="email" placeholder="Your Email" />
    <input type="submit" value="Subscribe" />
  </form>
</template>

<style scoped>
form {
  width: 100%;
  background: #00ff00;
  display: flex;
}
input {
  background: transparent;
  border: 0;
  font: inherit;
  padding: var(--padding);
  text-transform: uppercase;
}

input[type='email'] {
  flex-grow: 1;
}
</style>