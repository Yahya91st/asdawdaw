<template>
    <section class="bg-gray-100 p-8">
      <div class="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-6">
        <div class="md:w-1/2">
          <h2 class="text-sm font-semibold text-gray-500">FEATURED POST</h2>
          <h3 class="text-2xl font-bold mt-2">Step-by-step guide to choosing great font pairs</h3>
          <p class="text-gray-600 mt-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...</p>
          <button class="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded">Read More</button>
        </div>
        <div class="md:w-1/2">
          <img src="/blog1.png" alt="Featured Post Image" class="w-full h-auto rounded-lg shadow-md" />
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "FeaturedPost",
  };
  </script>
  