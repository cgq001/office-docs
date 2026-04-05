import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/office-docs/',
  lang: 'zh-CN',
  title: 'Office Editor Docs',
  description: '全场景在线编辑器产品文档',
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    siteTitle: 'Office Editor Docs',
    nav: [
      { text: '首页', link: '/' },
      { text: 'Office Word', link: '/office-word/introduction' },
      { text: '在线演示', link: '/office-word/playground' }
    ],
    sidebar: {
      '/office-word/': [
        {
          text: 'Office Word',
          items: [
            { text: '介绍', link: '/office-word/introduction' },
            { text: '快速开始', link: '/office-word/getting-started' },
            { text: '协同编辑', link: '/office-word/collaboration' },
            { text: 'API', link: '/office-word/api' },
            { text: 'Demo 演示', link: '/office-word/demo' },
            { text: '在线演示', link: '/office-word/playground' },
            { text: '常见问题', link: '/office-word/faq' }
          ]
        }
      ]
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
})
