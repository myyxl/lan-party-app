<template>
  <tr>
    <td>{{ username }}</td>
    <td>{{ displayName }}</td>
    <td>{{ role }}</td>
    <td>
      <button>Bearbeiten</button>
      <button>Löschen</button>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    username: String,
    displayName: String,
    role: String
  }
}
</script>