<script setup>
const route = useRoute();
const url = ref('http://www.omdbapi.com/?apikey=d905f6c1');
const movie = ref(null);

// const getMovie = async () => {
//   const res = await $fetch(`${url.value}&i=${route.params.id}`);
//
//   movie.value = res;
// };

const { data } = useAsyncData(() => {
  return $fetch(`${url.value}&i=${route.params.id}`);
});

movie.value = data;
</script>

<template>
  <div>
    <code>
      {{ movie }}
    </code>
  </div>
</template>
