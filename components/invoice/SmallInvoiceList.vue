<template>
  <div class="header">Hier findest du deine offenen Rechnungen</div>
  <SmallInvoiceListItem title="Einkauf vom 05.01.2023" :amount="24.45" />
  <SmallInvoiceListItem title="Einkauf vom 06.01.2023" :amount="9.98" />
  <SmallInvoiceListItem title="Kinderstuhl" :amount="50" />
  <div class="show-more"><NuxtLink to="/invoices">Mehr anzeigen..</NuxtLink></div>
</template>

<style scoped>
.header {
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