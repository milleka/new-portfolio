

import { createApp, h } from "vue";

import i18n from "./services/i18n";
import App from "./App.vue";
import router from "./router";

import "vuetify/styles"
import { createVuetify } from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"

// load style
import "./scss/main.scss";

  const app = createApp({
    render: () => h(App),
  });

  const vuetify = createVuetify({
    components,
    directives
  })

  app.use(router);
  app.use(i18n);
  app.mount("#app");
  app.use(vuetify);

