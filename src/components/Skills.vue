<template>
  <table>
    <thead>
      <tr>
        <th>Compétences</th>
        <th>Niveau</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(skill, key) in skills" :key="key">
        <td>{{ skill.name }}</td>
        <td>{{ skill.percent }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "mySkills",
  // Ici, les données de notre composant
  data() {
    return {
      skills: [
        {
          name: "PHP",
          percent: "80%",
        },
        {
          name: "JavaScript",
          percent: "60%",
        },
        {
          name: "VueJS",
          percent: "Bientôt 100%",
        },
      ],
    };
  },
};
</script>