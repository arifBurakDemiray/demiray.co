import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import Experience from './pages/Experience.vue';
import Projects from './pages/Projects.vue';
import Anime from './pages/Anime.vue';
import Strava from './pages/Strava.vue';
import Contact from './pages/Contact.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/experience', name: 'Experience', component: Experience },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/anime', name: 'Anime', component: Anime },
  { path: '/sports', name: 'Sports', component: Strava },
  { path: '/contact', name: 'Contact', component: Contact }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
