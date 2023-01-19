<template>
  <main>
    <h1>LAN PARTY 2023</h1>
    <input v-model="username" type="text" placeholder="Benutzername" />
    <input v-model="password" type="password" placeholder="Passwort" />
    <button @click="login()">Login</button>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'empty',
})
const username = useState('username');
const password = useState('password');
async function login() {
  await $fetch('/api/auth/login', {
    method: 'POST',
    body: {
      username: username.value,
      password: password.value
    }
  });
  username.value = '';
  password.value = '';
  await navigateTo('/');
}
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}
h1 {
  margin-top: 10%;
}
input {
  margin: 0;
  width: 250px;
}
button {
  width: 100px;
  padding: 10px;
}
</style>
