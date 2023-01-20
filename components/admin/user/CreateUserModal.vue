<template>
<main>
  <dialog :open="showModal ? true : undefined">
    <article>
      <div class="page-header"><PageHeader text="Benutzer hinzufügen" /></div>
      <input v-model="username" placeholder="Benutzername"/>
      <input v-model="displayName" placeholder="Anzeigename"/>
      <input v-model="password" type="password" placeholder="Passwort"/>
      <select v-model="role">
        <option value="ADMIN">Admin</option>
        <option value="SHOPPER">Einkäufer</option>
        <option value="USER" selected>Benutzer</option>
      </select>
      <div style="display: flex; gap: 10px">
        <button @click="save">Speichern</button>
        <button @click="showModal = false">Abbrechen</button>
      </div>
    </article>
  </dialog>
</main>
</template>

<script setup lang="ts">
const showModal = useState('show-create-user-modal', () => false)

const username = ref('');
const displayName = ref('');
const password = ref('');
const role = ref('');

async function save() {
await useAuthorizedFetch('/api/users', {
  method: 'PUT',
  body: {
    username,
    displayName,
    password,
    role
  }
})
}
</script>

<style scoped>
article {
  padding: 20px;
  width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
input {
  width: 50%;
}
select {
  width: 50%;
}
.page-header {
  margin-bottom: 2%;
}
</style>