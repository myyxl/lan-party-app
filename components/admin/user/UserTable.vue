<template>
<main>
  <table>
    <thead>
    <tr>
      <th scope="col">Benutzername</th>
      <th scope="col">Anzeigename</th>
      <th scope="col">Rolle</th>
      <th scope="col">Aktion</th>
    </tr>
    </thead>
    <tbody>
      <UserTableRow v-for="user in users" :username=user.username :display-name=user.display_name :role=user.role />
    </tbody>
  </table>
  <button @click="showModal = true">Hinzufügen</button>
</main>
</template>

<script setup lang="ts">
const showModal = useState('show-create-user-modal', () => false)
const { data: users } = await useAuthorizedFetch('/api/users')
</script>

<style scoped>
table {
  margin: 0;
}
button {
  padding: 10px;
  margin: 0;
  width: auto;
  align-self: flex-end;
}
</style>