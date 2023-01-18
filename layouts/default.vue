<template>
  <main>
    <h1>LAN PARTY 2023</h1>
    <NuxtPage />
    <footer>
      <NuxtLink to="/information" active-class="selected">
        <span class="material-symbols-outlined">info</span>
      </NuxtLink>
      <NuxtLink to="/invoices" active-class="selected">
        <span class="material-symbols-outlined">receipt_long</span>
      </NuxtLink>
      <NuxtLink to="/" active-class="selected">
        <span class="material-symbols-outlined">home</span>
      </NuxtLink>
      <NuxtLink to="/shopping" active-class="selected">
        <span class="material-symbols-outlined">shopping_cart</span>
      </NuxtLink>
      <NuxtLink to="/profile" active-class="selected">
        <span class="material-symbols-outlined">account_circle</span>
      </NuxtLink>
    </footer>
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0');
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
}
footer span {
  font-size: 3em;
  padding: 5px;
  color: var(--h5-color);
}
footer a:focus {
  background-color: transparent;
}
.selected {
  border-top: 2px solid var(--h5-color);
}
</style>