<script setup>
const url = ref('https://www.omdbapi.com/?apikey=d905f6c1');
const query = ref('taxi');
const movies = ref([]);

const search = async () => {
  const { Search } = await $fetch(`${url.value}&s=${query.value}`);

  movies.value = Search;
}

search();
</script>

<template>
  <form @submit.prevent="search">
    <input type="text" v-model="query">

    <button>
      Search
    </button>
  </form>

  <ul style="display: flex; flex-wrap: wrap; gap: 10px; list-style: none;">
    <li v-for="movie in movies" :key="movies.imdbID">
      <NuxtLink :to="{ name: 'movies-id', params: { id: movie.imdbID }}">
        <img :src="movie.Poster" :alt="movie.title">
      </NuxtLink>
    </li>
  </ul>
</template>

<style scoped></style>
