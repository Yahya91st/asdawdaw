<template>
    <div class="min-h-screen bg-gray-50">
      <FeaturedPost />
      <PostList />
    </div>
  </template>
  
  <script>
  import FeaturedPost from "./components/FeaturedPost.vue";
  import PostList from "./components/PostList.vue";
  
  export default {
    name: "App",
    components: {
      FeaturedPost,
      PostList,
    },
  };
  </script>
    