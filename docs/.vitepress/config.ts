import { defineConfig } from 'vitepress'

const officeWordSidebarZh = [
  {
    text: 'Office Word',
    items: [
      { text: '介绍', link: '/office-word/introduction' },
      { text: '快速开始', link: '/office-word/getting-started' },
      { text: '协同编辑', link: '/office-word/collaboration' },
      { text: 'API', link: '/office-word/api' },
      { text: 'Demo 演示', link: '/office-word/demo' },
      { text: '在线演示', link: '/office-word/playground' },
      { text: 'npm 发布', link: '/office-word/npm-publish' },
      { text: '常见问题', link: '/office-word/faq' }
    ]
  }
]

const officeWordSidebarEn = [
  {
    text: 'Office Word',
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
  base: '/office-docs/',
  cleanUrls: true,
  lastUpdated: true,
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'Office Editor Docs',
      description: '全场景在线编辑器产品文档',
      themeConfig: {
        siteTitle: 'Office Editor Docs',
        nav: [
          { text: '首页', link: '/' },
          { text: 'Office Word', link: '/office-word/introduction' }
        ],
        sidebar: {
          '/office-word/': officeWordSidebarZh
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
      title: 'Office Editor Docs',
      description: 'Product documentation for full-scenario online editors',
      themeConfig: {
        siteTitle: 'Office Editor Docs',
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
