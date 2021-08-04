<template>
<div>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> | 
    <router-link to="/chartMap">chartMap</router-link> | 
    <router-link to="/canvasMap">canvasMap</router-link>| 
    <router-link to="/svgMap">svgMap</router-link>| 
    <router-link to="/svgTest">svgTest</router-link>| 
    <router-link to="/tableTest">tableTest</router-link>
  </div>
  <router-view/>
</div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
