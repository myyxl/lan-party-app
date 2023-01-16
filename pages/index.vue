<template>
    <ProfileInformation />
    <SmallInvoiceList />
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['authenticated']
})
</script>