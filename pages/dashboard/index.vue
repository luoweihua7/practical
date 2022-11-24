<template>
  <div v-for="i in 50" :key="i">Dashboard Index Page</div>
</template>

<script lang="ts" setup>
definePageMeta({ layout: 'dashboard' });
</script>
