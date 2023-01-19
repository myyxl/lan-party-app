<template>
  <PageHeader text="LAN Informationen bearbeiten" />
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['authenticated', 'administrator']
})
</script>