<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" required placeholder="nickname" v-model="nickname" />
    <input type="email" required placeholder="e-mail" v-model="email" />
    <input type="password" required placeholder="password" v-model="password" />
    <button>Sign up</button>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import useSignup from "../composables/useSignup";

export default {
  stup() {
    const { error, signup } = useSignup();

    //refs
    const nickname = ref("");
    const email = ref("");
    const password = ref("");

    const handleSubmit = async () => {
      await signup(email.value, password.value, nickname.value);
      console.log("user signed up");
    };

    return { nickname, email, password, handleSubmit };
  },
};
</script>

<style>
</style>