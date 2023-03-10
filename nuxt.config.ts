// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    components: [
        {
            path: '~/components',
            pathPrefix: false
        }
    ],
    runtimeConfig: {
        databaseConnection: 'postgres://postgres:root@localhost:5432/postgres'
    },
    modules: [
        '@nuxtjs/device'
    ]
})
