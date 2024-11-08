<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import PostCard from '@/components/PostCard.vue'
import FeaturedPost from '@/components/FeaturedPost.vue'
import PostList from '@/components/PostList.vue'
import CategoriesSection from '@/components/CategoriesSection.vue'
import CallToAction from '@/components/CallToAction.vue'


</script>

<template>
<MainLayout>
        <FeaturedPost></FeaturedPost>
        <PostList></PostList>
        <PostCard></PostCard>
        <CategoriesSection></CategoriesSection>
        <CallToAction></CallToAction>
</MainLayout>
</template>
  