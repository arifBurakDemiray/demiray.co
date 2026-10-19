<template>
  <div class="color-d-f px-4 py-8 max-w-3xl mx-auto">
    <div class="studio-fade" style="animation-delay: 0.05s;">
      <img src="/euxinos-assets/header.jpg" alt="euxinos" class="w-full rounded-lg border border-color mb-6">
      <div class="flex items-center gap-4 mb-4">
        <img src="/euxinos-assets/icon.png" alt="" class="w-16 h-16 rounded-xl flex-shrink-0">
        <div>
          <h1 class="text-3xl md:text-4xl font-bold">euxinos</h1>
          <p class="text-sm opacity-70">Indie games for mobile</p>
        </div>
      </div>
      <p class="text-sm opacity-90 leading-relaxed mb-10">
        euxinos is the label for the games I make in my own time: small, carefully tuned games for phones, fair to play, with no forced ads.
      </p>
    </div>

    <div class="studio-fade" style="animation-delay: 0.2s;">
      <h2 class="text-xl font-bold mb-4">Games</h2>
      <router-link
        v-for="game in games"
        :key="game.path"
        :to="game.path"
        class="flex items-center gap-4 border border-color rounded-lg p-4 mb-3 hover:hover-bg transition-all duration-300 group"
      >
        <img :src="game.icon" alt="" class="w-14 h-14 rounded-xl flex-shrink-0">
        <div class="min-w-0">
          <h3 class="font-bold group-hover:color-bg transition-colors">{{ game.title }}</h3>
          <p class="text-sm opacity-80 group-hover:color-bg transition-colors">{{ game.summary }}</p>
          <p class="text-xs opacity-60 mt-1 group-hover:color-bg transition-colors">{{ game.status }}</p>
        </div>
      </router-link>
    </div>

    <div class="studio-fade grid grid-cols-1 sm:grid-cols-2 gap-3 mt-10" style="animation-delay: 0.35s;">
      <a :href="'mailto:' + email" class="border border-color rounded-lg p-4 hover:hover-bg transition-all duration-300 group">
        <h3 class="font-bold text-sm group-hover:color-bg transition-colors">Contact and support</h3>
        <p class="text-xs opacity-60 group-hover:color-bg transition-colors">{{ email }}</p>
      </a>
      <router-link to="/" class="border border-color rounded-lg p-4 hover:hover-bg transition-all duration-300 group">
        <h3 class="font-bold text-sm group-hover:color-bg transition-colors">Who makes these</h3>
        <p class="text-xs opacity-60 group-hover:color-bg transition-colors">Arif Burak Demiray, software engineer in Izmir</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EuxinosPage',
  data() {
    return {
      email: 'ashglyph.games@gmail.com',
      games: [
        {
          title: 'Ashglyph',
          path: '/ashglyph',
          icon: '/ashglyph-assets/icon.png',
          summary: 'A souls-like boss rush drawn entirely in glyphs.',
          status: 'Android, coming soon to Google Play'
        },
        {
          title: 'Glyphloop',
          path: '/glyphloop',
          icon: '/glyphloop-assets/icon.png',
          summary: 'An endless loop puzzle drawn in glowing ASCII glyphs.',
          status: 'Android, coming soon to Google Play'
        }
      ]
    };
  }
};
</script>

<style scoped>
.studio-fade {
  opacity: 0;
  animation: fadeUp 0.5s ease-out forwards;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
