<template>
  <div class="color-d-f px-4 py-8 max-w-3xl mx-auto" style="min-height: calc(100vh - 56px);">
    <h1 class="text-3xl md:text-4xl font-bold text-center mb-2">Anime & Manga</h1>
    <p class="text-center text-sm opacity-70 mb-10">
      Synced from
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
      >{{ tab }}</button>
    </div>

    <!-- Stats -->
    <div v-if="currentStats" class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
      <div
        v-for="stat in currentStatCards"
        :key="stat.label"
        class="border border-color rounded-lg p-4 text-center"
      >
        <div class="text-2xl font-bold color-d-s">{{ stat.value }}</div>
        <div class="text-xs opacity-60 mt-1">{{ stat.label }}</div>
      </div>
    </div>

    <!-- Loading -->
    <div v-if="loading" class="text-center py-16">
      <div class="inline-block w-8 h-8 border-2 border-color border-t-transparent rounded-full animate-spin"></div>
    </div>

    <!-- List Grid -->
    <div v-if="currentList.length" class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
      <a
        v-for="item in currentList"
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
          <span v-if="item.statusLabel" class="inline-block text-xs px-2 py-0.5 mt-1.5 rounded-full bg-two color-bg font-medium">
            {{ item.statusLabel }}
          </span>
          <div v-if="item.score" class="flex items-center gap-1.5 mt-1.5">
            <span
              v-for="star in 5"
              :key="star"
              class="text-xs"
              :class="star <= Math.round(item.score / 2) ? 'color-d-t' : 'opacity-30'"
            >&#9733;</span>
            <span class="text-xs opacity-50 group-hover:color-bg">{{ item.score }}/10</span>
          </div>
        </div>
      </a>
    </div>

    <!-- Empty state -->
    <div v-if="!loading && !currentList.length" class="text-center py-8">
      <p class="opacity-50 text-sm mb-2">Data is syncing from MyAnimeList. This can take a few hours for new accounts.</p>
    </div>

    <!-- MAL Link -->
    <div class="text-center" :class="{ 'pt-2': !currentList.length && !loading }">
      <a
        :href="'https://myanimelist.net/' + activeTab + 'list/' + username"
        target="_blank"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-color color-d-s hover:hover-bg hover:color-bg text-sm transition-all"
      >
        View full {{ activeTab }} list on MyAnimeList &rarr;
      </a>
    </div>
  </div>
</template>

<script>
const ANIME_STATUS = { 1: 'Watching', 2: 'Completed', 3: 'On Hold', 4: 'Dropped', 6: 'Plan to Watch' };
const MANGA_STATUS = { 1: 'Reading', 2: 'Completed', 3: 'On Hold', 4: 'Dropped', 6: 'Plan to Read' };
const API = 'https://api.jikan.moe/v4';

export default {
  name: 'AnimePage',
  data() {
    return {
      username: 'euxinos',
      activeTab: 'anime',
      animeList: [],
      mangaList: [],
      animeStats: null,
      mangaStats: null,
      loading: true
    };
  },
  computed: {
    profileUrl() {
      return `https://myanimelist.net/profile/${this.username}`;
    },
    currentStats() {
      return this.activeTab === 'anime' ? this.animeStats : this.mangaStats;
    },
    currentList() {
      return this.activeTab === 'anime' ? this.animeList : this.mangaList;
    },
    currentStatCards() {
      const s = this.currentStats;
      if (!s) return [];
      if (this.activeTab === 'anime') {
        return [
          { label: 'Total', value: s.total_entries },
          { label: 'Completed', value: s.completed },
          { label: 'Episodes', value: s.episodes_watched },
          { label: 'Mean Score', value: s.mean_score || '-' }
        ];
      }
      return [
        { label: 'Total', value: s.total_entries },
        { label: 'Completed', value: s.completed },
        { label: 'Chapters', value: s.chapters_read },
        { label: 'Mean Score', value: s.mean_score || '-' }
      ];
    }
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      this.loading = true;
      try {
        // 1. Fetch statistics (works for all accounts)
        const statsRes = await fetch(`${API}/users/${this.username}/statistics`);
        if (statsRes.ok) {
          const data = await statsRes.json();
          this.animeStats = data.data?.anime || null;
          this.mangaStats = data.data?.manga || null;
        }

        // 2. Try animelist endpoint first
        await this.delay(400);
        const animeRes = await fetch(`${API}/users/${this.username}/animelist?status=all`);
        if (animeRes.ok) {
          const data = await animeRes.json();
          this.animeList = this.mapListEntries(data.data, 'anime');
        } else {
          // 3. Fallback: use /history endpoint + fetch individual anime details
          await this.delay(400);
          this.animeList = await this.fetchFromHistory('anime');
        }

        // 4. Try mangalist endpoint
        await this.delay(400);
        const mangaRes = await fetch(`${API}/users/${this.username}/mangalist?status=all`);
        if (mangaRes.ok) {
          const data = await mangaRes.json();
          this.mangaList = this.mapListEntries(data.data, 'manga');
        } else {
          await this.delay(400);
          this.mangaList = await this.fetchFromHistory('manga');
        }
      } catch (e) {
        // Page still renders with stats and MAL link
      }
      this.loading = false;
    },

    async fetchFromHistory(type) {
      const histRes = await fetch(`${API}/users/${this.username}/history?type=${type}`);
      if (!histRes.ok) return [];

      const histData = await histRes.json();
      const entries = histData.data || [];

      // Deduplicate by mal_id
      const seen = new Set();
      const unique = entries.filter(e => {
        const id = e.entry?.mal_id;
        if (seen.has(id)) return false;
        seen.add(id);
        return true;
      });

      // Fetch details for each (with rate limiting)
      const results = [];
      for (const entry of unique) {
        await this.delay(400);
        try {
          const detailRes = await fetch(`${API}/${type}/${entry.entry.mal_id}`);
          if (detailRes.ok) {
            const detail = await detailRes.json();
            const d = detail.data;
            results.push({
              mal_id: d.mal_id,
              title: d.title,
              image: d.images?.jpg?.image_url,
              url: d.url,
              score: d.score,
              statusLabel: null
            });
          }
        } catch (e) {
          // Skip failed individual fetches
          results.push({
            mal_id: entry.entry.mal_id,
            title: entry.entry.name,
            image: null,
            url: entry.entry.url,
            score: null,
            statusLabel: null
          });
        }
      }
      return results;
    },

    mapListEntries(entries, type) {
      const statusMap = type === 'anime' ? ANIME_STATUS : MANGA_STATUS;
      return (entries || []).map(entry => {
        const item = entry[type] || entry.entry || {};
        return {
          mal_id: item.mal_id,
          title: item.title || 'Unknown',
          image: item.images?.jpg?.image_url,
          url: item.url || '#',
          score: entry.score,
          statusLabel: statusMap[entry.watching_status || entry.reading_status || entry.status] || null
        };
      });
    },

    delay(ms) {
      return new Promise(r => setTimeout(r, ms));
    }
  }
};
</script>
