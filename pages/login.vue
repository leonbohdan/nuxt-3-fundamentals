<script setup>
const isLoggedIn = useIsLoggedIn();

definePageMeta({
  layout: 'plain',
});

function login() {
  isLoggedIn.value = true;
  useRouter().push('/');
}
</script>

<template>
  <form @submit.prevent="login">
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
