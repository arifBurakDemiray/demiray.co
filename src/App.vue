<template>
  <div className="bg-demiray h-screen flex w-screen justify-center">
    <Links divClassName="absolute flex flex-row top-2 right-4 h-8 m-4" className="p-2" />
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
import Construction from "./components/Construction.vue";
import Links from "./components/Links.vue";

export default {
  name: "App",
  components: {
    Construction,
    Links
  }
};
</script>
