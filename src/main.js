

import { createApp, h } from "vue";

import i18n from "./services/i18n";
import App from "./App.vue";
import router from "./router";

import "vuetify/styles"
import { createVuetify } from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"
import '@mdi/font/css/materialdesignicons.css'

// load style
import "./scss/main.scss";

  const app = createApp({
    render: () => h(App),
  });

  const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: 'mdi',
    }
  })

  app.use(router);
  app.use(i18n);
  app.use(vuetify);
  app.mount("#app");

