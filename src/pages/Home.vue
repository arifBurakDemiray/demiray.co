<template>
  <div class="flex flex-col" style="min-height: calc(100vh - 56px);">
    <!-- Hero -->
    <section class="flex-grow flex items-center justify-center px-6 py-8 relative">
      <div class="hero-glow"></div>

      <div class="max-w-2xl w-full flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10">
        <!-- Profile Image -->
        <div class="flex-shrink-0 hero-image-wrapper">
          <div class="hero-image-ring">
            <img
              class="rounded-full w-36 h-36 md:w-44 md:h-44 object-cover"
              src="../assets/me.png"
              alt="Arif Burak Demiray"
            >
          </div>
        </div>

        <!-- Text -->
        <div class="text-center md:text-left">
          <div class="hero-fade hero-fade--1">
            <p class="text-xs font-medium tracking-widest uppercase color-d-s mb-2">Software Engineer</p>
          </div>
          <div class="hero-fade hero-fade--2">
            <h1 class="font-bold text-2xl md:text-4xl color-d-f leading-tight">
              Arif Burak Demiray
            </h1>
          </div>
          <div class="hero-fade hero-fade--3">
            <div class="w-10 h-0.5 bg-two my-4 mx-auto md:mx-0 rounded-full"></div>
          </div>
          <div class="hero-fade hero-fade--4">
            <p class="color-d-f opacity-80 text-sm md:text-base leading-relaxed max-w-md">
              Software Engineer obsessed with <span class="font-semibold italic color-d-s">Single Responsibility</span>.
              Fast learner and clean code advocate based in Izmir, Turkey.
            </p>
          </div>
          <div class="hero-fade hero-fade--5 mt-4 flex flex-wrap gap-2 justify-center md:justify-start">
            <span
              v-for="tag in tags"
              :key="tag"
              class="text-xs px-2 py-0.5 rounded-full border border-color color-d-s opacity-70"
            >{{ tag }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="color-d-f text-center pb-4 pt-2">
      <Links
        div-class-name="h-8 flex flex-row justify-center gap-1"
        class-name="focus:outline-none color-d-f hover:hover-color p-2 transition-colors"
      />
      <div class="text-xs opacity-40 mt-2">&copy; 2026 Arif Burak Demiray</div>
    </footer>
  </div>
</template>

<script>
import Links from '../components/Links.vue';
import '../index.css';
export default {
  name: 'HomePage',
  components: {
    Links
  },
  data() {
    return {
      tags: ['Java', 'C#', 'Android', 'iOS', '.NET', 'Spring Boot', 'JavaScript', 'Docker', 'AWS']
    };
  }
};
</script>

<style scoped>
.hero-glow {
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(63, 175, 192, 0.08) 0%, transparent 70%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  animation: glowPulse 6s ease-in-out infinite;
}

@keyframes glowPulse {
  0%, 100% { opacity: 0.6; transform: translate(-50%, -50%) scale(1); }
  50% { opacity: 1; transform: translate(-50%, -50%) scale(1.15); }
}

.hero-image-wrapper {
  animation: fadeSlideUp 0.8s ease-out both;
}

.hero-image-ring {
  padding: 3px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--demiray-color-two), var(--demiray-color-three), var(--demiray-color-one));
  box-shadow: 0 0 30px rgba(63, 175, 192, 0.2), 0 0 60px rgba(63, 192, 145, 0.1);
}

.hero-fade {
  opacity: 0;
  animation: fadeSlideUp 0.6s ease-out forwards;
}
.hero-fade--1 { animation-delay: 0.2s; }
.hero-fade--2 { animation-delay: 0.35s; }
.hero-fade--3 { animation-delay: 0.5s; }
.hero-fade--4 { animation-delay: 0.6s; }
.hero-fade--5 { animation-delay: 0.75s; }

@keyframes fadeSlideUp {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
