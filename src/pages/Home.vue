<template>
  <div className="bg-demiray h-screen flex w-full justify-center">
    <Links
      divClassName="w-30 h-8 absolute flex flex-row right-4 m-4"
      className="focus:outline-none color-d-f hover:hover-color p-2"
    />
    <div
      className="color-d-f justify-center text-center pt-12 ">
      <span className="font-bold text-4xl">Hi, I am Arif Burak Demiray...<br/><br/></span>
      <span className="text-1xl">I am a Software Engineer who is obsessed with '<span className="font-bold italic">Single Responsibility</span>'.
      I am located in Izmir, Turkey.<br/>I am a fast learner when it comes to a new tech or a topic. And, I can understand and solve the problem<br/>
      in a zeus way. I am currently working as a Lead Developer.
      </span>
      
    </div>
    <footer className="absolute color-d-f self-end pb-4">
      Copyright © Arif Burak DEMIRAY 2022
    </footer>
  </div>
</template>
<script>
import Links from "../components/Links.vue";
import "../index.css";
export default {
  name: "Home",
  components: {
    Links
  }
};
//TODO work on vue, work a litte, try
</script>
