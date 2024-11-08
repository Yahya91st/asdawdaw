<template>
    <div class="bg-gray-50 ">
      <!-- Hero Section -->
      <section class="relative bg-cover bg-center rounded-lg overflow-hidden h-80   " style="background-image: url('home1.png') ">
        <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center">
          <div class="text-white px-6 text-start">
            <p class="uppercase text-sm mb-2">Posted on Startup</p>
            <h1 class="text-3xl font-bold mb-4">Step-by-step guide to choosing great font pairs</h1>
            <p>By  James West  |  May 23, 2022 </p>
            <p class="mb-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
            <button class="bg-blue-600 text-white px-4 py-2 rounded-lg">Read More</button>
          </div>
        </div>
      </section>
  
      <!-- Main Content -->
      <section class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Featured Post -->
        <div class="p-14">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">Featured Post</h2>
          <div class="bg-white shadow-md rounded-lg overflow-hidden">
            <img src="/home2.png" alt="Featured" class="w-full h-40 object-cover">
            <div class="p-4">
              <div class="text-gray-500 text-sm mb-1">By Jane Roe • Aug 15, 2021</div>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </h3>
              <p class="text-gray-600 text-sm mb-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...</p>
              <button class="bg-blue-600 text-white px-4 py-2 rounded-lg">Read More</button>
            </div>
          </div>
        </div>
  
        <!-- All Posts -->
        <div class="md:col-span-2">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-2xl font-semibold text-gray-800">All Posts</h2>
            <a href="#" class="text-blue-600 text-sm font-medium">View All</a>
          </div>
          <div class="space-y-4">
            <div v-for="(post, index) in posts" :key="index" class="flex items-center bg-white shadow-md rounded-lg p-4">
              <img :src="post.image" alt="Post image" class="w-20 h-20 object-cover rounded-lg mr-4">
              <div>
                <div class="text-gray-500 text-sm mb-1">{{ post.author }} • {{ post.date }}</div>
                <h3 class="text-lg font-semibold text-gray-800">{{ post.title }}</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: "BlogLayout",
    data() {
      return {
        posts: [
          {
            image: "",
            author: "By Jane Roe • Medium",
            date: "Aug 15, 2021",
            title: "8 Figma design systems that you can download for free today.",
          },
          {
            image: "",
            author: "By John Doe • Medium",
            date: "Aug 16, 2021",
            title: "8 Figma design systems that you can download for free today.",
          },
          {
            image: "",
            author: "By Jane Smith • Medium",
            date: "Aug 25, 2021",
            title: "8 Figma design systems that you can download for free today.",
          },
        ],
      };
    },
  };
  // Create a function to mirror an image
  function mirrorImage(imageSrc) {
      // Create a new image element
      const image = new Image();
      image.src = imageSrc;
      
      // Once the image is loaded
      image.onload = () => {
        // Get the canvas and set its dimensions
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = image.width;
        canvas.height = image.height;

        // Flip the canvas horizontally
        ctx.translate(image.width, 0);
        ctx.scale(-1, 1);

        // Draw the mirrored image on the canvas
        ctx.drawImage(image, 0, 0);
      };
    }

    // Call the function with the path to your image
    mirrorImage('home1.png'); // Replace with your image path
  </script>
  
  <style scoped>
  /* Add any additional custom styles if needed */
  </style>
  