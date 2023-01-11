<template>
  <div class="information-entry">
    <div>{{ name }}</div>
    <div>{{ value }}</div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    name: String,
    value: String
  }
}
</script>

<style scoped>
.information-entry {
  margin-top: 2%;
  display: flex;
  justify-content: space-around;
  width: 80%;
}
</style>