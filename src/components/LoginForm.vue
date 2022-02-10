<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" required placeholder="e-mail" v-model="email" />
    <input type="password" required placeholder="password" v-model="password" />
    <button>Login</button>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";

export default {
  stup() {
    //refs
    const email = ref("");
    const password = ref("");

    const handleSubmit = () => {};

    return { email, password, handleSubmit };
  },
};
</script>

<style>
</style>