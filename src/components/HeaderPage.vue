<template>
    <div class="header">
        <a href="/">Retour</a>
        <h1>{{ $t(title) }}</h1>
        <div></div>
    </div>
</template>

<script setup>
    import { useI18n } from "vue-i18n";

  const { t } = useI18n();

  const props = defineProps({
    title: String,
  });
</script>

<style scoped>
</style>