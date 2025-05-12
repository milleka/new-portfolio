<template>
  <HeaderPage :title="'home.cards.skills.title'"/>
  <div class="skills-container">
    <div
      v-for="(skill, index) in animatedSkills"
      :key="skill.name"
      class="skill-card"
      :ref="el => el && skillRefs?.value?.splice(index, 1, el)"
    >
      <!-- Logo -->
       <div class="list-icon">
        <div v-if="skill.showLogo" v-for="icon in skill.logo" class="logo-container bounce-in">
          <img :src="icon" :alt="skill.name" class="logo" />
        </div>
       </div>

      <p>Mon savoir faire ( en %)</p>
      <!-- Barre de compétences -->
      <div v-if="skill.showBar" class="progress-bar-container">
        <div class="progress-bar-bg">
          <div
            class="progress-bar-fill"
            :style="{ width: skill.animatedPercentage + '%' }"
          ></div>
        </div>
        <span>{{ skill.animatedPercentage }}%</span>
      </div>

      <!-- Texte d'expérience -->
      <div v-if="skill.showText" class="experience-text" :class="skill.startBlock">
        {{ skill.experience }}
      </div>
    </div>
    <div ref="scrollAnchor"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick, computed } from 'vue';
  import HeaderPage from './HeaderPage.vue';
  import { useI18n } from "vue-i18n";

  const scrollAnchor = ref(null)
  const { t } = useI18n();

  const skills = computed(() => [
    {
      name: 'Drupal',
      logo: [
        '/assets/images/icon/drupal.png',
        '/assets/images/icon/twig.png',
        '/assets/images/icon/bootstrap.png'
      ],
      percentage: 90,
      experience: t('skillsPage.drupalExp'),
      startBlock: 'slide-left'
    },
    {
      name: 'Vue 3',
      logo: [
        '/assets/images/icon/vue.png',
        '/assets/images/icon/vuetify.png'
      ],
      percentage: 80,
      experience: t('skillsPage.vueExp'),
      startBlock: 'slide-right'
    },
    {
      name: 'Sass',
      logo: [
        '/assets/images/icon/css3.png',
        '/assets/images/icon/sass.png',
        '/assets/images/icon/html.png',
        '/assets/images/icon/js.png'
      ],
      percentage: 100,
      experience: t('skillsPage.baseExp'),
      startBlock: 'slide-left'
    },
    {
      name: "symfony",
      logo: [
        '/assets/images/icon/symfony.png',
      ],
      percentage: 60,
      experience: t('skillsPage.symfonyExp'),
      startBlock:"slide-right"
    },
    {
      name: 'Flutter',
      logo: [
        '/assets/images/icon/flutter.png'
      ],
      percentage: 50,
      experience: t('skillsPage.flutterExp'),
      startBlock: 'slide-left'
    },
    {
      name: 'Git & Jira',
      logo: [
        '/assets/images/icon/git.png',
        '/assets/images/icon/jira.png'
      ],
      percentage: 100,
      experience: t('skillsPage.otherExp'),
      startBlock: 'slide-right'
    }
  ])


const animatedSkills = ref([]);
const skillRefs = ref([])

onMounted(() => {
  skills.value.forEach((skill, index) => {
    setTimeout(() => {
      animatedSkills.value.push({
        ...skill,
        showLogo: false,
        showBar: false,
        showText: false,
        animatedPercentage: 0,
      })

      // Séquence des étapes
      setTimeout(async() => {
        animatedSkills.value[index].showLogo = true
        nextTick(() => {
          scrollToBottom()
        })

        setTimeout(() => {
          animatedSkills.value[index].showBar = true
          animatePercentage(index, skill.percentage)

          setTimeout(() => {
            animatedSkills.value[index].showText = true
          }, 1000) // Après la barre remplie
        }, 800) // Après le logo
      }, 500) // Petit délai après affichage du skill brut
    }, index * 2500) // Chaque compétence démarre avec 1.5s d'écart
  })
})

function animatePercentage(index, target) {
  let current = 0
  const interval = setInterval(() => {
    if (current >= target) {
      clearInterval(interval)
    } else {
      current += 1
      animatedSkills.value[index].animatedPercentage = current
    }
  }, 15) // vitesse d'animation
}

function scrollToBottom() {
  if (scrollAnchor.value) {
    scrollAnchor.value.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }
}
</script>

<style lang="scss" scoped>
    @forward "../scss/components/skillsPage.scss"
</style>
