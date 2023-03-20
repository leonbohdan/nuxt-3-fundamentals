export default defineEventHandler((event) => {
  // return 'Hello helloWorld';

  return {
    // message: getMethod(event) + ' Hello helloWorld',
    message: getQuery(event),
  };
})
