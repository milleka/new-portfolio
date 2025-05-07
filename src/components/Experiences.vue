<template>
  <HeaderPage :title="'home.cards.experience.title'"/>
  <Globe @formation-click="openModal" />
  <div v-if="showModal" class="modal">
    <div class="bg-white">
      <header>
        <h2 class="text-lg font-bold mb-2">{{ selectedFormation.company }}</h2>
        <a @click="showModal = false"></a>
      </header>
      <div class="block-top">
        <img :src="selectedFormation.logo" alt="logo-{{ selectedFormation.company }}"/>
        <div>
          <p><span>Lieu:</span>{{ selectedFormation.name }}</p>
          <p><span>Date:</span>{{ selectedFormation.date }}</p>
          <p><span>Durée:</span>{{ selectedFormation.duration }}</p>
          <h5>Description de l'entreprise</h5>
          <p>{{ selectedFormation.description }}</p>
        </div>
      </div>
      <div class="block-middle">
        <div class="role">
          <h4>mon role</h4>
          {{ selectedFormation.role }}
        </div>
        <div class="line"></div>
        <div class="listExp">
          <h4>Mes compétences</h4>
          <ul>
            <li v-for="el in selectedFormation.listExp">{{ el }}</li>
          </ul>
        </div>
      </div>
      <p class="mb-4"></p>
      <div class="list">
      </div>
    </div>
  </div>
</template>

<script setup>
import Globe from './globe/Globe.vue'
import { ref } from 'vue'
import HeaderPage from './HeaderPage.vue'

const showModal = ref(false)
const selectedFormation = ref({})

function openModal(formation) {
  selectedFormation.value = formation
  showModal.value = true
}

// Tu passes ces refs à ton composant Globe via props ou via un composable si besoin
</script>


<style lang="scss" scoped>
    @forward "../scss/components/experiencesPage.scss"
</style>
  