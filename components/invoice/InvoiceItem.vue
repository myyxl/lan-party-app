<template>
  <div class="box">
    <div class="title">{{ title }}</div>
    <div class="type">{{ type }}</div>
    <div class="created-by">Erstellt von {{ createdBy }}</div>
    <div class="amount">{{ amount }} €</div>
  </div>
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
.box {
  border-radius: 10px;
  width: 90%;
  background-color: #191919;
  box-shadow: 0 0 2px #6f7a83;
  display: flex;
  flex-direction: column;
}
.title {
  padding: 2%;
  width: 96%;
  border-bottom: 1px solid #404040;
  align-self: flex-start;
}
.type {
  padding-top: 2%;
  padding-left: 2%;
}
.created-by {
  padding-left: 2%;
}
.amount {
  padding: 2%;
  align-self: flex-end;
  margin-top: auto;
  font-weight: bold;
  color: #68b668;
}

</style>