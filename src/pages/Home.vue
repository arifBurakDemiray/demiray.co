<template>
  <div className="bg-demiray min-h-screen flex w-full justify-center">
    <div
      className="color-d-f text-center pt-12 "
    >
      <span className="font-bold text-4xl">Hi, I am Arif Burak Demiray...<br><br></span>
      <span className="text-1xl">I am a Software Engineer who is obsessed with '<span className="font-bold italic">Single Responsibility</span>'.
        I am located in Izmir, Turkey.<br>I am a fast learner when it comes to a new tech or a topic. And, I can understand and solve the problem<br>
        in a zeus way. I am currently working as a Lead Developer.
      </span>
      <img
        className="mx-auto pt-10"
        src="../assets/me.png"
      >
      <footer className="sticky top-[100vh] color-d-f self-end pb-4 ">
        <Links
          div-class-name="w-30 h-8 flex flex-row right-4 m-4 justify-center"
          class-name="focus:outline-none color-d-f hover:hover-color p-2"
        />
        <div>© 2023 Copyright: Arif Burak DEMIRAY </div>
      </footer>
    </div>
  </div>
</template>
<script>
import Links from '../components/Links.vue';
import '../index.css';
export default {
  name: 'HomePage',
  components: {
    Links
  }
};
</script>
