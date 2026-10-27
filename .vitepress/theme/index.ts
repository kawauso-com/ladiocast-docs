import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import BlogList from './BlogList.vue'
import Comments from './Comments.vue'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-after': () => h(Comments),
    })
  },
  enhanceApp({ app }) {
    app.component('BlogList', BlogList)
  },
} satisfies Theme
