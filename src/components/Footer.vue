<template>
  <footer id="footer" class="page-footer">
    <div class="container">
      <ul>
        <li>{{ firstname }}</li>
        <li>{{ num }}</li>
      </ul>
    </div>
    <div class="footer-copyright">
      <div class="container">© 2014 Copyright Text</div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: {
    firstname: String,
    num: String,
  },
};
</script>

<style>
</style>