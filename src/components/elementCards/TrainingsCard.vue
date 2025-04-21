<template>
    <div class="training">
        <div class="block">
            <img class="school-3il" src="/assets/images/icon/3il.png" alt="école d'ingénieur"/>
            <p>{{ $t('trainingCard.bachelor') }}</p>
        </div>
        <div class="block">
            <img class="fm" src="/assets/images/icon/simplon.png" alt="Simplon formation développement web"/>
            <p class="bold">Simplon.co</p>
            <p>{{ $t('trainingCard.simplon') }}</p>
        </div>
        <div class="block">
            <img class="fm" src="/assets/images/icon/bts-muc.jpg" alt="bts muc"/>
            <p class="bold">{{ $t('trainingCard.bts') }}</p>
        </div>
    </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<style lang="scss" scoped>
    @forward "../../scss/components/elementCards/trainingCard.scss"
</style>