<template>
  <div class="wrapper" v-if="invoices.length">
    <div class="header">Hier findest du deine offenen Rechnungen</div>
    <div class="invoices" v-for="invoice in invoices">
      <SmallInvoiceListItem :title=invoice.title :amount=invoice.amount />
    </div>
    <div class="show-more"><NuxtLink to="/invoices">Mehr anzeigen..</NuxtLink></div>
  </div>
</template>

<script setup lang="ts">
const { data: invoices } = await useAuthorizedFetch('/api/invoice/list')
</script>

<style scoped>
.wrapper {
  width: 100%;
}
.invoices {
  width: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.header {
  text-align: center;
  margin-top: 10%;
  margin-bottom: 3%;
}
.show-more {
  align-self: flex-start;
  margin-left: 5%;
  margin-top: -2%;
  text-decoration: underline;
}

.show-more a {
  color: white;
}
</style>