import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import Layout from './Layout.vue'
import OfficeWordPlayground from './components/OfficeWordPlayground.vue'
import OfficeWordDemoPage from './components/OfficeWordDemoPage.vue'
import OfficeExcelPlayground from './components/OfficeExcelPlayground.vue'
import OfficeExcelDemoPage from './components/OfficeExcelDemoPage.vue'
import '@norio-office/rich-text/style.css'
import '@norio-office/office-excel/style.css'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('OfficeWordPlayground', OfficeWordPlayground)
    app.component('OfficeWordDemoPage', OfficeWordDemoPage)
    app.component('OfficeExcelPlayground', OfficeExcelPlayground)
    app.component('OfficeExcelDemoPage', OfficeExcelDemoPage)
  }
} satisfies Theme
