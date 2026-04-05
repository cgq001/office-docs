<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import OfficeWordDemoPage from './components/OfficeWordDemoPage.vue'

const { frontmatter } = useData()
</script>

<template>
  <OfficeWordDemoPage v-if="frontmatter.layout === 'full-demo'" />
  <DefaultTheme.Layout v-else />
</template>
