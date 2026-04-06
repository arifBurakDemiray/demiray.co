<template>
  <div class="color-d-f px-4 py-8 max-w-xl mx-auto" style="min-height: calc(100vh - 56px);">
    <div class="contact-fade" style="animation-delay: 0.05s;">
      <h1 class="text-3xl md:text-4xl font-bold text-center mb-2">Contact</h1>
      <p class="text-center text-sm opacity-70 mb-10">Get in touch</p>
    </div>

    <!-- Quick Links -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
      <a
        v-for="(link, i) in quickLinks"
        :key="link.label"
        :href="link.url"
        target="_blank"
        class="border border-color rounded-lg p-4 hover:hover-bg transition-all duration-300 group flex items-center gap-3 contact-card"
        :style="{ animationDelay: (0.15 + i * 0.08) + 's' }"
      >
        <span class="text-lg">{{ link.icon }}</span>
        <div>
          <h3 class="font-bold text-sm group-hover:color-bg transition-colors">{{ link.label }}</h3>
          <p class="text-xs opacity-50 group-hover:color-bg transition-colors">{{ link.sub }}</p>
        </div>
      </a>
    </div>

    <!-- Contact Form -->
    <div class="contact-fade" style="animation-delay: 0.5s;">
      <h2 class="text-lg font-bold mb-4">Send a message</h2>
    </div>

    <form
      class="space-y-4 contact-fade"
      style="animation-delay: 0.6s;"
      @submit.prevent="handleSubmit"
    >
      <input
        v-model="form.name"
        type="text"
        placeholder="Name"
        required
        class="w-full px-4 py-2.5 rounded-lg bg-transparent border border-color color-d-f placeholder-current opacity-70 focus:opacity-100 focus:border-two outline-none transition-all text-sm"
      >
      <input
        v-model="form.email"
        type="email"
        placeholder="Email"
        required
        class="w-full px-4 py-2.5 rounded-lg bg-transparent border border-color color-d-f placeholder-current opacity-70 focus:opacity-100 focus:border-two outline-none transition-all text-sm"
      >
      <textarea
        v-model="form.message"
        rows="5"
        placeholder="Message"
        required
        class="w-full px-4 py-2.5 rounded-lg bg-transparent border border-color color-d-f placeholder-current opacity-70 focus:opacity-100 focus:border-two outline-none transition-all text-sm resize-none"
      ></textarea>
      <button
        type="submit"
        class="w-full py-2.5 rounded-lg bg-two color-bg font-medium text-sm hover:opacity-90 transition-opacity"
      >
        Send Message
      </button>
      <p v-if="sent" class="text-center text-sm color-d-t">Message prepared! Your email client should open shortly.</p>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      form: { name: '', email: '', message: '' },
      sent: false,
      quickLinks: [
        { icon: '//>', label: 'GitHub', sub: 'arifBurakDemiray', url: 'https://github.com/arifBurakDemiray' },
        { icon: 'in', label: 'LinkedIn', sub: 'arifBurakDemiray', url: 'https://www.linkedin.com/in/arifBurakDemiray' },
        { icon: '@', label: 'Email', sub: 'burakdemiray09@hotmail.com', url: 'mailto:burakdemiray09@hotmail.com' },
        { icon: 'SO', label: 'Stack Overflow', sub: 'euxinos', url: 'https://stackoverflow.com/users/16263216/euxinos' }
      ]
    };
  },
  methods: {
    handleSubmit() {
      const subject = encodeURIComponent(`Message from ${this.form.name}`);
      const body = encodeURIComponent(
        `From: ${this.form.name} (${this.form.email})\n\n${this.form.message}`
      );
      window.open(`mailto:burakdemiray09@hotmail.com?subject=${subject}&body=${body}`);
      this.sent = true;
    }
  }
};
</script>

<style scoped>
.contact-fade {
  opacity: 0;
  animation: fadeUp 0.5s ease-out forwards;
}

.contact-card {
  opacity: 0;
  animation: fadeUp 0.4s ease-out forwards;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
