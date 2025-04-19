import { createI18n } from "vue-i18n";

function loadLocaleMessages() {
  const locales = import.meta.glob("../locales/*.json", { eager: true });
  const messages = {};
  for (const key in locales) {
    messages[key.replace(/(\.\.\/locales\/|\.json)/g, "")] = locales[key].default;
  }
  return messages;
}

export default createI18n({
  allowComposition: true, // you need to specify that!
  fallbackLocale: "fr" || "en",
  globalInjection: true,
  legacy: false, // you must set `false`, to use Composition API
  locale: navigator.language.substring(0, 2) || "en",
  messages: loadLocaleMessages(),
});
