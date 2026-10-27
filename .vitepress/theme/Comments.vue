<script setup lang="ts">
import Giscus from '@giscus/vue'
import { useData } from 'vitepress'
import { computed } from 'vue'

// IDs from https://giscus.app (leave empty to hide the comments)
const repoId = 'R_kgDOU54ZNg'
const categoryId = 'DIC_kwDOU54ZNs4DJwD-'

const { page, frontmatter, isDark, lang } = useData()

// blog posts only (not the index); frontmatter `comments: false` turns it off
const enabled = computed(() =>
  repoId !== '' &&
  categoryId !== '' &&
  /^(ja\/)?blog\/(?!index\.md$)/.test(page.value.relativePath) &&
  frontmatter.value.comments !== false
)
</script>

<template>
  <div v-if="enabled" class="comments">
    <!-- mapping=pathname: the en and ja versions of a post get separate threads -->
    <Giscus
      :key="page.relativePath"
      repo="kawauso-com/ladiocast-docs"
      :repo-id="repoId"
      category="Blog Comments"
      :category-id="categoryId"
      mapping="pathname"
      strict="1"
      reactions-enabled="1"
      emit-metadata="0"
      input-position="top"
      :theme="isDark ? 'dark' : 'light'"
      :lang="lang"
      loading="lazy"
    />
  </div>
</template>

<style scoped>
.comments {
  margin-top: 48px;
}
</style>
