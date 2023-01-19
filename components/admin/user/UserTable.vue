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
</main>
</template>

<script setup lang="ts">
const { data: users } = useAuthorizedFetch('/api/users')
</script>

<style scoped>

</style>