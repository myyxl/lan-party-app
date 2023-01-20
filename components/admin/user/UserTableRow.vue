<template>
  <tr>
    <td>{{ username }}</td>

    <td v-if="!isEditEnabled">{{ displayName }}</td>
    <td v-else><input v-model="displayNameInput"></td>

    <td v-if="!isEditEnabled">{{ role }}</td>
    <td v-else>
      <select v-model="roleInput">
        <option value="ADMIN" :selected="role === 'ADMIN'">Admin</option>
        <option value="SHOPPER" :selected="role === 'SHOPPER'">Einkäufer</option>
        <option value="USER" :selected="role === 'USER'">Benutzer</option>
      </select>
    </td>
    <td>
      <div class="actions" v-if="!isEditEnabled">
        <button @click="toggleEdit"><span class="material-symbols-outlined">edit</span></button>
        <button><span class="material-symbols-outlined">lock_reset</span></button>
        <button class="delete" @click="deleteUser"><span class="material-symbols-outlined">delete</span></button>
      </div>
      <div v-else>
        <button @click="saveUser">Speichern</button>
      </div>
    </td>
  </tr>
  <CreateUserModal />
</template>

<script setup lang="ts">
const props = defineProps<{
    username: string,
    displayName: string,
    role: string
}>()
const isEditEnabled = ref(false);
const displayNameInput = ref(props.displayName);
const roleInput = ref(props.role);

async function deleteUser() {
  await useAuthorizedFetch('/api/users', {
    method: 'DELETE',
    body: {
      username: props.username
    }
  })
  await refreshNuxtData()
}

function toggleEdit() {
  isEditEnabled.value = !isEditEnabled.value;
}

async function saveUser() {
  await useAuthorizedFetch('/api/users', {
    method: 'POST',
    body: {
      username: props.username,
      newDisplayName: displayNameInput.value,
      newRole: roleInput.value
    }
  })
  toggleEdit()
}

</script>

<style scoped>
button {
  width: auto;
  padding: 10px;
  margin: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.actions {
  display: flex;
}
.delete {
  background-color: #e53935;
}
input {
  width: 150px;
  margin: 0;
}
select {
  margin: 0;
}
</style>