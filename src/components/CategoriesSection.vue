<template>
    <section class="bg-gray-50 py-8">
      <div class="max-w-5xl mx-auto text-center">
        <h2 class="text-2xl font-bold mb-6">All Categories</h2>
        <div class="flex flex-wrap justify-center gap-4">
          <CategoryCard
            title="Business"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            :active="false"
            icon="business-icon.png"
          />
          <CategoryCard
            title="Startup"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            :active="true"
            icon="startup-icon.png"
          />
          <CategoryCard
            title="Economy"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            :active="false"
            icon="economy-icon.png"
          />
          <CategoryCard
            title="Technology"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            :active="false"
            icon="technology-icon.png"
          />
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import CategoryCard from "./CategoryCard.vue";
  
  export default {
    name: "CategoriesSection",
    components: {
      CategoryCard,
    },
  };
  </script>
  