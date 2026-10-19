<template>
  <div class="color-d-f px-4 py-8 max-w-3xl mx-auto">
    <div class="game-fade" style="animation-delay: 0.05s;">
      <img src="/glyphloop-assets/feature.jpg" alt="Glyphloop" class="w-full rounded-lg border border-color mb-6">
      <div class="flex items-center gap-4 mb-4">
        <img src="/glyphloop-assets/icon.png" alt="" class="w-16 h-16 rounded-xl flex-shrink-0">
        <div>
          <h1 class="text-3xl md:text-4xl font-bold phosphor">Glyphloop</h1>
          <p class="text-sm opacity-70">Turn the glyphs. Close every loop.</p>
          <router-link to="/euxinos" class="text-xs opacity-60 hover:opacity-100 transition-opacity">a game by euxinos</router-link>
        </div>
      </div>
      <p class="text-sm opacity-90 leading-relaxed mb-6">
        An endless puzzle drawn entirely in text-mode glyphs: every board is a grid of box-drawing characters glowing on an old terminal screen. Turn them until no line is left with a loose end.
      </p>
      <div class="flex flex-wrap gap-3 mb-10">
        <a
          v-if="playLive"
          :href="playUrl"
          target="_blank"
          rel="noopener"
          class="px-5 py-2.5 rounded-lg bg-two color-bg font-medium text-sm hover:opacity-90 transition-opacity"
        >Get it on Google Play</a>
        <span v-else class="px-5 py-2.5 rounded-lg border border-color text-sm opacity-80">Coming soon to Google Play</span>
      </div>
    </div>

    <div class="game-fade" style="animation-delay: 0.2s;">
      <h2 class="text-xl font-bold mb-4">Features</h2>
      <ul class="space-y-2 mb-10 text-sm opacity-90">
        <li v-for="f in features" :key="f" class="flex gap-2"><span class="phosphor">+</span><span>{{ f }}</span></li>
      </ul>
    </div>

    <div class="game-fade" style="animation-delay: 0.35s;">
      <h2 class="text-xl font-bold mb-4">Screenshots</h2>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
        <img
          v-for="s in screenshots"
          :key="s"
          :src="'/glyphloop-assets/' + s"
          alt="Glyphloop screenshot"
          loading="lazy"
          class="w-full rounded-lg border border-color"
        >
      </div>
    </div>

    <div class="game-fade grid grid-cols-1 sm:grid-cols-2 gap-3" style="animation-delay: 0.5s;">
      <a :href="'mailto:' + email" class="border border-color rounded-lg p-4 hover:hover-bg transition-all duration-300 group">
        <h3 class="font-bold text-sm group-hover:color-bg transition-colors">Support</h3>
        <p class="text-xs opacity-60 group-hover:color-bg transition-colors">{{ email }}</p>
      </a>
      <router-link to="/glyphloop/privacy" class="border border-color rounded-lg p-4 hover:hover-bg transition-all duration-300 group">
        <h3 class="font-bold text-sm group-hover:color-bg transition-colors">Privacy policy</h3>
        <p class="text-xs opacity-60 group-hover:color-bg transition-colors">What the game collects and your choices</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GlyphloopPage',
  data() {
    return {
      email: 'glyphloop.games@gmail.com',
      playLive: false,
      playUrl: 'https://play.google.com/store/apps/details?id=com.glyphloop.game',
      features: [
        'Endless levels, the same board for every player, with a new twist every other chapter: locked pieces, wraparound edges, linked pieces and fog',
        'Finish a chapter to collect its character and fill the codepage of all 128 ASCII characters',
        'A daily puzzle with a streak, and Rush: solve boards against the clock',
        'Fewer taps earn more stars. Tap to turn, hold to turn back',
        'Line styles and retro palettes: rounded, double, pure ASCII, phosphor, amber, mainframe and more',
        'Calm generative music with a theme for every chapter',
        'Text size, high contrast, reduced motion and screen reader cues',
        'Fair to play: no forced ads. Optional rewarded ads and a one-time supporter pack'
      ],
      screenshots: ['play.jpg', 'chapter.jpg', 'daily.jpg', 'rush.jpg']
    };
  }
};
</script>

<style scoped>
.phosphor {
  color: #7dffa1;
}

.game-fade {
  opacity: 0;
  animation: fadeUp 0.5s ease-out forwards;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
