<template>
  <div class="header">{{ text }}</div>
</template>

<script lang="ts">
export default {
  props: {
    text: String
  }
}
</script>

<style scoped>
.header {
  margin-top: 5%;
  margin-bottom: 5%;
  font-size: 1.5em;
  font-family: 'Quicksand', sans-serif;
}
</style>