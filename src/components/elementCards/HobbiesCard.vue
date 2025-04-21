<template>
    <div class="hobbie">
        <div class="block">
            <img class="school-3il" src="/assets/images/icon/basket-ball.png" alt="basket-ball"/>
            <p>{{ $t('hobbiesCard.basket') }}</p>
        </div>
        <div class="block">
            <img class="fm" src="/assets/images/icon/chef.png" alt="cuisine"/>
            <p class="bold">{{ $t('hobbiesCard.cook') }}</p>
        </div>
        <div class="block">
            <img class="fm" src="/assets/images/icon/manette.png" alt="jeux video"/>
            <p class="bold">{{ $t('hobbiesCard.videoGame') }}</p>
        </div>
    </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<style lang="scss" scoped>
    @forward "../../scss/components/elementCards/hobbiesCard.scss"
</style>