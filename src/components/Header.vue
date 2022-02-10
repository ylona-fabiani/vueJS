<template>
  <header id="header">
    <nav class="nav-wrapper">
      <div class="row">
        <div class="col s10">
          <a href="" class="brand-logo">My Portfolio</a>
        </div>
        <div class="col s2">
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><router-link :to="{ path: '/' }">Home</router-link></li>
            <li>
              <router-link :to="{ path: '/second' }">Second Page</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {},
  components: {},
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
