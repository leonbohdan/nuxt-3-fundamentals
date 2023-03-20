export default defineEventHandler((event) => {
  // return 'hello World';

  return {
    // message: getMethod(event) + ' hello World',
    message: 'Hello GET',
  };
});
