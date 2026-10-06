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
          { text: 'Alpha Testing', link: '/testing' },
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
              { text: 'Alpha Testing', link: '/testing' },
              { text: 'Feedback', link: '/feedback' },
              { text: 'ChangeLog', link: '/changelog' },
              { text: 'Included libraries', link: '/licenses' },
              { text: 'Privacy Policy', link: '/privacy' },
            ],
          },
        ],
      },
    },
    ja: {
      label: '日本語',
      lang: 'ja',
      description: 'Ladiocast ドキュメント',
      themeConfig: {
        nav: [
          { text: 'ガイド', link: '/ja/guide/' },
          { text: 'アルファテスト', link: '/ja/testing' },
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
              { text: 'アルファテスト', link: '/ja/testing' },
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
    // _で始まらないMarkdownファイルで index.md 以外を対象にする
    if (file.startsWith('_') || !file.endsWith('.md') || file == 'index.md') {
      continue
    }

    const fullPath = path.join(dirPath, file)
    const fileContent = fs.readFileSync(fullPath, 'utf-8')

    // gray-matterでフロントマターと本文をパース
    const { data } = matter(fileContent)

    // 拡張子を除いたファイル名をリンク用に使用
    const fileNameWithoutExt = path.basename(file, '.md')

    // フロントマターに title または date がない場合のフォールバック（デフォルト値）
    const text = `${data.title ?? fileNameWithoutExt}`
    const date = data.date ? new Date(data.date) : new Date(0) // 日付がないものは最古扱い

    items.push({
      text,
      link: `${basePath}${fileNameWithoutExt}`,
      date,
    })
  }
  return items
    .sort((a, b) => a.date.getTime() - b.date.getTime()) // date（日付）でソート：古い順（昇順）
    .map(({ text, link }) => ({ text, link })) // VitePressが求める形式（textとlinkのみ）に整形
    .reverse() // 逆順にして新しい順（降順）にする
}
