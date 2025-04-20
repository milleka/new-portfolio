<template>
    <div 
      class="flip-card" 
      :class="{ visible }" 
      @click="handleClick"
      ref="cardRef"
    >
      <div class="flip-card-inner" :class="{ flipped: isFlipped }">
        <div class="flip-card-front">
          <img :src="frontImage" alt="front image" class="card-image" />
          <div class="title">
            <h2>{{ $t(title) }}</h2>
          </div>
        </div>
        <div class="flip-card-back">
          <p>{{ description }}</p>
          <button class="more-button" @click.stop="goToPage">
            voir plus
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  import { useRouter } from 'vue-router';
  import { useI18n } from 'vue-i18n';
  
  const props = defineProps({
    title: String,
    frontImage: String,
    description: String,
    link: String,
    isFlipped: Boolean
  });

  const emit = defineEmits(['flip']);
  
  const { t } = useI18n();
  const router = useRouter();
  
  const flipped = ref(false);
  const visible = ref(false);
  const cardRef = ref(null);

  function handleClick() {    
    emit('flip');
  }
  
//   function toggleFlip() {
//     flipped.value = !flipped.value;
//   }
  
  function goToPage() {
    router.push(props.link);
  }
  
  let observer;
  
  onMounted(() => {
    observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        visible.value = true;
      }
    });
    if (cardRef.value) {
      observer.observe(cardRef.value);
    }
  });
  
  onUnmounted(() => {
    if (observer && cardRef.value) {
      observer.unobserve(cardRef.value);
    }
  });
  </script>
  
  <style scoped lang="scss">
    @forward "../scss/components/flipCard"
  </style>
  