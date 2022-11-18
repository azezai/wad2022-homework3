<template>
  <nav>
    <header>Welcome to our sad attempt at a page</header>
    <router-link to="/">Home</router-link> |
    <router-link to="/Signup">Signup</router-link>
  </nav>
  <router-view/>
  
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  
  width: calc(100vw - 10px);
  margin: 5px 5px 0 5px;
  background-color: darkgray;
  overflow: auto;
  padding: 5px 10px;
  border-radius: 10px;
  font-size: x-large;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: blue;
}

</style>
