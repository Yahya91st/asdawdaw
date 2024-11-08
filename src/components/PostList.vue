<template>
    <section class="bg-white py-8">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-4">All posts</h2>
        <div class="space-y-8">
          <PostCard
            title="Design tips for designers that cover everything you need"
            category="STARTUP"
            description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur..."
            image="blog2.png"
          />
          <PostCard
            title="How to build rapport with your web design clients"
            category="BUSINESS"
            description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur..."
            image="blog3.png"
          />
          <PostCard
            title="Logo design trends to avoid in 2022"
            category="STARTUP"
            description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur..."
            image="blog4.png"
          />
          <PostCard
            title="8 Figma design systems you can download for free today"
            category="TECHNOLOGY"
            description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
            image="blog5.png"
          />
          <PostCard
            title="Font sizes in UI design: The complete guide to follow"
            category="ECONOMY"
            description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
            image="blog2.png"
          />
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import PostCard from "./PostCard.vue";
  
  export default {
    name: "PostList",
    components: {
      PostCard,
    },
  };
  </script>
  