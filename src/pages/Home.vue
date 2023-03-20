<template>
  <div className="bg-demiray min-h-screen flex w-full justify-center">
    <div
      className="color-d-f text-center pt-12"
    >
      <div class="typingEffect__line1">
        <span className="font-bold text-4xl">Hi, I am Arif Burak Demiray...<br><br></span>
      </div>
      
      <div class="typingEffect__line2">
        <span className="text-1xl">I am a Software Engineer who is obsessed with '<span className="font-bold italic">Single Responsibility</span>'.
        I am located in Izmir, Turkey.
        </span>
      </div>
      <div class="typingEffect__line3">I am a fast learner when it comes to a new tech or a topic. And, I can understand and solve the problem</div>
      <div class="typingEffect__line4">in a zeus way. I am currently working as a Lead Developer.</div>

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
<style>

.typingEffect__line1{
  width: 0;
    overflow: hidden; 
    white-space: nowrap; 
  animation: typing 1.5s steps(30) forwards, blink 1s 3;
}

.typingEffect__line2 {
  width: 0;
  overflow: hidden; 
  white-space: nowrap; 
  animation: typing 1.5s steps(50) 2s forwards, blink 1s 3s 3;
}

.typingEffect__line3 {
  width: 0;
  overflow: hidden; 
  white-space: nowrap; 
  animation: typing 2s steps(60) 4s forwards, blink 3s 5s 3;
}

.typingEffect__line4 {
  width: 0;
  overflow: hidden; 
  white-space: nowrap; 
  animation: typing 1.5s steps(40) 6s forwards, blink 6s 7s 3;
}

/* The typing animation */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink {
  0%, 45% {
    border-color: transparent;
  }
  50%, 100% {
    border-color: white;
  }
}
</style>
