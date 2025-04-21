<template>
    <div className="experience">
        <div class="block">
            <img class="xp" src="/assets/images/icon/cyim.svg" alt="cyim agence web"/>
            <p>{{ $t('experiences-card.cyim.text1') }}</p>
            <p>{{ $t('experiences-card.cyim.text2') }}</p>
        </div>
        <div class="block">
            <img class="xp" src="/assets/images/icon/dynaidev.png" alt="dynaidev agence web"/>
            <p>{{ $t('experiences-card.dynaidev.text1') }}</p>
            <p>{{ $t('experiences-card.dynaidev.text2') }}</p>
        </div>
        <div class="block">
            <img class="xp" src="/assets/images/icon/grow-shop.png" alt="shop"/>
            <p>{{ $t('experiences-card.shop.text1') }}</p>
            <p class="bold">{{ $t('experiences-card.shop.text2') }}</p>
        </div>
    </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<style lang="scss" scoped>
    @forward "../../scss/components/elementCards/experiencesCard.scss"
</style>