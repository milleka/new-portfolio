<template>
  <HeaderPage :title="'home.cards.experience.title'"/>
  <Globe @formation-click="openModal" :formations="formations" />
  <div v-if="showModal" class="modal">
    <div class="bg-white">
      <header>
        <h2 class="text-lg font-bold mb-2">{{ selectedFormation.company }}</h2>
        <a @click="showModal = false"></a>
      </header>
      <div class="block-top">
        <img :src="selectedFormation.logo" alt="logo-{{ selectedFormation.company }}"/>
        <div>
          <p><span>{{ $t('experiencesPage.location') }}:</span>{{ selectedFormation.name }}</p>
          <p><span>{{ $t('experiencesPage.date') }}:</span>{{ selectedFormation.date }}</p>
          <p><span>{{ $t('experiencesPage.duration') }}:</span>{{ selectedFormation.duration }}</p>
          <h5>{{ $t('experiencesPage.company') }}:</h5>
          <p>{{ selectedFormation.description }}</p>
        </div>
      </div>
      <div class="block-middle">
        <div class="role">
          <h4>{{ $t('experiencesPage.myRole') }}</h4>
          {{ selectedFormation.role }}
        </div>
        <div class="line"></div>
        <div class="listExp">
          <h4>{{ $t('experiencesPage.skills') }}</h4>
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
import HeaderPage from './HeaderPage.vue';
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const showModal = ref(false)
const selectedFormation = ref({});

const formations = [
  {
    name: 'Angers',
    lat: 47.4717,
    lng: -0.620,
    company: "Gifi",
    logo: "/assets/images/company/gifi.png",
    date: "setp 2013 - aout 2016",
    duration: "3 ans",
    description: t('experiencesPage.desc.gifi'),
    role: t('experiencesPage.role.gifi'),
    listExp: [
      t('experiencesPage.listExp.gifi.exp1'),
      t('experiencesPage.listExp.gifi.exp2'),
      t('experiencesPage.listExp.gifi.exp3'),
      t('experiencesPage.listExp.gifi.exp4'),

    ],
  },
  {
    name: 'Montpellier',
    lat: 43.5868,
    lng: 3.8530,
    company: "Foir Fouille",
    logo: "/assets/images/company/foirfouille.png",
    date: "sept 2016 - sept 2018",
    duration: "5 ans",
    description: t('experiencesPage.desc.ff'),
    role: t('experiencesPage.role.ff'),
    listExp: [
      t('experiencesPage.listExp.ff.exp1'),
      t('experiencesPage.listExp.ff.exp2'),
      t('experiencesPage.listExp.ff.exp3'),
      t('experiencesPage.listExp.ff.exp4'),
      t('experiencesPage.listExp.ff.exp5'),
      t('experiencesPage.listExp.ff.exp6'),

    ],
  },
  {
    name: 'Saint léonard de noblat',
    lat: 45.8374,
    lng: 1.4893,
    company: 'Dynaidev',
    logo: "/assets/images/company/dynaidev-logo.png",
    date: "sept 2019 - octobre 2020",
    duration: "1 ans",
    description: t('experiencesPage.desc.dynaidev'),
    role: t('experiencesPage.role.dynaidev'),
    listExp: [
      t('experiencesPage.listExp.dynaidev.exp1'),
      t('experiencesPage.listExp.dynaidev.exp2'),
      t('experiencesPage.listExp.dynaidev.exp3'),
      t('experiencesPage.listExp.dynaidev.exp4'),
      t('experiencesPage.listExp.dynaidev.exp5'),
      t('experiencesPage.listExp.dynaidev.exp6'),

    ],
  },
  {
    name: 'Rennes',
    lat: 48.0917,
    lng: -1.6331,
    company: "Cyim",
    logo: "/assets/images/company/logo_CYIM_RVB.svg",
    date: "nov 2020 - aout 2025",
    duration: "5 ans",
    description: t('experiencesPage.desc.cyim'),
    role: t('experiencesPage.role.cyim'),
    listExp: [
      t('experiencesPage.listExp.cyim.exp1'),
      t('experiencesPage.listExp.cyim.exp2'),
      t('experiencesPage.listExp.cyim.exp3'),
      t('experiencesPage.listExp.cyim.exp4'),
      t('experiencesPage.listExp.cyim.exp5'),
      t('experiencesPage.listExp.cyim.exp6'),
      t('experiencesPage.listExp.cyim.exp7'),
      t('experiencesPage.listExp.cyim.exp8'),
      
    ],
  }
]

function openModal(formation) {
  selectedFormation.value = formation
  showModal.value = true
}

// Tu passes ces refs à ton composant Globe via props ou via un composable si besoin
</script>


<style lang="scss" scoped>
    @forward "../scss/components/experiencesPage.scss"
</style>
  