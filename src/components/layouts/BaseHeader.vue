<template>
    <header>
        <a href="/"><img src="/assets/images/logo.png" alt="my-logo" /></a>
        <h1>{{ $t('titleSite') }}</h1>
        <div class="language">
            <button
                v-for="lang in arrayLang"
                :class="{ active: locale === lang, [lang]: true }"
                :key="lang"
                @click="changeLang(lang)"
            />
        </div>
    </header>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const i18n = useI18n();

const { t } = useI18n();

const arrayLang = ["fr", "en"]


const locale = ref(i18n.locale);

function changeLang(newLang) {
    locale.value = newLang;
  }
</script>

<style lang="scss" scoped>
  @forward "../../scss/components/layouts/base-header";
</style>
