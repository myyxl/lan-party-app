<template>
  <h3>{{ text }}</h3>
</template>

<script lang="ts">
export default {
  props: {
    text: String
  }
}
</script>

<style scoped>
h3 {
  text-align: center;
  margin: 0;
}
</style>