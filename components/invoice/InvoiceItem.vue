<template>
  <article>
    <h5>{{ title }}</h5>
    <p>Erstellt von {{ createdBy }}</p>
    <p class="amount">{{ amount }} €</p>
  </article>
</template>

<script lang="ts">
export default {
  props: {
    title: String,
    createdBy: String,
    paidBy: String,
    amount: Number,
    type: String
  }
}
</script>

<style scoped>
article p {
  width: 100%;
}
article {
  padding: 15px;
  margin: 0;
  width: 250px;
  height: auto;
}
h5 {
  margin: 0;
}
p {
  margin: 0;
}
.amount {
  font-weight: bold;
  color: #68b668;
  text-align: right;
}
</style>