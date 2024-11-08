<template>
    <section class="py-10">
      <div class="max-w-4xl mx-auto px-4">
        <h2 class="text-2xl font-bold mb-6">My Posts</h2>
        <div class="space-y-8">
          <PostCard
            title="Font sizes in UI design: The complete guide to follow"
            category="BUSINESS"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            image="author2.png"
          />
          <PostCard
            title="How to build rapport with your web design clients"
            category="ECONOMY"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            image="author3.png"
          />
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import PostCard from "./PostCard.vue";
  
  export default {
    name: "PostListSection",
    components: {
      PostCard,
    },
  };
  </script>
  