<template>
  <PageHeader text="Informationen" />
  <InformationEntry name="Datum" :value=info.date />
  <InformationEntry name="Ort" :value=info.city />
</template>

<script setup lang="ts">
const { data: info } = await useFetch('/api/lan/info');
</script>