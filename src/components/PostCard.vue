<template>
    <div class="flex gap-4">
      <img :src="image" alt="Post Image" class="w-1/4 h-48 rounded-lg object-cover" />
      <div class="flex flex-col justify-between w-3/4">
        <p class="text-sm text-gray-500 font-semibold">{{ category }}</p>
        <h3 class="text-lg font-semibold">{{ title }}</h3>
        <p class="text-gray-600">{{ description }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "PostCard",
    props: {
      title: String,
      category: String,
      description: String,
      image: String,
    },
  };
  </script>
  