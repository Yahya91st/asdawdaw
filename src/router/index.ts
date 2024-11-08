import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogView from '../views/BlogView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import PrivacyPolicyView from '../views/PrivacyPolicyView.vue';
import CategoryView from '../views/CategoryView.vue'
import BlogPostView from '../views/BlogPostView.vue'
import AuthorView from '../views/AuthorView.vue'

interface ImportMeta {
  env: {
    BASE_URL: string;
  };
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/category',
      name: 'category',
      component: CategoryView,
    },
    {
      path: '/privacypolicy',
      name: 'privacypolicy',
      component: PrivacyPolicyView,
    },
    {
      path: '/blogPost',
      name: 'blogPost',
      component: BlogPostView,
    },
    {
      path: '/author',
      name: 'author',
      component: AuthorView,
    },
    ],
});


export default router
