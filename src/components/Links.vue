<template>
  <div class="Links" :className="divClassName">
    <a :href="linkGithub" :class="className"
      ><svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        data-icon="github"
        class="w-6 h-6 ml-auto"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 496 512"
        fill="currentColor"
      >
        <path :d="githubData"></path></svg
    ></a>
    <a :href="linkLinkedin" :class="className"
      ><svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        data-icon="linkedin-in"
        class="w-6 h-6 ml-auto"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        fill="currentColor"
      >
        <path :d="linkedinData"></path></svg
    ></a>
    <span @click="togglePopup" :class="className" class="hover:cursor-pointer">
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        data-icon="mail"
        class="w-6 h-6 ml-auto"
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
      >
        <path :d="mailData" /></svg
    ></span>
  </div>

  <Popup v-if="isOpen" :handleClick="togglePopup" />
</template>

<script>
import Icons from "../assets/Icons.vue";
import Popup from "./Popup.vue";
export default {
  name: "Links",
  data: function() {
    return {
      isOpen: false,
      githubData: Icons.githubData,
      linkedinData: Icons.linkedinData,
      mailData: Icons.mailData,
      linkGithub: "https://github.com/arifBurakDemiray",
      linkLinkedin: "http://www.linkedin.com/in/arifBurakDemiray"
    };
  },
  methods: {
    togglePopup() {
      this.isOpen = !this.isOpen;
    }
  },
  props: {
    className: String,
    divClassName: String
  },
  components: {
    Popup
  }
};
</script>
