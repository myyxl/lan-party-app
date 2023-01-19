<template>
  <PageHeader text="Benutzer" />

</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['authenticated', 'administrator']
})
</script>