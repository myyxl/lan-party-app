<template>
  <div class="box">
    <div class="title">{{ title }}</div>
    <div class="amount">{{ amount }} €</div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: String,
    amount: Number
  }
}
</script>

<style scoped>
.box {
  border-radius: 10px;
  height: 7%;
  width: 90%;
  background-color: #191919;
  box-shadow: 0 0 2px #6f7a83;
  margin-bottom: 3%;
  display: flex;
  align-items: center;
}
.amount {
  margin-left: auto;
  margin-right: 2%;
  font-weight: bold;
  color: #68b668;
}
.title {
  margin-left: 2%;
}
</style>