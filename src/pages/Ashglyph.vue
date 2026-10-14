<template>
  <div class="color-d-f px-4 py-8 max-w-3xl mx-auto">
    <div class="game-fade" style="animation-delay: 0.05s;">
      <img src="/ashglyph-assets/feature.jpg" alt="Ashglyph" class="w-full rounded-lg border border-color mb-6">
      <div class="flex items-center gap-4 mb-4">
        <img src="/ashglyph-assets/icon.png" alt="" class="w-16 h-16 rounded-xl flex-shrink-0">
        <div>
          <h1 class="text-3xl md:text-4xl font-bold ember">Ashglyph</h1>
          <p class="text-sm opacity-70">Seven circles. Seven sins. One ember knight.</p>
        </div>
      </div>
      <p class="text-sm opacity-90 leading-relaxed mb-6">
        A souls-like boss rush drawn entirely in glyphs: every flame, pillar and blade is a character, lit like an old isometric RPG.
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
        <li v-for="f in features" :key="f" class="flex gap-2"><span class="ember">&#9670;</span><span>{{ f }}</span></li>
      </ul>
    </div>

    <div class="game-fade" style="animation-delay: 0.35s;">
      <h2 class="text-xl font-bold mb-4">Screenshots</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
        <img
          v-for="s in screenshots"
          :key="s"
          :src="'/ashglyph-assets/' + s"
          alt="Ashglyph screenshot"
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
      <router-link to="/ashglyph/privacy" class="border border-color rounded-lg p-4 hover:hover-bg transition-all duration-300 group">
        <h3 class="font-bold text-sm group-hover:color-bg transition-colors">Privacy policy</h3>
        <p class="text-xs opacity-60 group-hover:color-bg transition-colors">What the game collects and your choices</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AshglyphPage',
  data() {
    return {
      email: 'ashglyph.games@gmail.com',
      playLive: false,
      playUrl: 'https://play.google.com/store/apps/details?id=com.ashglyph.game',
      features: [
        '7 bosses, each with its own chamber, moveset and second phase',
        'Roll through danger, parry blows and cast one focused spell',
        'Six weapons that play differently: sword, axe, spear, mace, katana and scythe',
        'Roguelite descents with random boons, plus 10 Ascension levels for the brave',
        'A daily challenge with a streak and a global ranking',
        'Easy, Normal and Hard, adjustable combat speed, high-contrast warnings and more accessibility options',
        'Touch, keyboard and controller support',
        'Fair to play: no forced ads. Optional rewarded ads and a one-time supporter pack'
      ],
      screenshots: ['warden.jpg', 'seraph.jpg', 'berserker.jpg', 'market.jpg']
    };
  }
};
</script>

<style scoped>
.ember {
  color: #ff9a4a;
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
