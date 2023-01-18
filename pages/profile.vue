<template>
  <PageHeader text="Profil" />
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['authenticated']
})
async function logout() {
  const token = useCookie('auth');
  token.value = null;
  await navigateTo('/login');
}
</script>