<script setup>
const userStore = useUserStore();

definePageMeta({
  layout: 'plain',
});
</script>

<template>
  <form @submit.prevent="userStore.login">
    <h1>Login</h1>

    <label for="">
      Username
      <input type="text">
    </label>

    <label for="">
      Password
      <input type="password">
    </label>

    <button>
      Login
    </button>
  </form>
</template>
