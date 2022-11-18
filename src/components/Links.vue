<template>
  <div class="Links" :className="divClassName">
    <a :href="linkGithub" :class="className" target="_blank"
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
    <a :href="linkLinkedin" :class="className" target="_blank"
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
    <a :href="linkMail" :class="className" target="_blank"
      ><svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        data-icon="mail"
        class="w-6 h-6 ml-auto"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path :d="mailData"></path></svg
    ></a>
    <a :href="linkStackOverflow" :class="className" target="_blank"
      ><svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        data-icon="stack-overflow"
        class="w-6 h-6 ml-auto"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path :d="stackOverflowData"></path></svg
    ></a>
    <a :href="linkMedium" :class="className" target="_blank"
      ><svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        data-icon="medium"
        class="w-6 h-6 ml-auto"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        fill="currentColor"
      >
        <path :d="mediumData"></path></svg
    ></a>
    <a :href="linkInstagram
    " :class="className" target="_blank"
      ><svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        data-icon="medium"
        class="w-6 h-6 ml-auto"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        fill="currentColor"
      >
        <path :d="instagramData"></path></svg
    ></a>
    <a :href="linkReddit
    " :class="className" target="_blank"
      ><svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        data-icon="reddit"
        class="w-6 h-6 ml-auto"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path :d="redditData"></path></svg
    ></a>
<!--     <span @click="togglePopup" :class="className" class="hover:cursor-pointer">
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
    ></span> -->
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
      stackOverflowData: Icons.stackOverflowData,
      mediumData: Icons.mediumData,
      redditData: Icons.redditData,
      instagramData: Icons.instagramData,
      linkGithub: "https://github.com/arifBurakDemiray",
      linkLinkedin: "http://www.linkedin.com/in/arifBurakDemiray",
      linkInstagram: "https://www.instagram.com/demirayarifburak",
      linkMail: "mailto:burakdemiray09@hotmail.com",
      linkMedium: "https://arifburakdemiray.medium.com/",
      linkStackOverflow: "https://stackoverflow.com/users/16263216/euxinos",
      linkReddit: "https://www.reddit.com/user/arbude"
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
