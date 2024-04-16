export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.hook('vue:error', (err, instance) => {
    instance?.$router.push("/404")
  })
})