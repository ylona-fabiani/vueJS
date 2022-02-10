<template>
  <table>
    <thead>
      <tr>
        <th>Compétences</th>
        <th>Niveau</th>
      </tr>
    </thead>
    <tbody>
      <Skill
        v-for="(skill, key) in skills"
        :name="skill.name"
        :percent="skill.percent"
        :key="key"
      />
    </tbody>
  </table>
</template>

<script>
import Skill from "./Skill";

export default {
  name: "mySkills",
  components: { Skill },
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