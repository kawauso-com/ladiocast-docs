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
        lastUpdated: { text: '最終更新' },
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
