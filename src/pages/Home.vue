<template>
  <div className="bg-demiray h-screen flex w-full justify-center">
    <Links
      divClassName="w-30 h-8 absolute flex flex-row right-4 m-4"
      className="focus:outline-none color-d-f hover:hover-color p-2"
    />
    <Construction
      className="color-d-f justify-center text-center pt-12 text-2xl font-bold"
      msg="Website Under Construction"
    />
    <footer className="absolute color-d-f self-end pb-4">
      Copyright © Arif Burak DEMIRAY 2021
    </footer>
  </div>
</template>
<script>
import Construction from "../components/Construction.vue";
import Links from "../components/Links.vue";
import "../index.css";
export default {
  name: "Home",
  components: {
    Construction,
    Links
  }
};
//TODO work on vue, work a litte, try
</script>
