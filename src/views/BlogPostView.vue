<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import AuthorBlog from '@/components/AuthorBlog.vue'
import RelatedArticles from '@/components/RelatedArticles.vue'
import CallToAction from '@/components/CallToAction.vue'


</script>

<template>
<MainLayout>
        <AuthorBlog></AuthorBlog>
        <RelatedArticles></RelatedArticles>
        <CallToAction></CallToAction>
</MainLayout>
</template>
  