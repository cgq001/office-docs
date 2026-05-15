import { defineConfig } from 'vitepress'

const officeWordSidebarZh = [
  {
    text: '富文本',
    items: [
      { text: '介绍', link: '/rich-text/introduction' },
      { text: '快速开始', link: '/rich-text/getting-started' },
      { text: '协同编辑', link: '/rich-text/collaboration' },
      { text: 'API', link: '/rich-text/api' },
      { text: 'Demo 演示', link: '/rich-text/demo' },
      { text: '在线演示', link: '/rich-text/playground' },
      { text: 'npm 发布', link: '/rich-text/npm-publish' },
      { text: '常见问题', link: '/rich-text/faq' }
    ]
  }
]

const officeWordSidebarEn = [
  {
    text: '富文本',
    items: [
      { text: 'Introduction', link: '/en/office-word/introduction' },
      { text: 'Getting Started', link: '/en/office-word/getting-started' },
      { text: 'Collaboration', link: '/en/office-word/collaboration' },
      { text: 'API', link: '/en/office-word/api' },
      { text: 'Demo', link: '/en/office-word/demo' },
      { text: 'Playground', link: '/en/office-word/playground' },
      { text: 'NPM Publish', link: '/en/office-word/npm-publish' },
      { text: 'FAQ', link: '/en/office-word/faq' }
    ]
  }
]

export default defineConfig({
  base: '',
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/assets/icon256.ico' }],
    ['meta', { name: 'theme-color', content: '#0f766e' }]
  ],
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'Norio',
      description: '全场景在线编辑器产品文档',
      themeConfig: {
        logo: '/assets/icon.png',
        siteTitle: 'Norio 官方文档',
        nav: [
          { text: '首页', link: '/' },
          { text: '富文本', link: '/rich-text/introduction' }
        ],
        sidebar: {
          '/rich-text/': officeWordSidebarZh
        },
        socialLinks: [
          { icon: 'github', link: 'https://github.com/cgq001/office-docs' }
        ],
        footer: {
          message: 'Built with VitePress',
          copyright: 'Copyright © 2026'
        },
        search: {
          provider: 'local'
        }
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'Norio 官方文档',
      description: 'Product documentation for full-scenario online editors',
      themeConfig: {
        logo: '/assets/icon.png',
        siteTitle: 'Norio 官方文档',
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Office Word', link: '/en/office-word/introduction' }
        ],
        sidebar: {
          '/en/office-word/': officeWordSidebarEn
        },
        socialLinks: [
          { icon: 'github', link: 'https://github.com/cgq001/office-docs' }
        ],
        footer: {
          message: 'Built with VitePress',
          copyright: 'Copyright © 2026'
        },
        search: {
          provider: 'local'
        }
      }
    }
  }
})
