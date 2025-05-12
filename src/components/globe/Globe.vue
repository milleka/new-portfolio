<template>
  <div ref="globeEl" />
</template>

<script setup>
import { onMounted, ref, toRefs } from 'vue'
import Globe from 'globe.gl'

const globeEl = ref(null)
const emit = defineEmits(['formation-click'])

const props = defineProps({
  formations: {
    type: Array,
  } 
})

const { formations } = toRefs(props);

onMounted(() => {
  const globe = Globe()(globeEl.value)
    .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
    .htmlElementsData(formations.value)
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