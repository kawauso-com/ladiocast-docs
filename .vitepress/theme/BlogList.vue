<script setup lang="ts">
import { useData, withBase } from 'vitepress'
import { computed } from 'vue'
import { data } from './blog.data'

const { lang, localeIndex } = useData()

const prefix = computed(() => localeIndex.value === 'root' ? '/blog/' : `/${localeIndex.value}/blog/`)
const posts = computed(() => data.filter((post) => post.url.startsWith(prefix.value)))

function formatDate(date: string) {
  return new Date(date).toLocaleDateString(lang.value, { dateStyle: 'long', timeZone: 'UTC' })
}
</script>

<template>
  <ul class="blog-list">
    <li v-for="post of posts" :key="post.url" class="blog-card">
      <a :href="withBase(post.url)" class="blog-card-link">
        <div class="blog-card-thumb">
          <img v-if="post.image" :src="withBase(post.image)" alt="" loading="lazy" />
        </div>
        <div class="blog-card-body">
          <time :datetime="post.date" class="blog-card-date">{{ formatDate(post.date) }}</time>
          <h2 class="blog-card-title">{{ post.title }}</h2>
          <p class="blog-card-excerpt">{{ post.excerpt }}</p>
        </div>
      </a>
    </li>
  </ul>
</template>

<style scoped>
.blog-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  margin: 24px 0 0;
  padding: 0;
  list-style: none;
}

.blog-card {
  margin: 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background-color: var(--vp-c-bg-soft);
  overflow: hidden;
  transition: border-color 0.25s, box-shadow 0.25s;
}

.blog-card:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: var(--vp-shadow-3);
}

.blog-card-link {
  display: flex;
  flex-direction: column;
  height: 100%;
  color: inherit;
  text-decoration: none;
}

.blog-card-thumb {
  aspect-ratio: 16 / 9;
  background-color: var(--vp-c-default-soft);
  overflow: hidden;
}

.blog-card-thumb img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}

.blog-card-body {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 16px 20px 20px;
}

.blog-card-date {
  color: var(--vp-c-text-2);
  font-size: 13px;
}

.blog-card-title {
  margin: 4px 0 8px;
  border-top: none;
  padding-top: 0;
  color: var(--vp-c-text-1);
  font-size: 18px;
  line-height: 1.4;
}

.blog-card-excerpt {
  display: -webkit-box;
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 14px;
  line-height: 1.6;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>
