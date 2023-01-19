<template>
  <h1>LAN PARTY 2023</h1>
  <main>
    <article>
      <aside>
        <nav>
          <div><NuxtLink to="/">Startseite</NuxtLink></div>
          <div><NuxtLink to="/information/view">Informationen</NuxtLink></div>
          <div><NuxtLink to="/invoices/own">Meine Rechnungen</NuxtLink></div>
          <div><NuxtLink to="/shopping">Einkäufe</NuxtLink></div>
          <div><NuxtLink to="/profile">Profil</NuxtLink></div>
          <div v-if="isAdmin" class="admin-area"><NuxtLink to="/user">Benutzer</NuxtLink></div>
          <div v-if="isAdmin"><NuxtLink to="/invoices/all">Alle Rechnungen</NuxtLink></div>
          <div v-if="isAdmin"><NuxtLink to="/information/edit">LAN Daten</NuxtLink></div>
        </nav>
      </aside>
    </article>
    <article class="page">
      <NuxtPage />
    </article>
  </main>
</template>

<script setup>
import {jwtVerify} from "jose";
const auth = useCookie('auth').value || '';
const { payload } = await jwtVerify(auth, new TextEncoder().encode('secret'));
const isAdmin = payload.role === 'ADMIN';
</script>

<style scoped>
h1 {
  margin-top: 3%;
  text-align: center;
}
main {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 30px
}
article {
  height: 700px;
}
aside {
  height: 100%;
}
nav {
  height: 100%;
}
nav div {
  margin-top: 10%;
}
.page {
  width: 1000px;
  padding: 15px 60px 60px 60px;
  overflow-y: auto;
}
.admin-area {
  margin-top: 150%;
}
</style>