<script setup>
const route = useRoute();
const url = ref('https://www.omdbapi.com/?apikey=d905f6c1');
const movie = ref(null);

// const getMovie = async () => {
//   const res = await $fetch(`${url.value}&i=${route.params.id}`);
//
//   movie.value = res;
// };

const { data, error } = await useFetch(
  `${url.value}&i=${route.params.id}`,
  // 'https://httpbin.org/status/500',
  {
    pick: ['Plot', 'Title', 'Error', 'Poster'],
    key: `/movies/${route.params.id}`,
    onResponseError(context) {
      showError({statusCode: 500, statusMessage: 'Oh noes!'});
    },
  },
);

if (error.value) {
  console.log('error', error.value)
}

if (data.value.Error === 'Incorrect IMDb ID.') {
  showError({statusCode: 404, statusMessage: 'Page not found!'});
}

// const { data } = useAsyncData(
//   `/movies/${route.params.id}`,
//   () => {
//     return $fetch(`${url.value}&i=${route.params.id}`);
//   },
//   {
//     pick: ['Plot', 'Title'],
//     // transform(data){
//     //   return {
//     //     Plot: data.Plot,
//     //     Title: data.Title,
//     //   };
//     // },
//   },
// );

movie.value = data;

useHead({
  title: data.value.Title,
  meta: [
    {name: 'description', content: data.value.Plot},
    {name: 'og:description', content: data.value.Plot},
    {name: 'og:image', content: data.value.Poster},
    {name: 'twitter:card', content: 'summary_large_image'},
  ],
});
</script>

<template>
  <div>
    <code>
      {{ movie }}
    </code>
  </div>
</template>
