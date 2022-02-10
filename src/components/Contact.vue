<template>
  <div class="row">
    <!-- Ici je relie mes input aux données de mon composant avec un v-model -->
    <input type="text" id="firstname" v-model="firstname" />
    <label for="firstname">Prénom</label>
    <input type="text" id="lastname" v-model="lastname" />
    <label for="lastname">Nom de famille</label>
    <input type="email" id="email" v-model="subject" />
    <label for="subject">Email</label>
    <textarea class="textarea" v-model="content"></textarea>

    <button type="button" @click="submitForm">Soumettre</button>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      firstname: "",
      lastname: "",
      subject: "",
      content: "",
    };
  },
  methods: {
    submitForm() {
      console.log(this.firstname, this.lastname, this.subject, this.content);
    },
  },
};
</script>

<style scoped>
.textarea {
  margin-top: 20px;
}
</style>