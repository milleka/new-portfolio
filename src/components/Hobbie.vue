<template>
    <HeaderPage :title="'home.cards.hobbies.title'"/>
    <div class="block">
        <h3>{{ $t('hobbiePage.basketball.title') }}</h3>
        <div class="element animated-element">
            <div className="citation">
                <div class="square left"></div>
                <p>{{ $t('hobbiePage.basketball.citation') }}</p>   
                <div class="square right"></div>
            </div>
            <div class="block">
                <iframe width="460" height="300" src="https://www.youtube.com/embed/Y9uHYYftdV0?si=0Pj2po2fHzt3gWuT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <p>{{ $t('hobbiePage.basketball.text') }}</p>
            </div>
        </div>
        <h3>{{ $t('hobbiePage.cook.title') }}</h3>
        <div class="element animated-element">
            <div className="citation">
                <div class="square left"></div>
                <p>{{ $t('hobbiePage.cook.citation') }}</p>
                <div class="square right"></div>
            </div>
            <div class="block">
                <iframe width="460" height="300" src="https://www.youtube.com/embed/kyUPvM0M5BE?si=hb16h3e5AIq4p7no" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <p>{{ $t('hobbiePage.cook.text') }}</p>
            </div>
        </div>
        <h3>{{ $t('hobbiePage.videoGame.title') }}</h3>
        <div class="element animated-element">
            <div className="citation">
                <div class="square left"></div>
                <p> {{ $t('hobbiePage.videoGame.citation') }}</p>
                <div class="square right"></div>   
            </div>
            <div class="block">
                <iframe width="460" height="300" src="https://www.youtube.com/embed/77NiHeEa5Gg?si=mfmNVAxfpujXeOOp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <p>{{ $t('hobbiePage.videoGame.text') }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { onMounted } from 'vue'
    import HeaderPage from './headerPage.vue';
    import { useI18n } from "vue-i18n";

    const { t } = useI18n();

    onMounted(() => {
    const elements = document.querySelectorAll('.animated-element')

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible')
        }
        })
    }, {
        threshold: 0.5
    })

    elements.forEach(el => observer.observe(el))
    })
</script>

<style lang="scss" scoped>
@forward "../scss/components/hobbiesPage.scss";
</style>