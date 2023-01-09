<template>
  <PageHeader text="Offene Rechnungen" />
  <div class="list">
    <InvoiceItem title="Einkauf vom 05.01.2023" created-by="Milosz" type="Einkauf" :amount="9.99" />
    <InvoiceItem title="Einkauf vom 06.01.2023" created-by="Milosz" type="Einkauf" :amount="24.85" />
    <InvoiceItem title="Kinderstuhl" created-by="David" :amount="50" />
    <InvoiceItem title="1. Rate" created-by="David" type="Miete" :amount="200" />
  </div>
  <DebtList />
</template>

<style scoped>
.list {
  width: 90%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
</style>