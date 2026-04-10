<template>
  <div class="color-d-f px-4 py-8 max-w-3xl mx-auto" style="min-height: calc(100vh - 56px);">
    <h1 class="text-3xl md:text-4xl font-bold text-center mb-2">Anime & Manga</h1>
    <p class="text-center text-sm opacity-70 mb-10">
      From
      <a
        :href="profileUrl"
        target="_blank"
        class="color-d-s hover:hover-color underline transition-colors"
      >MyAnimeList</a>
    </p>

    <!-- Tab Switcher -->
    <div class="flex justify-center gap-4 mb-8">
      <button
        v-for="tab in ['anime', 'manga']"
        :key="tab"
        class="px-4 py-1.5 rounded-full text-sm font-medium border transition-colors capitalize"
        :class="activeTab === tab
          ? 'bg-two color-bg border-transparent'
          : 'border-color color-d-s hover:hover-bg hover:color-bg'"
        @click="activeTab = tab"
      >{{ tab }} ({{ tab === 'anime' ? animeList.length : mangaList.length }})</button>
    </div>

    <!-- Stats -->
    <div v-if="currentStats.length" class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
      <div
        v-for="stat in currentStats"
        :key="stat.label"
        class="border border-color rounded-lg p-4 text-center"
      >
        <div class="text-2xl font-bold color-d-s">{{ stat.value }}</div>
        <div class="text-xs opacity-60 mt-1">{{ stat.label }}</div>
      </div>
    </div>

    <!-- Filter Buttons -->
    <div v-if="currentList.length" class="flex flex-wrap gap-2 justify-center mb-8">
      <button
        v-for="cat in currentCategories"
        :key="cat.key"
        class="px-3 py-1 rounded-full text-sm border transition-colors"
        :class="selectedStatus === cat.key
          ? 'bg-two color-bg border-transparent font-bold'
          : 'border-color color-d-s hover:hover-bg hover:color-bg'"
        @click="selectedStatus = cat.key"
      >{{ cat.label }} ({{ cat.count }})</button>
    </div>

    <!-- Loading -->
    <div v-if="loading" class="text-center py-16">
      <div class="inline-block w-8 h-8 border-2 border-color border-t-transparent rounded-full animate-spin"></div>
    </div>

    <!-- List Grid -->
    <div v-if="filteredList.length" class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
      <a
        v-for="item in filteredList"
        :key="item.mal_id"
        :href="item.url"
        target="_blank"
        class="rounded-lg border border-color overflow-hidden hover:hover-bg transition-all duration-300 group flex gap-3 p-4"
      >
        <img
          v-if="item.image"
          :src="item.image"
          :alt="item.title"
          class="w-14 h-20 object-cover rounded flex-shrink-0"
          loading="lazy"
        >
        <div class="min-w-0">
          <h2 class="font-bold text-sm leading-tight group-hover:color-bg transition-colors">
            {{ item.title }}
          </h2>
          <div class="flex items-center gap-2 mt-1.5">
            <span class="text-xs px-2 py-0.5 rounded-full bg-two color-bg font-medium">
              {{ statusLabel(item.status) }}
            </span>
            <span v-if="item.type" class="text-xs opacity-40">{{ item.type }}</span>
          </div>
          <div v-if="item.score" class="flex items-center gap-1.5 mt-1.5">
            <span
              v-for="star in 5"
              :key="star"
              class="text-xs"
              :class="star <= Math.round(item.score / 2) ? 'color-d-t' : 'opacity-30'"
            >&#9733;</span>
            <span class="text-xs opacity-50 group-hover:color-bg">{{ item.score }}/10</span>
          </div>
          <div class="text-xs opacity-40 mt-1 group-hover:color-bg transition-colors">
            {{ progressText(item) }}
          </div>
        </div>
      </a>
    </div>

    <!-- Empty -->
    <div v-if="!loading && !currentList.length" class="text-center py-8">
      <p class="opacity-50 text-sm">No {{ activeTab }} found.</p>
    </div>

    <!-- MAL Link -->
    <div class="text-center mt-4">
      <a
        :href="'https://myanimelist.net/' + activeTab + 'list/' + username"
        target="_blank"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-color color-d-s hover:hover-bg hover:color-bg text-sm transition-all"
      >
        View full list on MyAnimeList &rarr;
      </a>
    </div>
  </div>
</template>

<script>
const ANIME_STATUS = { 1: 'Watching', 2: 'Completed', 3: 'On Hold', 4: 'Dropped', 6: 'Plan to Watch' };
const MANGA_STATUS = { 1: 'Reading', 2: 'Completed', 3: 'On Hold', 4: 'Dropped', 6: 'Plan to Read' };

export default {
  name: 'AnimePage',
  data() {
    return {
      username: 'euxinos',
      activeTab: 'anime',
      selectedStatus: 'all',
      animeList: [],
      mangaList: [],
      loading: true
    };
  },
  computed: {
    profileUrl() {
      return `https://myanimelist.net/profile/${this.username}`;
    },
    currentList() {
      return this.activeTab === 'anime' ? this.animeList : this.mangaList;
    },
    filteredList() {
      if (this.selectedStatus === 'all') return this.currentList;
      return this.currentList.filter(a => a.status === this.selectedStatus);
    },
    currentCategories() {
      const counts = {};
      for (const item of this.currentList) {
        counts[item.status] = (counts[item.status] || 0) + 1;
      }
      const statusMap = this.activeTab === 'anime' ? ANIME_STATUS : MANGA_STATUS;
      const cats = [{ key: 'all', label: 'All', count: this.currentList.length }];
      for (const [key, count] of Object.entries(counts)) {
        cats.push({ key: Number(key), label: statusMap[key] || 'Other', count });
      }
      return cats;
    },
    currentStats() {
      const list = this.currentList;
      if (!list.length) return [];
      const completed = list.filter(a => a.status === 2).length;
      const scores = list.filter(a => a.score > 0).map(a => a.score);
      const mean = scores.length ? (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(1) : '-';

      if (this.activeTab === 'anime') {
        const eps = list.reduce((sum, a) => sum + (a.episodes_watched || 0), 0);
        return [
          { label: 'Total', value: list.length },
          { label: 'Completed', value: completed },
          { label: 'Episodes', value: eps },
          { label: 'Mean Score', value: mean }
        ];
      }
      const chapters = list.reduce((sum, m) => sum + (m.chapters_read || 0), 0);
      return [
        { label: 'Total', value: list.length },
        { label: 'Completed', value: completed },
        { label: 'Chapters', value: chapters },
        { label: 'Mean Score', value: mean }
      ];
    }
  },
  watch: {
    activeTab() {
      this.selectedStatus = 'all';
    }
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      this.loading = true;
      try {
        // Try our Vercel serverless function first (production)
        const res = await fetch('/api/mal');
        if (res.ok) {
          const data = await res.json();
          this.animeList = data.anime || [];
          this.mangaList = data.manga || [];
        } else {
          await this.fetchViaProxy();
        }
      } catch (e) {
        await this.fetchViaProxy();
      }
      this.loading = false;
    },
    async fetchViaProxy() {
      // Local dev: uses vue.config.js devServer proxy to bypass CORS
      try {
        const [animeRes, mangaRes] = await Promise.allSettled([
          fetch('/mal-proxy/animelist'),
          fetch('/mal-proxy/mangalist')
        ]);
        if (animeRes.status === 'fulfilled' && animeRes.value.ok) {
          const data = await animeRes.value.json();
          this.animeList = data.map(a => ({
            mal_id: a.anime_id,
            title: a.anime_title,
            image: a.anime_image_path,
            url: `https://myanimelist.net/anime/${a.anime_id}`,
            score: a.score,
            status: a.status,
            episodes_watched: a.num_watched_episodes,
            total_episodes: a.anime_num_episodes,
            type: a.anime_media_type_string
          }));
        }
        if (mangaRes.status === 'fulfilled' && mangaRes.value.ok) {
          const data = await mangaRes.value.json();
          this.mangaList = data.map(m => ({
            mal_id: m.manga_id,
            title: m.manga_title,
            image: m.manga_image_path,
            url: `https://myanimelist.net/manga/${m.manga_id}`,
            score: m.score,
            status: m.status,
            chapters_read: m.num_read_chapters,
            total_chapters: m.manga_num_chapters,
            type: m.manga_media_type_string
          }));
        }
      } catch (e) {
        // Page renders with empty state + MAL link
      }
    },
    statusLabel(status) {
      const map = this.activeTab === 'anime' ? ANIME_STATUS : MANGA_STATUS;
      return map[status] || 'Unknown';
    },
    progressText(item) {
      if (this.activeTab === 'anime') {
        const w = item.episodes_watched || 0;
        const t = item.total_episodes || '?';
        return `${w}/${t} episodes`;
      }
      const r = item.chapters_read || 0;
      const t = item.total_chapters || '?';
      return `${r}/${t} chapters`;
    }
  }
};
</script>
