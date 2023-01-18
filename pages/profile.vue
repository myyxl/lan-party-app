<template>
  <main>
    <PageHeader text="Profil" />
    <ProfileInformation />
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['authenticated']
})
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>