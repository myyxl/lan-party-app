<template>
  <div class="login-page">
    <div class="header">LAN PARTY 2023</div>
    <input v-model="username" class="input-field" type="text" placeholder="Benutzername" />
    <input v-model="password" class="input-field" type="password" placeholder="Passwort" />
    <button class="login-button" @click="login()">Login</button>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'empty'
})
const username = useState('username');
const password = useState('password');
function login() {
  $fetch('/api/auth/login', {
    method: 'POST',
    body: {
      username: username.value,
      password: password.value
    }
  });
}
</script>

<style scoped>
.login-page {
  height: 100%;
  width: 100%;
  font-family: 'Quicksand', sans-serif;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.header {
  font-weight: bold;
  font-size: 2em;
  margin-top: 50%;
  margin-bottom: 10%;
}
.input-field {
  border-radius: 10px;
  height: 7%;
  width: 80%;
  background-color: #191919;
  border: 1px solid #6f7a83;
  margin-bottom: 3%;
  display: flex;
  align-items: center;
  color: white;
  text-align: center;
  font-size: 1.3em;
}
.input-field::placeholder {
  color: darkgray;
  font-family: 'Quicksand', sans-serif;
}
.login-button {
  margin-top: 2%;
  height: 6%;
  width: 30%;
  background-color: rgba(47, 52, 61, 0.85);
  border-radius: 10px;
  border: none;
  color: white;
  font-family: 'Quicksand', sans-serif;
  font-size: 1.1em;
}
</style>