<template>
  <body>
    <div class="row">
      <div class="col s6">
        <Skills />
      </div>
      <div class="col s6">
        <Contact />
      </div>
    </div>
  </body>
</template>

<script>
import Skills from "./Skills";
import Contact from "./Contact";

export default {
  name: "Body",
  props: {},
  components: {
    Skills,
    Contact,
  },
};
</script>

<style>
</style>