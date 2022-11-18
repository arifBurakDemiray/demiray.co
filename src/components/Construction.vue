
<template>
  <div
    class="Construction"
    :className="className"
  >
    <h1>{{ msg }}</h1>
    <div class="fingerprint-spinner overflow-hidden p-2 w-32 h-32">
      <div class="spinner-ring" />
      <div class="spinner-ring" />
      <div class="spinner-ring" />
      <div class="spinner-ring" />
      <div class="spinner-ring" />
      <div class="spinner-ring" />
      <div class="spinner-ring" />
      <div class="spinner-ring" />
      <div class="spinner-ring" />
    </div>
  </div>
</template>
<!-- @click -->
<script>
export default {
  name: 'ConstructionPage',
  props: {
    msg: String,
    className: String
  }
};
</script>

<style scoped>
.fingerprint-spinner,
.fingerprint-spinner * {
  box-sizing: border-box;
}

.fingerprint-spinner .spinner-ring {
  position: absolute;
  border-radius: 75%;
  border: 2px solid transparent;
  animation: fingerprint-spinner-animation 2000ms cubic-bezier(0.99, -1.01, 0.99, 0.05) infinite
    forwards;
  margin: auto;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
}

.fingerprint-spinner .spinner-ring:nth-child(1) {
  height: calc(128px / 9 + 0 * 128px / 9);
  width: calc(128px / 9 + 0 * 128px / 9);
  border-top-color: #3fc091;
  animation-delay: calc(50ms * 1);
}

.fingerprint-spinner .spinner-ring:nth-child(2) {
  height: calc(128px / 9 + 1 * 128px / 9);
  width: calc(128px / 9 + 1 * 128px / 9);
  border-top-color: #3fafc0;
  animation-delay: calc(50ms * 2);
}

.fingerprint-spinner .spinner-ring:nth-child(3) {
  height: calc(128px / 9 + 2 * 128px / 9);
  width: calc(128px / 9 + 2 * 128px / 9);
  border-top-color: #3fc050;
  animation-delay: calc(50ms * 3);
}

.fingerprint-spinner .spinner-ring:nth-child(4) {
  height: calc(128px / 9 + 3 * 128px / 9);
  width: calc(128px / 9 + 3 * 128px / 9);
  border-top-color: #3fc091;
  animation-delay: calc(50ms * 4);
}

.fingerprint-spinner .spinner-ring:nth-child(5) {
  height: calc(128px / 9 + 4 * 128px / 9);
  width: calc(128px / 9 + 4 * 128px / 9);
  border-top-color: #3fafc0;
  animation-delay: calc(50ms * 5);
}

.fingerprint-spinner .spinner-ring:nth-child(6) {
  height: calc(128px / 9 + 5 * 128px / 9);
  width: calc(128px / 9 + 5 * 128px / 9);
  border-top-color: #3fc050;
  animation-delay: calc(50ms * 6);
}

.fingerprint-spinner .spinner-ring:nth-child(7) {
  height: calc(128px / 9 + 6 * 128px / 9);
  width: calc(128px / 9 + 6 * 128px / 9);
  border-top-color: #3fc091;
  animation-delay: calc(50ms * 7);
}

.fingerprint-spinner .spinner-ring:nth-child(8) {
  height: calc(128px / 9 + 7 * 128px / 9);
  width: calc(128px / 9 + 7 * 128px / 9);
  border-top-color: #3fafc0;
  animation-delay: calc(50ms * 8);
}

.fingerprint-spinner .spinner-ring:nth-child(9) {
  height: calc(128px / 9 + 8 * 128px / 9);
  width: calc(128px / 9 + 8 * 128px / 9);
  border-top-color: #3fc050;
  animation-delay: calc(50ms * 9);
}

@keyframes fingerprint-spinner-animation {
  100% {
    transform: rotate(3128deg);
  }
}
</style>
