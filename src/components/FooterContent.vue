<script setup lang="ts">
// No specific JavaScript or TypeScript logic is needed for now
</script>

<template>
  <footer class="bg-gray-900 text-white py-10 px-5">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
      <!-- Logo and Navigation Links -->
      <div class="text-lg font-bold mb-4 md:mb-0">
        {Finsweet
      </div>
      <div class="flex space-x-6 text-sm">
        <a href="#" class="hover:text-gray-400">Home</a>
        <a href="#" class="hover:text-gray-400">Blog</a>
        <a href="#" class="hover:text-gray-400">About us</a>
        <a href="/contact" class="hover:text-gray-400">Contact us</a>
        <a href="/privacypolicy" class="hover:text-gray-400">Privacy Policy</a>
      </div>
    </div>
    
    <!-- Subscribe Section -->
    <div class="mt-8 max-w-4xl mx-auto bg-[#FFFFFF]/[0.05] flex py-6">
      <p class="text-lg mb-4 px-10 text-xl">Subscribe to our newsletter to get the latest updates and news</p>
      <div class="flex justify-center w-full">
        <input 
          type="email" 
          placeholder="Enter Your Email" 
          class="h-fit px-4 py-2 focus:outline-none text-black bg-[#FFFFFF]/[0.05] mr-5"/>
        <button class=" h-fit bg-blue-600 px-6 py-2 text-white hover:bg-blue-700">
          Subscribe
        </button>
      </div>
    </div>
    
    <!-- Contact Info and Social Links -->
    <div class="mt-10 max-w-6xl mx-auto text-sm text-gray-400">
      <p>145 New York, FL 5467, USA</p>
      <p>Email: hello@finsweet.com | Phone: 123 456 7890</p>
      <div class="flex justify-end text-end space-x-4 mt-4">
        <a href="#" class="hover:text-gray-300 w-96">Facebook</a>
        <a href="#" class="hover:text-gray-300">Twitter</a>
        <a href="#" class="hover:text-gray-300">LinkedIn</a>
        <a href="#" class="hover:text-gray-300">Instagram</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Add custom styles here if needed */
</style>
