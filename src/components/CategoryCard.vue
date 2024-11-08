<template>
    <div :class="['p-6 w-60 rounded-lg border', active ? 'bg-blue-500 text-white' : 'bg-white text-gray-900']">
      <img :src="icon" alt="Category Icon" class="w-10 h-10 mb-4 mx-auto" />
      <h3 class="text-lg font-semibold">{{ title }}</h3>
      <p class="text-sm mt-2">{{ description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "CategoryCard",
    props: {
      title: String,
      description: String,
      active: Boolean,
      icon: String,
    },
  };
  </script>
  