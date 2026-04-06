<template>
  <nav class="flex items-center justify-between px-6 py-4">
    <router-link to="/" class="color-d-f font-bold text-xl hover:hover-color transition-colors">
      demiray.co
    </router-link>
    <div class="flex gap-4 md:gap-6 items-center">
      <router-link
        v-for="link in navLinks"
        :key="link.to"
        :to="link.to"
        class="color-d-f hover:hover-color transition-colors text-sm font-medium"
        :class="{ 'hover-color': $route.path === link.to }"
      >{{ link.label }}</router-link>
      <a
        href="https://arifburakdemiray.medium.com/"
        target="_blank"
        class="color-d-f hover:hover-color transition-colors text-sm font-medium"
      >Blog</a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarComponent',
  data() {
    return {
      navLinks: [
        { to: '/', label: 'Home' },
        { to: '/experience', label: 'Experience' },
        { to: '/projects', label: 'Projects' },
        { to: '/anime', label: 'Anime' },
        { to: '/sports', label: 'Sports' },
        { to: '/contact', label: 'Contact' }
      ]
    };
  }
};
</script>
