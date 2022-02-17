<template>
  <table>
    <thead>
      <tr>
        <th>Compétences</th>
        <th>Niveau</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <img src="@/assets/loading.gif" v-if="(loading = true)" />
      </tr>
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
import { getSkills } from "../server/helper";

export default {
  name: "mySkills",
  components: { Skill },
  // Ici, les données de notre composant
  data() {
    return {
      skills: [],
      loading: true,
    };
  },
  async mounted() {
    await getSkills().then((res) => {
      this.skills = res.data.skills;
    });
  },

  beforeUpdate() {
    this.loading = false;
  },
};
</script>