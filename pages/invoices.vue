<template>
  <PageHeader text="Offene Rechnungen" />
  <div class="no-invoices" v-if="!invoices.length">Du hast noch keine offene Rechnungen</div>
  <div class="list" v-for="invoice in invoices">
    <InvoiceItem :title=invoice.title :created-by=invoice.created_by :amount=invoice.amount />
  </div>
  <DebtList v-if="invoices.length" />
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['authenticated']
})
const { data: invoices } = await useAuthorizedFetch('/api/invoice/list')
</script>

<style scoped>
.no-invoices {
  margin-top: 50%;
  font-size: 1.2em;
  margin-left: 5%;
  margin-right: 5%;
  text-align: center;
}
.list {
  width: 90%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
</style>