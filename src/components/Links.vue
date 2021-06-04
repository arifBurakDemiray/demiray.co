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
        fill="#2ad5d4"
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
        fill="#2ad5d4"
      >
        <path :d="linkedinData"></path></svg
    ></a>
  </div>
</template>

<script>
import Icons from "../assets/Icons.vue";
export default {
  name: "Links",
  data: function() {
    return {
      githubData: Icons.githubData,
      linkedinData: Icons.linkedinData,
      linkGithub: "https://github.com/arifBurakDemiray",
      linkLinkedin: "http://www.linkedin.com/in/arifBurakDemiray"
    };
  },
  props: {
    className: String,
    divClassName: String
  }
};
</script>
