<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import { useTranslations } from "./composables/useTranslations";

const { t } = useTranslations();
</script>

<template>
  <HelloWorld :msg="t('helloMsg')" />
</template>
