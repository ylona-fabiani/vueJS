<template>
  <tr>
    <td>{{ name }}</td>
    <td>{{ percent }}</td>
  </tr>
</template>

<script>
export default {
  name: "Skill",
  props: ["name", "percent"],
  components: {},
};
</script>