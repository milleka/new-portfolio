<template>
  <BaseHeader v-if="!hideLayout"/>
  <BaseContainer/>
  <BaseFooter v-if="!hideLayout"/>
</template>

<script setup>
  import { computed } from 'vue'
  import BaseHeader from './components/layouts/BaseHeader.vue'
  import BaseContainer from './components/layouts/BaseContainer.vue';
  import BaseFooter from './components/layouts/BaseFooter.vue'
  import { useRoute } from 'vue-router';

  const route = useRoute();
  const hideLayout = computed(() => route.path === '/bugDodger')
  

</script>
