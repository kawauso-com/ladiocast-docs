# ブログ

<script setup>
import { useData } from 'vitepress'

const { theme } = useData()
</script>

## Ladiocast Development Notes
<ul>
  <li v-for="item of theme.sidebar[1].items" v-bind:key="item.link">
    <a v-bind:href="item.link">{{ item.text }}</a>
  </li>
</ul>
