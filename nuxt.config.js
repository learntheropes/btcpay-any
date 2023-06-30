const isDev = process.env.NODE_ENV !== 'production'
const isDeployed = (process.env.CYCLIC_URL) ? true : false
const deploymentDomain = (isDeployed) ? `https://${process.env.CYCLIC_URL}` : 'http://localhost:3000'
console.log('deploymentDomain', deploymentDomain)
export default defineNuxtConfig({

  runtimeConfig: {
    nextAuthSecret: process.env.NEXTAUTH_SECRET,
    faunaSecret: process.env.FAUNA_SECRET,
    marangaduUser: process.env.MARANGADU_USER,
    marangaduPassword: process.env.MARANGADU_PASSWORD,
    marangaduHost: process.env.MARANGADU_HOST,
    marangaduPort: process.env.MARANGADU_PORT,
    marangaduFrom: process.env.MARANGADU_FROM,
    public: {
    }
  },

  modules: [
    '@sidebase/nuxt-auth'
  ],

  auth: {
    origin: deploymentDomain,
    globalAppMiddleware: true
  }
});
