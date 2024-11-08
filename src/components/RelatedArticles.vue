<template>
    <div class="bg-white p-14">
      <!-- Section Title -->
      <h2 class="text-2xl font-bold text-gray-900 mb-6">What to read next</h2>
  
      <!-- Articles Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div v-for="(article, index) in articles" :key="index" class="bg-white shadow-md rounded-lg overflow-hidden">
          <!-- Article Image -->
          <div class="h-48 bg-cover bg-center" :style="{ backgroundImage: `url(${article.image})` }"></div>
          
          <!-- Article Content -->
          <div class="p-4">
            <!-- Author and Date -->
            <div class="flex items-center text-gray-500 text-sm mb-2 space-x-1">
              <span>By {{ article.author }}</span>
              <span>•</span>
              <span>{{ article.date }}</span>
            </div>
            
            <!-- Article Title -->
            <h3 class="text-lg font-semibold text-gray-800 mb-2">
              {{ article.title }}
            </h3>
            
            <!-- Article Excerpt -->
            <p class="text-gray-600 text-sm">
              {{ article.excerpt }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "RelatedArticles",
    data() {
      return {
        articles: [
          {
            image: "blogpost1.png",
            author: "Jane Roe",
            date: "Aug 15, 2021",
            title: "A UX Case Study Creating a Studious Environment for Students",
            excerpt: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          },
          {
            image: "blogpost2.png",
            author: "John Doe",
            date: "Aug 16, 2021",
            title: "A UX Case Study Creating a Studious Environment for Students",
            excerpt: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          },
          {
            image: "blogpost3.png",
            author: "Jane Doe",
            date: "Aug 25, 2021",
            title: "A UX Case Study Creating a Studious Environment for Students",
            excerpt: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add custom styles if needed */
  </style>
  