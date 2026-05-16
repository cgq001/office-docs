import { defineConfig } from 'vitepress'

const officeWordSidebarZh = [
  {
    text: '富文本',
    items: [
      { text: '介绍', link: '/rich-text/introduction' },
      { text: '快速开始', link: '/rich-text/getting-started' },
      { text: '协同编辑（专业版）', link: '/rich-text/collaboration' },
      { text: 'API', link: '/rich-text/api' },
      { text: 'Demo 演示', link: '/rich-text/demo' },
      { text: '在线演示', link: '/rich-text/playground' },
      // { text: 'npm 发布', link: '/rich-text/npm-publish' },
      { text: '常见问题', link: '/rich-text/faq' }
    ]
  }
]

const officeWordSidebarEn = [
  {
    text: '富文本',
    items: [
      { text: 'Introduction', link: '/en/rich-text/introduction' },
      { text: 'Getting Started', link: '/en/rich-text/getting-started' },
      { text: 'Collaboration', link: '/en/rich-text/collaboration' },
      { text: 'API', link: '/en/rich-text/api' },
      { text: 'Demo', link: '/en/rich-text/demo' },
      { text: 'Playground', link: '/en/rich-text/playground' },
      { text: 'NPM Publish', link: '/en/rich-text/npm-publish' },
      { text: 'FAQ', link: '/en/rich-text/faq' }
    ]
  }
]

const officeExcelSidebarZh = [
  {
    text: '表格',
    items: [
      { text: '介绍', link: '/excel/introduction' },
      { text: '快速开始', link: '/excel/getting-started' },
      { text: '协同接入', link: '/excel/collaboration' },
      { text: 'API', link: '/excel/api' },
      { text: 'Demo 演示', link: '/excel/demo' },
      { text: '在线演示', link: '/excel/playground' },
      { text: '常见问题', link: '/excel/faq' }
    ]
  }
]

const officeExcelSidebarEn = [
  {
    text: 'Spreadsheet',
    items: [
      { text: 'Introduction', link: '/en/excel/introduction' },
      { text: 'Getting Started', link: '/en/excel/getting-started' },
      { text: 'Collaboration', link: '/en/excel/collaboration' },
      { text: 'API', link: '/en/excel/api' },
      { text: 'Demo', link: '/en/excel/demo' },
      { text: 'Playground', link: '/en/excel/playground' },
      { text: 'FAQ', link: '/en/excel/faq' }
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
          { text: '富文本', link: '/rich-text/introduction' },
          { text: '表格', link: '/excel/introduction' }
        ],
        sidebar: {
          '/rich-text/': officeWordSidebarZh,
          '/office-word/': officeWordSidebarZh,
          '/excel/': officeExcelSidebarZh
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
          { text: 'Rich Text', link: '/en/rich-text/introduction' },
          { text: 'Spreadsheet', link: '/en/excel/introduction' }
        ],
        sidebar: {
          '/en/rich-text/': officeWordSidebarEn,
          '/en/office-word/': officeWordSidebarEn,
          '/en/excel/': officeExcelSidebarEn,
          '/en/office-excel/': officeExcelSidebarEn
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
