<template>
  <PageHeader text="Profil" />
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['authenticated']
})
</script>