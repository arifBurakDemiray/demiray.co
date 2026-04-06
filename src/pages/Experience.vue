<template>
  <div class="color-d-f px-4 py-8 max-w-3xl mx-auto">
    <div class="exp-fade exp-fade--1">
      <h1 class="text-3xl md:text-4xl font-bold text-center mb-2">Experience</h1>
      <p class="text-center text-sm opacity-70 mb-10">My professional journey</p>
    </div>

    <!-- Timeline -->
    <div class="space-y-0">
      <div
        v-for="(job, i) in timeline"
        :key="job.role + job.company"
        class="flex gap-5 exp-timeline-item"
        :style="{ animationDelay: (0.2 + i * 0.12) + 's' }"
      >
        <!-- Line + Dot column -->
        <div class="flex flex-col items-center flex-shrink-0">
          <div
            class="w-3 h-3 rounded-full border-2 mt-1.5 flex-shrink-0 exp-dot"
            :class="i === 0 ? 'bg-two border-two' : 'border-color'"
            :style="{ animationDelay: (0.3 + i * 0.12) + 's' }"
          ></div>
          <div class="w-px flex-grow" :class="i < timeline.length - 1 ? 'bg-line' : ''"></div>
        </div>

        <!-- Content -->
        <div class="pb-10">
          <div class="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
            <h2 class="font-bold text-base md:text-lg">{{ job.role }}</h2>
            <span class="text-sm color-d-s">{{ job.company }}</span>
          </div>
          <p class="text-xs opacity-50 mb-2">{{ job.period }}</p>
          <p class="text-sm opacity-80 leading-relaxed">{{ job.description }}</p>
        </div>
      </div>
    </div>

    <!-- Education -->
    <div class="exp-section" style="animation-delay: 1s;">
      <h2 class="text-xl font-bold mt-4 mb-6">Education</h2>
      <div class="border border-color rounded-lg p-5 exp-card" style="animation-delay: 1.1s;">
        <h3 class="font-bold text-sm">BSc Computer Engineering</h3>
        <p class="text-sm color-d-s mt-1">Izmir Institute of Technology</p>
        <p class="text-xs opacity-50 mt-1">October 2018 - June 2022 &middot; GPA: 3.19 / 4.0</p>
      </div>
    </div>

    <!-- Skills -->
    <div class="exp-section" style="animation-delay: 1.2s;">
      <h2 class="text-xl font-bold mt-12 mb-6">Skills</h2>
      <div class="flex flex-wrap gap-2">
        <span
          v-for="(skill, i) in skills"
          :key="skill"
          class="text-xs px-3 py-1 rounded-full border border-color color-d-s exp-tag"
          :style="{ animationDelay: (1.3 + i * 0.03) + 's' }"
        >{{ skill }}</span>
      </div>
    </div>

    <!-- Languages -->
    <div class="exp-section" style="animation-delay: 1.6s;">
      <h2 class="text-xl font-bold mt-12 mb-6">Languages</h2>
      <div class="flex gap-4">
        <span
          v-for="lang in languages"
          :key="lang"
          class="text-sm opacity-80"
        >{{ lang }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExperiencePage',
  data() {
    return {
      timeline: [
        {
          role: 'SDK Engineer',
          company: 'Countly',
          period: 'Aug 2024 - Present',
          description: 'Leading maintenance and development of open-source SDKs for Android, Java, and Windows. Contributing to JavaScript, Flutter, iOS, .NET, React Native, and Unity SDKs. Took ownership of the Android SDK. Supporting clients like BMW and major Turkish banks.'
        },
        {
          role: 'Junior SDK Engineer',
          company: 'Countly',
          period: 'Sep 2023 - Aug 2024',
          description: 'Contributed to multiple SDKs across Android, Java, iOS, .NET, JavaScript, and Flutter. Supported documentation and engaged in multi-platform development and testing.'
        },
        {
          role: 'Founder Developer',
          company: 'Choicefy',
          period: 'Jan 2024 - Oct 2024',
          description: 'Founded a platform for pre-technical assessments. Built backend with Express.js, managed AWS deployments, MongoDB, and DevOps pipelines. Integrated Judge0 for real-time code compilation.'
        },
        {
          role: 'Lead Developer',
          company: 'DeltaSmart Technologies',
          period: 'Jul 2022 - Aug 2023',
          description: 'Managed DevOps, Scrum processes, and a team of 8. Designed backend applications with GoF/MVC patterns. Developed deployment pipelines with Python and Bash. Managed AWS accounts.'
        },
        {
          role: 'Backend Developer',
          company: 'DeltaSmart Technologies',
          period: 'Aug 2021 - Jul 2022',
          description: 'Developed Spring Boot, .NET Core, and .NET backends. Managed company-wide DevOps. Migrated from ASP.NET to .NET 5.'
        },
        {
          role: 'Backend Developer Intern',
          company: 'DeltaSmart Technologies',
          period: 'Jan 2021 - Aug 2021',
          description: 'Maintained Spring Boot and .NET backends. Used AWS EC2/S3, MariaDB, MySQL, MSSQL. Built a .NET Core project with MVC design.'
        }
      ],
      skills: [
        'Java', 'C#', 'Android', 'iOS', 'Spring Boot', '.NET', 'JavaScript', 'Express.js',
        'Flutter', 'React Native', 'Unity', 'Python', 'C++', 'Bash',
        'Docker', 'Kubernetes', 'AWS', 'MongoDB', 'MySQL', 'MSSQL',
        'Git', 'Linux', 'SOLID', 'MVC', 'Microservices',
        'Claude', 'ChatGPT', 'AI-Assisted Development'
      ],
      languages: ['English', 'Turkish']
    };
  }
};
</script>

<style scoped>
.bg-line {
  background-color: var(--demiray-color-two);
  opacity: 0.3;
}

/* Timeline items slide in from left */
.exp-timeline-item {
  opacity: 0;
  animation: slideInLeft 0.5s ease-out forwards;
}

/* Dot pop-in */
.exp-dot {
  transform: scale(0);
  animation: popIn 0.3s ease-out forwards;
}

/* Section headers fade up */
.exp-fade, .exp-section {
  opacity: 0;
  animation: fadeUp 0.5s ease-out forwards;
}
.exp-fade--1 { animation-delay: 0.05s; }

/* Card slide in */
.exp-card {
  opacity: 0;
  animation: fadeUp 0.4s ease-out forwards;
}

/* Skill tags pop in */
.exp-tag {
  opacity: 0;
  transform: scale(0.8);
  animation: tagPop 0.3s ease-out forwards;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes popIn {
  from { transform: scale(0); }
  50% { transform: scale(1.4); }
  to { transform: scale(1); }
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes tagPop {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
