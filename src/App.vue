<template>
  <div class="app">
    <canvas></canvas>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
.app {
  display: grid;
  height: 100vh;
  justify-items: center;
  align-items: center;
}

canvas {
  height: 500px;
  width: 100%;
}
</style>
