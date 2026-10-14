import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import Experience from './pages/Experience.vue';
import Projects from './pages/Projects.vue';
import Anime from './pages/Anime.vue';
import Strava from './pages/Strava.vue';
import Contact from './pages/Contact.vue';
import Ashglyph from './pages/Ashglyph.vue';
import AshglyphPrivacy from './pages/AshglyphPrivacy.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/experience', name: 'Experience', component: Experience },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/anime', name: 'Anime', component: Anime },
  { path: '/sports', name: 'Sports', component: Strava },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/ashglyph', name: 'Ashglyph', component: Ashglyph, meta: { title: 'Ashglyph' } },
  { path: '/ashglyph/privacy', name: 'AshglyphPrivacy', component: AshglyphPrivacy, meta: { title: 'Ashglyph Privacy Policy' } }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.afterEach((to) => {
  document.title = to.meta.title || 'Arif Burak Demiray';
});

export default router;
