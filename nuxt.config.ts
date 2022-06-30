import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxtjs/color-mode'],
  content: {
    sources: ['public'],
    markdown: {
      toc: {
        depth: 5,
        searchDepth: 5,
      },
      rehypePlugins: ['rehype-mathjax'],
    },
  },
})
