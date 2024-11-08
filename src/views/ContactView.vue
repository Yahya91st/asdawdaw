<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<template>
  <MainLayout>
    <section class="contact-section">
      <div class="contact-header py-16">
        <h1>Contact Us</h1>
        <h2>Let’s Start a Conversation</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
      </div>
      
      <div class="contact-info">
        <div class="working-hours">
          <h3>Working hours</h3>
          <p class="font-bold">Monday To Friday<br>9:00 AM to 8:00 PM<br></p>
          <p style="color: grey;">Our Support Team is available 24/7</p>
        </div>
        <div class="contact-details">
          <h3>Contact Us</h3>
          <p class="font-bold">020 7993 2905<br></p>
          <p style="color: grey;">hello@fixnsect.com</p>
        </div>
      </div>
      
      <form class="contact-form pb-32">
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Your Email" />
        
        <div class="dropdowns flex gap-2">
          <select placeholder="Province">
            <option>Province</option>
            <!-- Add more options here -->
          </select>
          <select placeholder="City">
            <option>City</option>
            <!-- Add more options here -->
          </select>
        </div>
        
        <textarea placeholder="Message"></textarea>
        <button type="submit" class="submit-button">Send Message</button>
      </form>
    </section>
  </MainLayout>
</template>

<style scoped>
.contact-section {
  text-align: center;
  max-width: 600px;
  margin: auto;
}

.contact-header h2 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.contact-header p {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
}

.contact-info {
  text-align: start;
  display: flex;
  justify-content: space-between;
  background-color: #ffd966;
  padding: 1rem;
  margin-bottom: 1rem;
}

.contact-info h3 {
  color: grey;
  font-size: 1rem;
  font-weight: light;
  margin-bottom: 0.5rem;
}

.contact-info p {
  font-size: 0.9rem;
  color: #333;
}

.contact-form {
  display: flex;
  flex-direction: column;
}

.contact-form input,
.contact-form select,
.contact-form textarea {
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.contact-form textarea {
  min-height: 100px;
}

.submit-button {
  background-color: #0000ff;
  color: white;
  padding: 0.8rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

.submit-button:hover {
  background-color: #ff00ff;
}
</style>
