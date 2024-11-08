<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'

// Sample data (replace with API data if needed)
const featuredPost = {
  title: "Step-by-step guide to choosing great font pairs",
  date: "Aug 15, 2023",
  category: "Design",
  description: "A practical guide to typography...",
  image: "path/to/featured-image.jpg",
  link: "#"
}

const posts = [
  {
    title: "Design tips for designers that cover everything you need",
    date: "Aug 14, 2023",
    category: "Startup",
    description: "Quick and easy tips to improve your designs...",
    image: "path/to/image1.jpg",
    link: "#"
  },
  {
    title: "How to build rapport with your web design clients",
    date: "Aug 12, 2023",
    category: "Business",
    description: "Building trust and rapport with clients...",
    image: "path/to/image2.jpg",
    link: "#"
  },
  {
    title: "Logo design trends to avoid in 2022",
    date: "Aug 10, 2023",
    category: "Startup",
    description: "Avoid these trends to create timeless logos...",
    image: "path/to/image3.jpg",
    link: "#"
  },
  {
    title: "8 Figma design systems you can download for free today",
    date: "Aug 8, 2023",
    category: "Technology",
    description: "Boost your design productivity with these Figma systems...",
    image: "path/to/image4.jpg",
    link: "#"
  }
]
</script>

<template>
  <MainLayout>
    <!-- Featured Post Section -->
    <section class="featured-post">
      <img :src="featuredPost.image" alt="Featured Image" class="featured-image">
      <div class="featured-content">
        <p class="category">Featured Post</p>
        <h2>{{ featuredPost.title }}</h2>
        <p>{{ featuredPost.description }}</p>
        <a href="#" class="read-more">Read More</a>
      </div>
    </section>

    <!-- All Posts Section -->
    <section class="all-posts">
      <h3>All posts</h3>
      <div class="post-list">
        <div v-for="post in posts" :key="post.title" class="post-item">
          <img :src="post.image" alt="Post Image" class="post-image">
          <div class="post-content">
            <p class="category">{{ post.category }}</p>
            <h4>{{ post.title }}</h4>
            <p>{{ post.description }}</p>
          </div>
        </div>
      </div>
      <div class="pagination">
        <button class="prev-button">Previous</button>
        <button class="next-button">Next</button>
      </div>
    </section>

    <!-- Categories Grid -->
    <section class="categories-grid">
      <h3>Categories</h3>
      <div class="grid-container">
        <div v-for="n in 4" :key="n" class="grid-item">Category {{ n }}</div>
      </div>
    </section>
  </MainLayout>
</template>

<style scoped>
.featured-post {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

.featured-image {
  width: 50%;
  height: auto;
}

.featured-content {
  width: 50%;
}

.featured-content .category {
  font-weight: bold;
  color: #555;
}

.read-more {
  background-color: #007bff;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.all-posts {
  margin-bottom: 2rem;
}

.all-posts .post-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.post-item {
  display: flex;
  gap: 1rem;
}

.post-image {
  width: 150px;
  height: auto;
}

.pagination {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}

.prev-button,
.next-button {
  background-color: #007bff;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.categories-grid {
  margin-top: 2rem;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.grid-item {
  background-color: #f0f0f0;
  padding: 1rem;
  text-align: center;
  border-radius: 4px;
}
</style>
