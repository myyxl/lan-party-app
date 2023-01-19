<template>
  <tr>
    <td v-if="!isEditEnabled">{{ username }}</td>
    <td v-else><input :value=props.username></td>

    <td v-if="!isEditEnabled">{{ displayName }}</td>
    <td v-else><input :value=props.displayName></td>

    <td v-if="!isEditEnabled">{{ role }}</td>
    <td v-else><input :value=props.role></td>
    <td>
      <div class="actions" v-if="!isEditEnabled">
        <button @click="toggleEdit"><span class="material-symbols-outlined">edit</span></button>
        <button class="delete" @click="deleteUser"><span class="material-symbols-outlined">delete</span></button>
      </div>
      <div v-else>
        <button @click="saveUser">Speichern</button>
      </div>
    </td>
  </tr>
</template>

<script setup lang="ts">
const props = defineProps<{
    username: string,
    displayName: string,
    role: string
}>()
const isEditEnabled = useState(`is-edit-enabled-${props.username}`, () => false);

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

function saveUser() {
  // TODO: Implement save request (API is missing)
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
</style>