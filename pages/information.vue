<template>
  <PageHeader text="Informationen" />
  <InformationEntry name="Datum" :value=info.date />
  <InformationEntry name="Ort" :value=info.city />
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['authenticated']
})
const { data: info } = await useAuthorizedFetch('/api/lan/info');
</script>