<template>
  <main>
    <PageHeader text="Informationen" />
    <InformationEntry name="Datum" :value=info.date />
    <InformationEntry name="Ort" :value=info.city />
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['authenticated']
})
const { data: info } = await useAuthorizedFetch('/api/lan/info');
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>