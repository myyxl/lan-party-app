<template>
  <DebtItem label="Milosz" :amount="34.84" />
  <DebtItem label="David" :amount="50" />
  <div class="divider" />
  <DebtItem label="Insgesamt" :amount="84.84" />
</template>

<style scoped>
  .divider {
    height: 1px;
    border-bottom: 1px solid white;
    width: 80%;
  }
</style>