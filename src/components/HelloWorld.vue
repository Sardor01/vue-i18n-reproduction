<script setup lang="ts">
import { useNow, useDateFormat } from "@vueuse/core";

defineProps<{ msg: string }>();

const formatted = useDateFormat(useNow(), "YYYY-MM-DD HH:mm:ss");
</script>

<template>
  <h1>{{ msg }}</h1>
  <h2>{{ formatted }}</h2>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
