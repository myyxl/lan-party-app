<template>
  <main>
    <article @click="$emit('add-object')">
      +
    </article>
  </main>
</template>


<style scoped>
article {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 60px;
  width: 60px;
  font-size: 1.5em;
  border-radius: 50%;
  z-index: 1000;
  margin: 0;
  padding: 0;
  cursor: pointer;
}
</style>