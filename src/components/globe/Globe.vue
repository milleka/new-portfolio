<template>
  <div ref="globeEl" />
</template>

<script setup>
import { onMounted, ref } from 'vue'
import Globe from 'globe.gl'

const globeEl = ref(null)
const emit = defineEmits(['formation-click'])

const formations = [
  {
    name: 'Angers',
    lat: 47.4717,
    lng: -0.620,
    company: "Gifi",
    logo: "/assets/images/company/gifi.png",
    date: "setp 2013 - aout 2016",
    duration: "3 ans",
    description: "Gifi est une enseigne française spécialisée dans la distribution de produits à petits prix pour la maison, la décoration, les loisirs et le quotidien. Avec un réseau de centaines de magasins à travers la France, Gifi propose une large gamme d’articles accessibles pour améliorer le cadre de vie de ses clients.",
    role:"Chez Gifi, j’ai occupé le poste d’employé polyvalent au sein du rayon Loisirs. Mes missions consistaient à assurer la mise en rayon des produits, veiller à leur bonne présentation, gérer les stocks, et accompagner les clients dans leurs recherches. J’étais également amené à participer à la réorganisation des rayons selon les opérations commerciales en cours, tout en veillant à la propreté et au bon agencement de l’espace de vente.",
    listExp: [
      "accueil client",
      "encaissement clien",
      "gestion d'équipe",
      "mise en place d'un rayon",
    ]
  },
  {
    name: 'Montpellier',
    lat: 43.5868,
    lng: 3.8530,
    company: "Foir Fouille",
    logo: "/assets/images/company/foirfouille.png",
    date: "sept 2016 - sept 2018",
    duration: "5 ans",
    description: "La Foir’Fouille est une chaîne de magasins française dédiée à l’équipement et à la décoration de la maison. Elle offre un large choix de produits dans des univers variés tels que la cuisine, le rangement, les fêtes, le textile et les meubles, en mettant l’accent sur l’accessibilité, le renouvellement fréquent des collections et les bons plans.",
    role:"À La Foir’Fouille, j’ai travaillé en tant qu’employé polyvalent dans le rayon Cuisine. Je m’occupais de la réception des marchandises, du réassort et de la mise en avant des produits selon les directives merchandising. J’assurais également le conseil client, en veillant à proposer des solutions adaptées à leurs besoins. Mon rôle impliquait rigueur, sens de l’organisation et dynamisme pour maintenir un rayon attractif et bien approvisionné.",
    listExp: [
      "accueil client",
      "encaissement clien",
      "gestion d'équipe",
      "mise en place d'un rayon",
      "gestion des stocks",
      "gestion des fournisseurs"
    ]
  },
  {
    name: 'Saint léonard de noblat',
    lat: 45.8374,
    lng: 1.4893,
    company: 'Dynaidev',
    logo: "/assets/images/company/dynaidev-logo.png",
    date: "sept 2019 - octobre 2020",
    duration: "1 ans",
    description: 'Dynaidev',
    role: "Développeur en alternance chez Dynaidev, j’ai eu l’opportunité de travailler sur divers projets, principalement en PHP et Symfony. J’ai participé à la création d’applications web sur mesure pour des clients variés, en mettant l’accent sur la qualité du code et l’expérience utilisateur. Mon rôle impliquait également la collaboration avec les équipes de développement pour assurer une intégration fluide des fonctionnalités.",
    listExp: [
      "Symfony",
      "PHP",
      "MySQL",
      "React",
      "wordpress",
      "encadrement d'une équipe"
    ]
  },
  {
    name: 'Rennes',
    lat: 48.0917,
    lng: -1.6331,
    company: "Cyim",
    logo: "/assets/images/company/logo_CYIM_RVB.svg",
    date: "nov 2020 - aout 2025",
    duration: "5 ans",
    description: "Cyim est une société de services informatiques spécialisée dans l’accompagnement des sociétés savantes pour la création de leurs sites web institutionnels ainsi que la gestion de leurs congrès.",
    role:"J’ai été recruté en tant que développeur Drupal pour participer à la mise en place de plateformes web dédiées aux congrès virtuels et aux sites institutionnels. Par la suite, j’ai intégré pendant trois ans la nouvelle équipe Registration, avec pour mission de développer une interface utilisateur en Vue 3 permettant la gestion des congressistes : création de badges, ajout de nouveaux intervenants, import/export de données via fichiers CSV, gestion des paiements et de leur historique, etc. En complément, j’ai collaboré avec l’équipe mobile pour développer une application Flutter, déployée sur Android et affichée sur un écran 7 pouces connecté à un Raspberry Pi 4. Cette application permet aux congressistes de s’enregistrer de manière autonome et d’imprimer leur badge en scannant un QR code reçu en amont de l’événement.",
    listExp: [
      "Drupal",
      "VueJs",
      "Flutter",
      "mise en place des solutions techniques en congrès",
      "installation du réseaux",
      "accompagnement client grace au solution mise en place",
      "répondre à des différentes problematiques rencontrées",
      "installation d'un matériel de gestion de congrès (android,flutter, raspberryP4, imprimante)",
    ]
  }
]

onMounted(() => {
  const globe = Globe()(globeEl.value)
    .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
    .htmlElementsData(formations)
    .htmlLat(d => d.lat)
    .htmlLng(d => d.lng)
    .htmlElement(d => {
      const el = document.createElement('div')
      el.innerHTML = '📍'
      el.style.color = 'red'
      el.style.position = 'absolute';
      el.style.zIndex = '10'; // ou plus
      el.style.pointerEvents = 'auto'; // très important
      el.style.cursor = 'pointer'
      el.style.fontSize = '24px'
      el.title = d.name
      el.onclick = () => emit('formation-click', d)
        return el
      })
  
    globe.pointOfView({ lat: 46.5, lng: 2.2, altitude: 0.4 }, 3000)
})
</script>