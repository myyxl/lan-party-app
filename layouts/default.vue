<template>
  <main>
    <h1>LAN PARTY 2023</h1>
    <NuxtPage />
    <footer>
      <NuxtLink to="/information">
        <span class="material-symbols-outlined">info</span>
      </NuxtLink>
      <NuxtLink to="/invoices">
        <span class="material-symbols-outlined">receipt_long</span>
      </NuxtLink>
      <NuxtLink to="/">
        <span class="material-symbols-outlined">home</span>
      </NuxtLink>
      <NuxtLink to="/shopping">
        <span class="material-symbols-outlined">shopping_cart</span>
      </NuxtLink>
      <NuxtLink to="/profile">
        <span class="material-symbols-outlined">account_circle</span>
      </NuxtLink>
    </footer>
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0');
main {
  display: flex;
  flex-direction: column-reverse;
}
h1 {
  margin-top: 3%;
  text-align: center;
}
footer {
  position: fixed;
  width: 100%;
  top: auto;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  border-top: 2px solid;
}
footer span {
  font-size: 3em;
  padding: 5px;
}
</style>