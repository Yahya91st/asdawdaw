<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<template>
  <MainLayout>
      <div class="page-header bg-[#F4F0F8] py-16">
        <h1 class="text-4xl font-bold" style="color:black">Business</h1>
        <p style="color:grey"><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
        <p><br/>BLOG > BUSINESS</p>
      </div>
    <div class="category-view">
      <!-- Page Header -->

      <!-- Blog Post List -->
      <div class="content">
        <div class="posts">
          <div class="post" v-for="post in posts" :key="post.id">
            <img class="object-cover" :src="post.image" alt="Post Image" />
            <div class="post-content">
              <h2>{{ post.title }}</h2>
              <p>{{ post.excerpt }}</p>
              <button class="read-more">Read More</button>
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <aside class="sidebar">
          <div class="categories">
                <h3>Categories</h3>
                <ul>
                <li 
                v-for="(category, index) in categories" 
                :key="index" 
                :class="{ active: activeCategory === category.name }"
                @click="selectCategory(category.name)">
                <img :src="category.icon" alt="Icon" class="flex-wrap category-icon" />
                </li>
                {{ category.name }}
                </ul>
          </div>
          <div class="tags">
            <h3 class="font-bold">All Tags</h3>
            <div class="tag-list">
              <span v-for="tag in tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </MainLayout>
</template>

<script lang="ts">
import { ref } from 'vue'

const posts = ref([
  {
    id: 1,
    image: 'category.png',
    title: 'Top 6 free website mockup tools 2022',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna...',
  },
  {
    id: 2,
    image: 'category.png',
    title: 'Step-by-step guide to choosing great font pairs',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna...',
  },
  {
    id: 3,
    image: 'category.png',
    title: 'Ten free foogle fonts that you should use',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna...',
  },
  {
    id: 4,
    image: 'category.png',
    title: 'What did I learn from doing 50+ design sprints?',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna...',
  },
  // Add more post objects as needed
])

const categories = ref([
  { name: 'Startup', icon: 'startup-icon.png' },
  { name: 'Business', icon: 'business-icon.png' },
  { name: 'Economy', icon: 'economy-icon.png' },
  { name: 'Technology', icon: 'technology-icon.png' }
])

const tags = ref(['business','experience', 'screen', 'technology','marketing', 'life'])
</script>

<style scoped>
.category-view {
  display: flex;
  flex-direction: column;
  padding: 2rem;
}

.page-header {
  text-align: center;
  margin-bottom: 2rem;
}

.content {
  display: flex;
}

.posts {
  flex: 3;
}

.post {
  display: flex;
  margin-bottom: 1.5rem;
}

.post img {
  width: 150px;
  height: 150px;
  margin-right: 1rem;
}

.post-content h2 {
  font-size: 1.25rem;
  margin: 0;
}

.read-more {
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
}

.sidebar {
  flex: 1;
  margin-left: 2rem;
}

.categories h3, .tags h3 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

.categories ul, .tag-list {
  list-style: none;
  padding: 0;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
}

.tag {
  background-color: #f1f1f1;
  padding: 0.5rem;
  margin: 0.25rem;
  font-size: 0.875rem;
  border-radius: 0.25rem;
}
</style>
