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
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';
  import HeaderPage from './HeaderPage.vue'

  const skills = ref([
    {
      name: 'Drupal',
      logo: [
        '/assets/images/icon/drupal.png',
        '/assets/images/icon/twig.png',
        '/assets/images/icon/bootstrap.png'
      ],
      percentage: 90,
      experience: "Utilisé depuis 6 ans sur des projets pour des sociétés scientifiques ainsi que pour la réalisation de projets destinés à des congrès scientifiques.",
      startBlock: 'slide-left'
    },
    {
      name: 'Vue 3',
      logo: [
        '/assets/images/icon/vue.png',
        '/assets/images/icon/vuetify.png'
      ],
      percentage: 80,
      experience: "Utilisé depuis 3 ans au sein du pôle registration de CYIM, avec l'utilisation de requêtes, de mutations et de diverses librairies.",
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
      experience: "Utilisé depuis 8 ans sur différents projets personnels et professionnels, au cours de mes périodes de formation, de stages et d'emplois.",
      startBlock: 'slide-left'
    },
    {
      name: 'Flutter',
      logo: [
        '/assets/images/icon/flutter.png'
      ],
      percentage: 50,
      experience: "Utilisé depuis 1 an dans un projet de registration pour développer une application Flutter Android sur tablette, gérée via un Raspberry Pi, permettant l'impression de badges après le scan d'un QR code sur la machine.",
      startBlock: 'slide-right'
    },
    {
      name: 'Git & Jira',
      logo: [
        '/assets/images/icon/git.png',
        '/assets/images/icon/jira.png'
      ],
      percentage: 100,
      experience: "Utilisés depuis 8 ans sur divers projets personnels et professionnels, au cours de mes périodes de formation, de stages et d'emplois.",
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
        await nextTick()
        scrollToSkill(index)

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

function scrollToSkill(index) {
  console.log();
  
  const el = skillRefs.value[index]
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}
</script>

<style lang="scss" scoped>
  @use '../scss/index' as *;
  .skills-container {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    min-height: 90vh;
  }

  .skill-card {
    padding: 1.5rem;
    text-align: center;
    overflow: hidden;
  }

  .list-icon {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    gap: 2rem;
  }

  .logo-container {
    display: flex;
    justify-content: center;
    margin: 1rem 0;
    background-color: $white;
    width: 100px;
    height: 100px;
    padding: 1.2rem;
    border-radius: 50%;
  }

  /* Bounce In Animation */
  .bounce-in {
    animation: bounceIn 0.6s both;
  }

  @keyframes bounceIn {
    0% {
      opacity: 0;
      transform: scale(0.3);
    }
    50% {
      opacity: 1;
      transform: scale(1.05);
    }
    70% {
      transform: scale(0.9);
    }
    100% {
      transform: scale(1);
    }
  }

  /* Progress Bar */
  .progress-bar-container {
    margin: 1rem 0;
  }

  .progress-bar-bg {
    width: 60%;
    margin: auto;
    height: 12px;
    background: $white;
    border-radius: 6px;
    overflow: hidden;
  }

  .progress-bar-fill {
    height: 100%;
    background: $primary;
    transition: width 0.3s ease;
  }

  /* Fade In Text */
  // .fade-in {
  //   animation: fadeIn 1s forwards;
  // }

  .experience-text {
    background-color: $white;
    width: 70%;
    margin: 1rem auto;
    padding: 1rem;
    border-radius: 4px;
    box-shadow: 0 1px 3px $gray--2;

    &.slide-right {
    -webkit-animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both; 
    }

    &.slide-left {
      -webkit-animation: slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
      animation: slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @-webkit-keyframes slide-in-left {
    0% {
      -webkit-transform: translateX(-1000px);
              transform: translateX(-1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
              transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes slide-in-left {
    0% {
      -webkit-transform: translateX(-1000px);
              transform: translateX(-1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
              transform: translateX(0);
      opacity: 1;
    }
  }

  @-webkit-keyframes slide-in-right {
    0% {
      -webkit-transform: translateX(1000px);
              transform: translateX(1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
              transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes slide-in-right {
    0% {
      -webkit-transform: translateX(1000px);
              transform: translateX(1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
              transform: translateX(0);
      opacity: 1;
    }
  }

</style>
