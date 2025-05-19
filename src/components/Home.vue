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

  <h2 class="parcours">{{ $t('home.myJourney') }}</h2>

  <div class="card-section">
    <FlipCard
        v-for="(card, index) in cards"
        :key="index"
        :title="card.title"
        :frontImage="card.frontImage"
        :link="card.link"
        :isFlipped="activeCard === index"
        @flip="flipCard(index)"
      >
      <template #back-component>
        <component :is="card.backComponent" />
      </template>
    </FlipCard>
  </div>

  <h2 class="parcours">{{ $t('home.miniProjects') }}</h2>

  <div class="mini-project">
    <div class="block-game">
        <v-tooltip
          :location="location"
          no-click-animation
        >

          <template v-slot:activator="{ props }">
            <v-icon v-bind="props" icon="mdi-information-symbol"></v-icon>
          </template>

          <div>
            <p>Évitez les bugs qui tombent en déplaçant le joueur à gauche ou à droite.</p>
            <p>Le jeu devient plus rapide avec le temps.</p>
            <p>Touchez un bug = Game Over !</p>
          </div>
        </v-tooltip>
      <span></span>
      <img src="/assets/images/miniProject/bugDodger.png" alt="bugDodger" />
      <RouterLink class="bugDodger" :to="{ name: 'bugDodger'}">bugDodger</RouterLink>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useI18n } from "vue-i18n";
import FlipCard from './FlipCard.vue';

import SkillsCard from './elementCards/SkillsCard.vue';
import TrainingsCard from './elementCards/TrainingsCard.vue'
import ExperiencesCard from './elementCards/ExperiencesCard.vue'
import HobbiesCard from './elementCards/HobbiesCard.vue'
import { RouterLink } from 'vue-router';
 
const { t } = useI18n();

const locationSide = ref('left')
const locationAlign = ref('center')

const location = computed(() => {
  return `${locationSide.value} ${locationAlign.value}`
})

const images = [
  '/assets/images/profile.png',
  '/assets/images/profile-1.jpg',
  '/assets/images/profile-2.jpg',
  '/assets/images/profile-3.jpg',
  '/assets/images/profile-4.jpeg'
];

const cards = [
  {
    title: 'home.cards.skills.title',
    frontImage: '/assets/images/competences.jpg',
    backComponent: SkillsCard,
    link: '/skills',
  },
  {
    title: 'home.cards.training.title',
    frontImage: '/assets/images/formation.jpg',
    backComponent: TrainingsCard,
    link: '/trainings',
  },
  {
    title: 'home.cards.experience.title',
    frontImage: '/assets/images/experiences.jpg',
    backComponent: ExperiencesCard,
    link: '/experiences',
  },
  {
    title: 'home.cards.hobbies.title',
    frontImage: '/assets/images/loisir.jpg',
    backComponent: HobbiesCard,
    link: '/hobbies',
  },
];

const activeCard = ref(null);

function flipCard(index) {
  activeCard.value = activeCard.value === index ? null : index;
}

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
