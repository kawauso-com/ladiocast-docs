import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Ladiocast',
  cleanUrls: true,
  lastUpdated: true,
  srcExclude: ['README.md'],
  head: [['link', { rel: 'icon', href: '/images/Icon.png' }]],

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      description: 'Ladiocast documentation',
      themeConfig: {
        nav: [
          { text: 'Guide', link: '/guide/' },
          { text: 'Testing', link: '/testing' },
          { text: 'ChangeLog', link: '/changelog' },
          { text: 'Feedback', link: '/feedback' },
        ],
        sidebar: [
          {
            text: 'Guide',
            items: [
              { text: 'What is Ladiocast?', link: '/guide/' },
              { text: 'How to use', link: '/guide/usage' },
              { text: 'AppleScript', link: '/guide/applescript' },
              { text: 'In error cases', link: '/guide/troubleshooting' },
            ],
          },
          {
            text: 'Blog',
            link: '/blog/',
            items: generateSidebar(path.resolve(__dirname, '../blog'), '/blog/')
          },
          {
            text: 'Reference',
            items: [
              { text: 'Testing', link: '/testing' },
              { text: 'Feedback', link: '/feedback' },
              { text: 'ChangeLog', link: '/changelog' },
              { text: 'Included libraries', link: '/licenses' },
              { text: 'Privacy Policy', link: '/privacy' },
            ],
          },
        ],
        lastUpdated: {
          formatOptions: {
            dateStyle: 'long',
          },
        },
      },
    },
    ja: {
      label: '日本語',
      lang: 'ja',
      description: 'Ladiocast ドキュメント',
      themeConfig: {
        nav: [
          { text: 'ガイド', link: '/ja/guide/' },
          { text: 'テスト', link: '/ja/testing' },
          { text: '変更履歴', link: '/ja/changelog' },
          { text: 'フィードバック', link: '/ja/feedback' },
        ],
        sidebar: [
          {
            text: 'ガイド',
            items: [
              { text: 'Ladiocastとは', link: '/ja/guide/' },
              { text: '使用方法', link: '/ja/guide/usage' },
              { text: 'AppleScript', link: '/ja/guide/applescript' },
              { text: 'エラー等の対処', link: '/ja/guide/troubleshooting' },
            ],
          },
          {
            text: 'ブログ',
            link: '/ja/blog/',
            items: generateSidebar(path.resolve(__dirname, '../ja/blog'), '/ja/blog/')
          },
          {
            text: 'リファレンス',
            items: [
              { text: 'テスト', link: '/ja/testing' },
              { text: 'フィードバック', link: '/ja/feedback' },
              { text: '変更履歴', link: '/ja/changelog' },
              { text: '同梱ライブラリ', link: '/ja/licenses' },
              { text: 'プライバシーポリシー', link: '/ja/privacy' },
            ],
          },
        ],
        docFooter: { prev: '前のページ', next: '次のページ' },
        outline: { label: '目次' },
        lastUpdated: {
          text: '最終更新',
          formatOptions: {
            dateStyle: 'long',
            forceLocale: true,
          },
        },
        returnToTopLabel: 'トップへ戻る',
        sidebarMenuLabel: 'メニュー',
        darkModeSwitchLabel: '外観',
        langMenuLabel: '言語',
      },
    },
  },

  themeConfig: {
    logo: '/images/Icon.png',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/kawauso-com/ladiocast-docs' },
    ],
  },
})

function generateSidebar(dirPath: string, basePath: string) {
  const files = fs.readdirSync(dirPath)
  const items = [] as { text: string; link: string; date: Date }[]
  for (const file of files) {
    // only Markdown files that don't start with _ and aren't index.md
    if (file.startsWith('_') || !file.endsWith('.md') || file == 'index.md') {
      continue
    }

    const fullPath = path.join(dirPath, file)
    const fileContent = fs.readFileSync(fullPath, 'utf-8')

    // parse the frontmatter and body with gray-matter
    const { data } = matter(fileContent)

    // the file name without its extension is used for the link
    const fileNameWithoutExt = path.basename(file, '.md')

    // fallbacks (default values) for when the frontmatter has no title or date
    const text = `${data.title ?? fileNameWithoutExt}`
    const date = data.date ? new Date(data.date) : new Date(0) // a post without a date is treated as the oldest

    items.push({
      text,
      link: `${basePath}${fileNameWithoutExt}`,
      date,
    })
  }
  return items
    .sort((a, b) => a.date.getTime() - b.date.getTime()) // sort by date, oldest first (ascending)
    .map(({ text, link }) => ({ text, link })) // shape into the form VitePress expects (text and link only)
    .reverse() // reverse to get newest first (descending)
}
