<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
</script>


<template>
    <MainLayout>
    <div class="bg-gray-400 p-10 text-gray-900 max-w-5xl mx-auto  mt-32 relative">
        <img src="/about1.png" alt="">
      <!-- About Us Section -->
      <div class="absolute  flex top-0 left-1/2 -translate-x-1/2 w-[90%] text-center mb-8">
          <div class="h-full flex flex-col justify-between">
            <div class="bg-white">
                <h2 class="text-lg font-semibold text-gray-500 text-left">ABOUT US</h2>
                <h1 class="text-4xl font-bold mt-2 text-left">We are a team of content writers who share their learnings</h1>
            </div>
                <!-- Statistics Section -->
                <div class="flex justify-center space-x-6 mt-10 aspect-square">
                    <div class="text-center">
                    <div class="bg-blue-600 text-white text-2xl font-bold rounded-lg py-4 px-6">12+</div>
                    <p class="mt-2 text-gray-600">Blogs Published</p>
                    </div>
                    <div class="text-center">
                    <div class="bg-blue-600 text-white text-2xl font-bold rounded-lg py-4 px-6">18K+</div>
                    <p class="mt-2 text-gray-600">Views per Month</p>
                    </div>
                    <div class="text-center">
                    <div class="bg-blue-600 text-white text-2xl font-bold rounded-lg py-4 px-6">30K+</div>
                    <p class="mt-2 text-gray-600">Total Audience</p>
                </div>
            </div>
          </div>
          <div>
              <p class="mt-4 text-gray-600 max-w-2xl mx-auto bg-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim libero vitae interdum volutpat, quis interdum neque ullamcorper.
              </p>
          </div>
      </div>
  
      
  
      <!-- Mission and Vision Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 text-center md:text-left">
        <div>
          <h3 class="text-xl font-semibold">Our Mission</h3>
          <p class="text-3xl">Creating valuable content for creatives all around the world</p>
          <p class="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.
          </p>
        </div>
        <div>
          <h3 class="text-xl font-semibold">Our Vision</h3>
          <p class="text-3xl">A platform that empowers individuals to improve</p>
          <p class="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.
          </p>
        </div>
      </div>
  </div>

  <div class="bg-white p-10 text-gray-900 max-w-5xl mx-auto">
    <!-- Our Team of Creatives Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <!-- Text Content -->
        <div>
          <h2 class="text-2xl font-bold text-gray-800">Our team of creatives</h2>
          <p class="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </p>
          <p class="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <!-- Image with Decorative Element -->
        <div class="relative">
          <img src="#" alt="Team of creatives" class="rounded-lg w-full">
          <div class="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/4 bg-blue-500 w-8 h-16 rounded-lg"></div>
        </div>
      </div>
  
      <!-- Why We Started This Blog Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <!-- Image with Decorative Element -->
        <div class="relative order-last md:order-first">
          <img src="#" alt="Why we started this blog" class="rounded-lg w-full">
          <div class="absolute bottom-4 left-4 bg-yellow-500 w-8 h-8 rounded-full"></div>
        </div>
        <!-- Text Content -->
        <div>
          <h2 class="text-2xl font-bold text-gray-800">Why we started this Blog</h2>
          <p class="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </p>
          <p class="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
    </MainLayout>
  </template>

<script lang="ts">
import { ref } from 'vue'
</script>

  