<template>
  <div className="bg-demiray h-screen flex w-screen justify-center">
    <div className="color-d-f justify-center text-center pt-12 text-2xl font-bold">
      <Construction msg="This site is under construction" />
    </div>
    <footer className="absolute color-d-f self-end pb-4">
      Copyright © Arif Burak DEMIRAY 2021
    </footer>
  </div>
</template>
<script>
import Construction from "./components/Construction.vue";

export default {
  name: "App",
  components: {
    Construction
  }
};
</script>
