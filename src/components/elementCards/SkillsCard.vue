<template>
    <h3>{{ $t('skillsCard.framework.title') }}</h3>
    <div class="block">
        <div class="line">
            <img src="/assets/images/icon/drupal.png" alt="drupal"/>
            <img src="/assets/images/icon/vue.png" alt="vue"/>
            <img src="/assets/images/icon/docker.png" alt="docker"/>
            <img src="/assets/images/icon/html.png" alt="html"/>
        </div>
        <div class="line">
            <img src="/assets/images/icon/css3.png" alt="css"/>
            <img src="/assets/images/icon/twig.png" alt="twig"/>
            <img src="/assets/images/icon/sass.png" alt="sass"/>
            <img src="/assets/images/icon/flutter.png" alt="flutter"/>
        </div>
        <div class="line">
            <img src="/assets/images/icon/bootstrap.png" alt="bootstrap"/>
            <img src="/assets/images/icon/git.png" alt="git"/>
            <img src="/assets/images/icon/jira.png" alt="jira"/>
            <img src="/assets/images/icon/vuetify.png" alt="vuetify"/>
        </div>
    </div>
    <h3>{{ $t('skillsCard.skills.title') }}</h3>
    <div class="block">
        <div class="line">
            <div>
                <img src="/assets/images/icon/team-building.png" alt="team" />
                <p>{{ $t('skillsCard.skills.work') }}</p>
            </div>
            <div>
                <img src="/assets/images/icon/adaptabilite.png" alt="adaptation" />
                <p>{{ $t('skillsCard.skills.adaptation') }}</p>
            </div>
            <div>
                <img src="/assets/images/icon/passionne.png" alt="passionne" />
                <p>{{ $t('skillsCard.skills.curieux') }}</p>
            </div>
            <div>
                <img src="/assets/images/icon/ampoule.png" alt="ampoule" />
                <p>{{ $t('skillsCard.skills.passion') }}</p>
            </div>
        </div>
    </div>
    <h3>{{ $t('skillsCard.certif.title') }}</h3>
    <div class="block">
        <div class="line">
            <img src="/assets/images/icon/docker.png" alt="docker"/>
            <img src="/assets/images/icon/opquast.png" alt="opquast"/>
            <div>
                <img src="/assets/images/icon/agile.png" alt="agile"/>
                <p>Agile scrum</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<style lang="scss" scoped>
    @forward "../../scss/components/elementCards/skillsCard.scss"
</style>