<template>
  <main>
    <PageHeader text="Offene Rechnungen" />
    <h5 v-if="!invoices.length">Du hast noch keine offene Rechnungen</h5>
    <div class="list" v-for="invoice in invoices">
      <InvoiceItem :title=invoice.title :created-by=invoice.created_by :amount=invoice.amount />
    </div>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['authenticated']
})
const { data: invoices } = await useAuthorizedFetch('/api/invoice/list')
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
h5 {
  margin-top: 100px;
  font-size: 1.2em;
  padding: 20px;
  text-align: center;
}
.list {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>