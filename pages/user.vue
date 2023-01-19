<template>
  <main>
    <PageHeader text="Benutzer" />
    <UserTable />
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['authenticated', 'administrator']
})
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>