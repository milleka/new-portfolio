<template>
    <HeaderPage :title="'home.cards.skills.title'"/>
    <div class="flex flex-col items-center justify-center min-h-screen">
      <img src="/assets/images/constructions.svg" alt="Construction" class="w-48 h-48 mb-4" />
      <p class="text-2xl font-bold">{{ displayedText }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import HeaderPage from './HeaderPage.vue'
  import { useI18n } from "vue-i18n";

  const { t } = useI18n();
  
  const fullText =  t('construction');
  const displayedText = ref('')
  let index = 0
  
  const typeWriter = () => {
    displayedText.value = fullText.slice(0, index)
    index++
  
    if (index > fullText.length) {
      setTimeout(() => {
        index = 0
        typeWriter()
      }, 1500)
    } else {
      setTimeout(typeWriter, 100)
    }
  }
  
  onMounted(() => {
    typeWriter()
  })
  </script>
  
<style lang="scss" scoped>
    @use '../scss/index' as *;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 90vh;
    padding: 2rem;

    img {
        width: 50vw;
    }
  }
  p {
    transition: all 0.3s ease;
    font-size: 2rem;
    height: 2rem;
    color: $primary;
    font-weight: 500;
  }
</style>
  