<template>
  <div class="color-d-f px-4 py-8 max-w-3xl mx-auto" style="min-height: calc(100vh - 56px);">
    <div class="strava-fade" style="animation-delay: 0.05s;">
      <h1 class="text-3xl md:text-4xl font-bold text-center mb-2">Sports</h1>
      <p class="text-center text-sm opacity-70 mb-10">Powered by Strava</p>
    </div>

    <!-- Loading -->
    <div v-if="loading" class="text-center py-16">
      <div class="inline-block w-8 h-8 border-2 border-color border-t-transparent rounded-full animate-spin"></div>
    </div>

    <template v-if="!loading && stats">
      <!-- All-Time Stats -->
      <div class="strava-fade" style="animation-delay: 0.15s;">
        <h2 class="text-lg font-bold mb-4">All Time</h2>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
        <div
          v-for="(stat, i) in allTimeCards"
          :key="stat.label"
          class="border border-color rounded-lg p-4 text-center strava-card"
          :style="{ animationDelay: (0.2 + i * 0.08) + 's' }"
        >
          <div class="text-2xl font-bold color-d-s">{{ stat.value }}</div>
          <div class="text-xs opacity-60 mt-1">{{ stat.label }}</div>
        </div>
      </div>

      <!-- This Year -->
      <div class="strava-fade" style="animation-delay: 0.55s;">
        <h2 class="text-lg font-bold mb-4">This Year</h2>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
        <div
          v-for="(stat, i) in ytdCards"
          :key="stat.label"
          class="border border-color rounded-lg p-4 text-center strava-card"
          :style="{ animationDelay: (0.6 + i * 0.08) + 's' }"
        >
          <div class="text-2xl font-bold color-d-s">{{ stat.value }}</div>
          <div class="text-xs opacity-60 mt-1">{{ stat.label }}</div>
        </div>
      </div>
    </template>

    <!-- Recent Activities -->
    <template v-if="!loading && activities.length">
      <div class="strava-fade" style="animation-delay: 0.85s;">
        <h2 class="text-lg font-bold mb-4">Recent Activities</h2>
      </div>
      <div class="space-y-3 mb-10">
        <a
          v-for="(activity, i) in activities"
          :key="activity.id"
          :href="'https://www.strava.com/activities/' + activity.id"
          target="_blank"
          class="block border border-color rounded-lg p-4 hover:hover-bg transition-all duration-300 group strava-card"
          :style="{ animationDelay: (0.9 + i * 0.08) + 's' }"
        >
          <div class="flex items-start justify-between mb-2">
            <div>
              <h3 class="font-bold text-sm group-hover:color-bg transition-colors">{{ activity.name }}</h3>
              <p class="text-xs opacity-50 group-hover:color-bg transition-colors">{{ formatDate(activity.start_date) }}</p>
            </div>
            <span class="text-xs px-2 py-0.5 rounded-full bg-two color-bg font-medium flex-shrink-0 ml-2">
              {{ activity.type }}
            </span>
          </div>
          <div class="flex flex-wrap gap-4 text-xs opacity-70 group-hover:color-bg transition-colors">
            <span>{{ formatDistance(activity.distance) }} km</span>
            <span>{{ formatTime(activity.moving_time) }}</span>
            <span v-if="activity.total_elevation_gain">{{ Math.round(activity.total_elevation_gain) }}m elev</span>
            <span v-if="activity.average_speed">{{ formatSpeed(activity.average_speed) }} km/h avg</span>
          </div>
        </a>
      </div>
    </template>

    <!-- Fallback embeds (shown when API unavailable or no data) -->
    <template v-if="!loading && (error || (!stats && !activities.length))">
      <div class="flex flex-col items-center gap-6 mb-10">
        <div class="strava-fade" style="animation-delay: 0.2s;">
          <iframe
            height="160"
            width="300"
            frameborder="0"
            allowtransparency="true"
            scrolling="no"
            src="https://www.strava.com/athletes/euxinos/badge"
            class="rounded-lg"
          ></iframe>
        </div>
        <div class="strava-fade" style="animation-delay: 0.35s;">
          <iframe
            height="160"
            width="300"
            frameborder="0"
            allowtransparency="true"
            scrolling="no"
            src="https://www.strava.com/athletes/euxinos/activity-summary/ebb882e621e5f92703c83b969902de62471d906a"
            class="rounded-lg"
          ></iframe>
        </div>
      </div>
    </template>

    <!-- Strava Link -->
    <div class="text-center strava-fade" style="animation-delay: 1.2s;">
      <a
        href="https://www.strava.com/athletes/euxinos"
        target="_blank"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-color color-d-s hover:hover-bg hover:color-bg text-sm transition-all"
      >
        View profile on Strava &rarr;
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StravaPage',
  data() {
    return {
      stats: null,
      activities: [],
      loading: true,
      error: false
    };
  },
  computed: {
    allTimeCards() {
      const r = this.stats?.all_ride_totals;
      const s = this.stats?.all_swim_totals;
      const cards = [];
      if (r && r.count > 0) {
        cards.push({ label: 'Rides', value: r.count });
        cards.push({ label: 'Ride Distance', value: this.formatDistance(r.distance) + ' km' });
        cards.push({ label: 'Elevation', value: this.formatElevation(r.elevation_gain) });
        cards.push({ label: 'Ride Time', value: this.formatHours(r.moving_time) });
      }
      if (s && s.count > 0) {
        cards.push({ label: 'Swims', value: s.count });
        cards.push({ label: 'Swim Distance', value: this.formatDistance(s.distance) + ' km' });
      }
      return cards;
    },
    ytdCards() {
      const r = this.stats?.ytd_ride_totals;
      const s = this.stats?.ytd_swim_totals;
      const cards = [];
      if (r && r.count > 0) {
        cards.push({ label: 'Rides', value: r.count });
        cards.push({ label: 'Distance', value: this.formatDistance(r.distance) + ' km' });
        cards.push({ label: 'Elevation', value: this.formatElevation(r.elevation_gain) });
      }
      if (s && s.count > 0) {
        cards.push({ label: 'Swims', value: s.count });
        cards.push({ label: 'Swim Distance', value: this.formatDistance(s.distance) + ' km' });
      }
      return cards;
    }
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      this.loading = true;
      this.error = false;
      try {
        const res = await fetch('/api/strava');
        if (!res.ok) throw new Error('API error');
        const data = await res.json();
        this.stats = data.stats;
        this.activities = data.activities || [];
      } catch (e) {
        this.error = true;
      }
      this.loading = false;
    },
    formatDistance(meters) {
      return (meters / 1000).toFixed(1);
    },
    formatElevation(meters) {
      return meters >= 1000
        ? (meters / 1000).toFixed(1) + ' km'
        : Math.round(meters) + ' m';
    },
    formatTime(seconds) {
      const h = Math.floor(seconds / 3600);
      const m = Math.floor((seconds % 3600) / 60);
      return h > 0 ? `${h}h ${m}m` : `${m}m`;
    },
    formatHours(seconds) {
      const h = Math.round(seconds / 3600);
      return h + 'h';
    },
    formatSpeed(mps) {
      return (mps * 3.6).toFixed(1);
    },
    formatDate(iso) {
      return new Date(iso).toLocaleDateString('en-GB', {
        day: 'numeric', month: 'short', year: 'numeric'
      });
    }
  }
};
</script>

<style scoped>
.strava-fade {
  opacity: 0;
  animation: fadeUp 0.5s ease-out forwards;
}

.strava-card {
  opacity: 0;
  animation: fadeUp 0.4s ease-out forwards;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
