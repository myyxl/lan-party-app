<template>
  <div class="debt-item">
    <div class="label">{{ label }}</div>
    <div class="amount"> {{ amount }} €</div>
  </div>
</template>

<script lang="ts">
  export default {
      props: {
        label: String,
        amount: Number
      }
  }
</script>

<style scoped>
.debt-item {
  width: 80%;
  display: flex;
}
.label {
  margin-right: auto;
}
.amount {
  font-weight: bold;
  color: white;
}
</style>