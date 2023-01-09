<template>
  <div id="side-navigation" class="side-navigation">
    <span class="material-symbols-outlined" @click="closeNavigation()">close</span>
    <div class="navigation-item">
      <NuxtLink to="/" @click="closeNavigation()">Startseite</NuxtLink>
    </div>
    <div class="navigation-item">
      <NuxtLink to="/information" @click="closeNavigation()">Informationen</NuxtLink>
    </div>
    <div class="navigation-item">
      <NuxtLink to="/invoices" @click="closeNavigation()">Rechnungen</NuxtLink>
    </div>
    <div class="navigation-item">
      <NuxtLink to="/shopping" @click="closeNavigation()">Einkäufe</NuxtLink>
    </div>
    <div class="navigation-item">
      <NuxtLink to="/games" @click="closeNavigation()">Spiele</NuxtLink>
    </div>
    <div class="navigation-item settings">
      <NuxtLink to="/profile" @click="closeNavigation()">Profil</NuxtLink>
    </div>
    <div class="navigation-item logout">
      <NuxtLink to="/logout" @click="closeNavigation()">Logout</NuxtLink>
    </div>
  </div>
  <div class="menu-icon-container">
    <div class="header">LAN PARTY 2023</div>
    <span class="material-symbols-outlined" @click="openNavigation()">menu</span>
  </div>
  <div class="page">
    <NuxtPage />
  </div>
</template>

<script lang="ts">
export default {
  methods: {
    openNavigation() {
      const sidebar = document.getElementById("side-navigation");
      if(sidebar) sidebar.style.width = "100%";
    },
    closeNavigation() {
      const sidebar = document.getElementById("side-navigation");
      if(sidebar) sidebar.style.width = "0";
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0');
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500&display=swap');
.side-navigation {
  overflow-x: hidden;
  color: white;
  position: fixed;
  height: 100%;
  width: 0;
  background-color: #121212;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.5s;
}
.side-navigation span {
  font-size: 2.5em;
  align-self: flex-end;
  padding: 2vw;
}
.menu-icon-container {
  color: white;
  font-family: 'Quicksand', sans-serif;
  height: 8vh;
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: start;
  align-items: center;
  font-weight: bold;
}
.menu-icon-container span {
  margin-top: 0.5vh;
  font-size: 2.5em;
  margin-left: 3vw;
}
.navigation-item {
  margin-top: 3vh;
}
.navigation-item a {
  color: white;
  text-decoration: none;
  font-family: 'Quicksand', sans-serif;
  font-size: 1.5em;
}
.settings {
  margin-top: auto;
}
.logout {
  margin-bottom: 7vh;
}
.header {
  margin-left: 8vw;
  font-size: 1.8em;
}
.page {
  font-family: 'Quicksand', sans-serif;
  color: white;
  height: 88%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>