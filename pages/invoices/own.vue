<template>
  <main>
    <PageHeader text="Meine Rechnungen" />
    <h5 v-if="!invoices.length">Du hast noch keine offene Rechnungen</h5>
    <div class="list">
      <InvoiceItem v-for="invoice in invoices" :title=invoice.title :created-by=invoice.created_by :amount=invoice.amount />
    </div>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['authenticated']
})
const { data: invoices } = await useAuthorizedFetch('/api/invoice/own')
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