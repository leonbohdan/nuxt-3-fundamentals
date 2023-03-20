<script setup>
const isLoggedIn = useIsLoggedIn();
</script>

<template>
  <nav style="display: flex; gap: 10px">
    <NuxtLink to="/">Home</NuxtLink>

    <NuxtLink to="/movies">Movies</NuxtLink>

    <NuxtLink to="https://vueschool.io/">Vue School</NuxtLink>

    <NuxtLink v-if="!isLoggedIn" to="/login">Login</NuxtLink>

    <a v-else href="#" @click.prevent="isLoggedIn = false">Logout</a>
  </nav>

  <slot></slot>
</template>
