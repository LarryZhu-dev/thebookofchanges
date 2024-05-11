<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import DefaultTheme from 'vitepress/theme'
import './style.css'
const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #home-hero-image>
      <img src="/yi.svg" alt="" class="VPImage image-src">
    </template>
  </Layout>
</template>