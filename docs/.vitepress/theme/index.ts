import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import Layout from './Layout.vue'
import OfficeWordPlayground from './components/OfficeWordPlayground.vue'
import OfficeWordDemoPage from './components/OfficeWordDemoPage.vue'
import '@ap666/office-word/style.css'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('OfficeWordPlayground', OfficeWordPlayground)
    app.component('OfficeWordDemoPage', OfficeWordDemoPage)
  }
} satisfies Theme
