<template>
    <div class="header">
        <a href="/">Retour</a>
        <h1>Loisirs</h1>
        <div></div>
    </div>
    <div class="block">
        <h3>Basketball</h3>
        <v-icon icon="mdi-alert"></v-icon>
        <div className="citation">
            <p> 
            "Je peux accepter l'échec, tout le monde peut échouer, 
            mais je n'accepterai jamais de ne pas avoir essayé" MJ.
            </p>   
        </div>
        <div class="element animated-element">
            <iframe width="460" height="300" src="https://www.youtube.com/embed/Y9uHYYftdV0?si=0Pj2po2fHzt3gWuT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <p>Sur un terrain de basket, j'apprends à viser juste, à esquiver les obstacles et à construire des actions collectives. Bref, comme dans un bon projet web... sauf que là, je transpire un peu moins.</p>
        </div>
        <h3>Cuisine</h3>
        <div className="citation">
            <p> 
            "On ne peut pas faire de cuisine, si l'on n'aime pas les gens" JR.
            </p>   
        </div>
        <div class="element animated-element">
            <iframe width="460" height="300" src="https://www.youtube.com/embed/kyUPvM0M5BE?si=hb16h3e5AIq4p7no" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <p>En cuisine, je mélange créativité, précision et goût du partage. Un peu comme quand je code : une bonne recette, quelques ingrédients secrets, beaucoup d'amour et hop un site qui donne envie de rester à table.</p>
        </div>
        <h3>Jeux video</h3>
        <div className="citation">
            <p> 
            "Jouer aux jeux vidéo augmente la créativité, et permet une vue plus détaillée, et améliore
            la concentration et rend les gens heureux".
            </p>   
        </div>
        <div class="element animated-element">
            <iframe width="460" height="300" src="https://www.youtube.com/embed/77NiHeEa5Gg?si=mfmNVAxfpujXeOOp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <p>Quant aux jeux vidéo, surtout en coopération, ils m'ont formé à la communication rapide, à l'adaptation face aux imprévus... et à garder mon calme quand tout explose. Autant dire que les bugs en prod ne me font plus peur !</p>
        </div>
    </div>
</template>

<script setup>
    import { onMounted } from 'vue'

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

<style scoped>
.animated-element {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.animated-element.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>