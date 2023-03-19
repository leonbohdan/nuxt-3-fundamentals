<script setup>
const route = useRoute();

const message = computed(() => {
  return `Team ${ route.params.teamSlug } and User id ${ route.params.userId }`;
})
</script>

<template>
  <p>
<!--    Team {{ $route.params.teamSlug }}-->
<!--    <br>-->
<!--    User id {{ $route.params.userId }}-->
    {{ message }}
  </p>
</template>
