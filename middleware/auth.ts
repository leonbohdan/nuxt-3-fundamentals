export default defineNuxtRouteMiddleware((to, from) => {
    const userIsLoggedIn = false;

    if (!userIsLoggedIn) {
        // return abortNavigation('You are not allow to visit /admin!');
        return navigateTo({ path: '/login' })
    }
});
