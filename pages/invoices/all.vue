<template>
  <main>
    <PageHeader text="Alle Rechnungen" />
    <h5 v-if="!invoices.length">Es gibt noch keine Rechnungen</h5>
    <div class="list">
      <InvoiceItem v-for="invoice in invoices" :title=invoice.title :created-by=invoice.created_by :amount=invoice.amount />
    </div>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['authenticated', 'administrator']
})
const { data: invoices } = await useAuthorizedFetch('/api/invoice/all')
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
  justify-content: center;
  align-items: stretch;
  gap: 20px 20px;
  flex-wrap: wrap;
  flex-grow: 1;
}
</style>