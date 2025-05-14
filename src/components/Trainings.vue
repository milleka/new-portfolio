<template>
  <HeaderPage :title="'home.cards.training.title'"/>

  <!-- mobile -->
  <v-timeline class="mobile" side="end">
    <v-timeline-item
      v-for="item in items"
      :key="item.id"
      :dot-color="item.color"
      size="small"
    >
      <v-alert
        :color="item.color"
        :icon="item.icon"
        :value="true"
      >
      <div class="header-block">
        <h4>{{ item.title }}</h4>
        <p>{{ item.date }}</p>
      </div>
      <div class="element">
        <img v-if="item.image" :src="item.image" alt="" />
        <p>{{ item.desc }}</p>
      </div>
      </v-alert>
    </v-timeline-item>
  </v-timeline>

  <!-- laptop -->
  <v-timeline class="laptop" align="start">
    <v-timeline-item
      v-for="(item, i) in items"
      :key="i"
      :dot-color="item.color"
      :icon="item.icon"
      fill-dot
    >
      <v-card>
        <v-card-title :class="['text-h6', `bg-${item.color}`]" :style="{backgroundColor: item.color }">
          {{ item.title }}
          <p>{{ item.date }}</p>
        </v-card-title>
        <v-card-text class="bg-white text--primary">
          <img v-if="item.image" :src="item.image" alt="" />
          <p>{{ item.desc }}</p>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script setup>
  import HeaderPage from './HeaderPage.vue'
  import { useI18n } from "vue-i18n";
  import { computed } from 'vue'


  const { t } = useI18n();

  const items = computed(() => [
    {
      title: t('trainingPage.bac.title'),
      date: "2009 - 2011",
      id: 1,
      color: '#FDD835',
      icon: 'mdi-store',
      desc: t('trainingPage.bac.desc'),
    },
    {
      title: t('trainingPage.bts.title'),
      date: "2011 - 2013",
      image: "/assets/images/btsmuc.png",
      id: 2,
      color: '#FB8C00',
      icon: 'mdi-poll',
      desc: t('trainingPage.bts.desc'),
    },
    {
      title: t('trainingPage.simplon.title'),
      date: "2019",
      image: "/assets/images/simplon.png",
      id: 3,
      color: '#42A5F5',
      icon: 'mdi-code-tags',
      desc: t('trainingPage.simplon.desc'),
    },
    {
      title: t('trainingPage.3il.title'),
      date: "2019 - 2020",
      image: "/assets/images/icon/3il.png",
      id: 4,
      color: '#7E57C2',
      icon: 'mdi-school',
      desc: t('trainingPage.3il.desc'),
    },
  ])
</script>

<style lang="scss" scoped>
    @forward "../scss/components/trainingPage.scss"
</style>