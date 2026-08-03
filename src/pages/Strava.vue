<template>
  <div class="color-d-f px-4 py-8 max-w-3xl mx-auto" style="min-height: calc(100vh - 56px);">
    <div class="strava-fade" style="animation-delay: 0.05s;">
      <h1 class="text-3xl md:text-4xl font-bold text-center mb-2">Sports</h1>
      <p class="text-center text-sm opacity-70 mb-10">Cycling and swimming, tracked on Strava</p>
    </div>

    <div class="border border-color rounded-lg p-6 mb-8 strava-fade" style="animation-delay: 0.2s;">
      <h2 class="text-lg font-bold mb-2">Live stats are no longer available</h2>
      <p class="text-sm opacity-70 leading-relaxed">
        Strava has moved its API behind a paid subscription, so the all-time totals and recent
        activities that used to appear on this page can no longer be fetched. Their public profile
        badges were retired in the same move. The profile itself is still open, so head over there
        for the real numbers.
      </p>
    </div>

    <div class="text-center strava-fade" style="animation-delay: 0.35s;">
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
  name: 'StravaPage'
};
</script>

<style scoped>
.strava-fade {
  opacity: 0;
  animation: fadeUp 0.5s ease-out forwards;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
