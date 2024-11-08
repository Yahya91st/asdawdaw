<template>
    <section class="bg-gray-100 py-10">
      <div class="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6 px-4">
        <img src="/author1.png" alt="Profile" class="w-[251px] h-[294px] object-cover shadow-md" />
        <div>
          <h1 class="text-3xl font-bold">Hey there, I'm Andrew Johnson and welcome to my Blog</h1>
          <p class="text-gray-600 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div class="flex space-x-4 mt-4">
            <!-- Replace # with actual social media links -->
            <a href="facebook.com" class="text-gray-500 hover:text-gray-900">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="x.com" class="text-gray-500 hover:text-gray-900">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="instagram.com" class="text-gray-500 hover:text-gray-900">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="linkedin.com" class="text-gray-500 hover:text-gray-900">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="bg-yellow-400 h-1 mt-6 mx-auto w-20"></div>
    </section>
  </template>
  
  <script>
  export default {
    name: "WelcomeSection",
  };
  </script>
  
  <!-- Add font-awesome CDN link to your project for social media icons, or replace with SVGs if preferred. -->
  