<<template>
    <footer>
        <div class="left">{{ $t('footer.text') }} 🚀</div>
        <div class="center">© 2025 Chassaing-Cahen Camille</div>
        <div class="right">
            <a href="https://www.linkedin.com/in/camille-chassaing-66a481180/"><v-icon icon="mdi-linkedin"></v-icon></a>
            <a href="https://www.instagram.com/chasscam/"><v-icon icon="mdi-instagram"></v-icon></a>
            <a href="https://x.com/camillechass49"><v-icon icon="mdi-twitter"></v-icon></a>
        </div>
    </footer>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<style lang="scss" scoped>
@use '../../scss/index' as *;
footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    background-color: $primary;
    color: $white;

    div.right {
        width: 283px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 2rem;
        i {
            color:$white;
            &:hover {
                color: $primary-light;
            }
        }
    }

    @media screen and (max-width: 720px) {
        div.left {
            display: none;
        }
    }
}
</style>