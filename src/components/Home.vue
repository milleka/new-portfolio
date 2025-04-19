<template>

  <div class="welcome">
    <div class="filter"></div>
    <h1>{{ $t('home.title') }}</h1>
  </div>

  <div class="presentation">
    <div class="profile-container">
      <transition name="fade">
        <img
          :src="images[currentImageIndex]"
          alt="profile"
          :key="currentImageIndex"
          class="profile-image"
        />
      </transition>
    </div>
    <div class="text">
      <div class="history">
        <p>{{ $t('home.presentation.history.text1') }}</p>
        <p>{{ $t('home.presentation.history.text2') }}</p>
      </div>
      <div class="passion">
        <p>{{ $t('home.presentation.passion.text1') }}</p>
        <p>{{ $t('home.presentation.passion.text2') }}</p>
        <p>{{ $t('home.presentation.passion.text3') }}</p>
        <p>{{ $t('home.presentation.passion.text4') }}</p>
      </div>
    </div>
  </div>

</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const images = [
  '/assets/images/profile.png',
  '/assets/images/profile-1.jpg',
  '/assets/images/profile-2.jpg',
  '/assets/images/profile-3.jpg',
  '/assets/images/profile-4.jpeg'
];

const currentImageIndex = ref(0);
let intervalId = null;

onMounted(() => {
  intervalId = setInterval(() => {
    currentImageIndex.value = (currentImageIndex.value + 1) % images.length;
  }, 2000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});

</script>

<style lang="scss" scoped>
  @forward "../scss/components/homepage"
</style>
