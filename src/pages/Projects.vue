<template>
  <div class="color-d-f px-4 py-8 max-w-3xl mx-auto">
    <div class="proj-fade" style="animation-delay: 0.05s;">
      <h1 class="text-3xl md:text-4xl font-bold text-center mb-2">Projects</h1>
      <p class="text-center text-sm opacity-70 mb-10">Things I've built</p>
    </div>

    <!-- Featured Projects -->
    <div class="space-y-4 mb-12">
      <div
        v-for="(project, i) in featured"
        :key="project.title"
        class="border border-color rounded-lg p-5 hover:hover-bg transition-all duration-300 group proj-card"
        :style="{ animationDelay: (0.15 + i * 0.1) + 's' }"
      >
        <div class="flex items-start justify-between mb-2">
          <h2 class="font-bold text-base md:text-lg group-hover:color-bg transition-colors">{{ project.title }}</h2>
          <a
            v-if="project.url"
            :href="project.url"
            target="_blank"
            class="text-xs color-d-s hover:hover-color transition-colors flex-shrink-0 ml-3"
          >View &rarr;</a>
        </div>
        <p class="text-sm opacity-80 leading-relaxed mb-3 group-hover:color-bg transition-colors">{{ project.description }}</p>
        <div class="flex flex-wrap gap-1.5">
          <span
            v-for="tech in project.tech"
            :key="tech"
            class="text-xs px-2 py-0.5 rounded-full border border-color color-d-s opacity-70 group-hover:color-bg group-hover:border-current transition-colors"
          >{{ tech }}</span>
        </div>
      </div>
    </div>

    <!-- GitHub Repos -->
    <div class="proj-fade" style="animation-delay: 0.6s;">
      <h2 class="text-xl font-bold mb-6">Open Source</h2>
    </div>

    <div v-if="loadingRepos" class="text-center py-8">
      <div class="inline-block w-6 h-6 border-2 border-color border-t-transparent rounded-full animate-spin"></div>
    </div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
      <a
        v-for="(repo, i) in repos"
        :key="repo.name"
        :href="repo.url"
        target="_blank"
        class="border border-color rounded-lg p-4 hover:hover-bg transition-all duration-300 group proj-card"
        :style="{ animationDelay: (0.7 + i * 0.06) + 's' }"
      >
        <h3 class="font-bold text-sm group-hover:color-bg transition-colors truncate">{{ repo.name }}</h3>
        <p v-if="repo.description" class="text-xs opacity-60 mt-1 group-hover:color-bg transition-colors line-clamp">
          {{ repo.description }}
        </p>
        <div class="flex items-center gap-3 mt-2 text-xs opacity-50 group-hover:color-bg transition-colors">
          <span v-if="repo.language">{{ repo.language }}</span>
          <span v-if="repo.stars">&#9733; {{ repo.stars }}</span>
          <span v-if="repo.forks">&#9413; {{ repo.forks }}</span>
        </div>
      </a>
    </div>

    <div class="text-center proj-fade" style="animation-delay: 1.2s;">
      <a
        href="https://github.com/arifBurakDemiray?tab=repositories"
        target="_blank"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-color color-d-s hover:hover-bg hover:color-bg text-sm transition-all"
      >
        View all repositories on GitHub &rarr;
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsPage',
  data() {
    return {
      featured: [
        {
          title: 'Countly SDKs (Open Source)',
          description: 'Maintaining and developing analytics SDKs used by companies like BMW and major banks. Took ownership of the Android SDK, one of the most widely used products at Countly.',
          tech: ['Android', 'Java', 'iOS', 'JavaScript', '.NET', 'Flutter', 'React Native', 'Unity'],
          url: 'https://github.com/Countly'
        },
        {
          title: 'Choicefy',
          description: 'Founded a platform for pre-technical assessments to accelerate hiring. Designed modular backend supporting both monolith and microservice styles. Integrated Judge0 for real-time code compilation.',
          tech: ['Express.js', 'MongoDB', 'AWS', 'Judge0', 'AI'],
          url: null
        },
        {
          title: 'Rodones Mapping Project',
          description: 'Reconstructing large areas with few resources using computer vision. Uses Structure From Motion and Multi-View Stereo algorithms. Includes a web-based 3D viewer with Three.js and WebGL.',
          tech: ['Computer Vision', 'Three.js', 'WebGL', 'Python'],
          url: 'https://rodones.vercel.app/'
        },
        {
          title: 'FACoin',
          description: 'A cryptocurrency exchange application built with various Gang of Four design patterns as a showcase of object-oriented design.',
          tech: ['Java', 'GoF Patterns'],
          url: 'https://github.com/arifBurakDemiray/FACoin'
        },
        {
          title: 'Demiray.Core.Pagination',
          description: 'A pagination library for all versions of .NET, published as a reusable NuGet package.',
          tech: ['.NET', 'NuGet'],
          url: 'https://github.com/arifBurakDemiray/Demiray.Core.Pagination'
        }
      ],
      repos: [],
      loadingRepos: true
    };
  },
  mounted() {
    this.fetchRepos();
  },
  methods: {
    async fetchRepos() {
      this.loadingRepos = true;
      try {
        const res = await fetch(
          'https://api.github.com/users/arifBurakDemiray/repos?sort=updated&per_page=8'
        );
        if (res.ok) {
          const data = await res.json();
          this.repos = data
            .filter(r => !r.fork)
            .slice(0, 6)
            .map(r => ({
              name: r.name,
              description: r.description,
              url: r.html_url,
              language: r.language,
              stars: r.stargazers_count,
              forks: r.forks_count
            }));
        }
      } catch (e) {
        // Repos section simply won't show
      }
      this.loadingRepos = false;
    }
  }
};
</script>

<style scoped>
.proj-fade {
  opacity: 0;
  animation: fadeUp 0.5s ease-out forwards;
}

.proj-card {
  opacity: 0;
  animation: fadeUp 0.4s ease-out forwards;
}

.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
