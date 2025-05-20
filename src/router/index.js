import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import HobbieView from "../views/HobbieView.vue";
import ExperiencesView from "../views/ExperiencesView.vue";
import SkillsView from "../views/SkillsView.vue";
import TrainingsView from "../views/TrainingsView.vue";
import BugDodgerView from "../views/BugDodgerView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_ORIGIN),
  routes: [
    {
      component: HomeView,
      name: "home",
      path: "/"
    },
    {
      component: HobbieView,
      name: "hobbie",
      path: "/hobbies"
    },
    {
      component: ExperiencesView,
      name: "experiences",
      path: "/experiences"
    },
    {
      component: SkillsView,
      name: "skills",
      path: "/skills"
    },
    {
      component: TrainingsView,
      name: "trainings",
      path: "/trainings"
    },
    {
      component: BugDodgerView,
      name: "bugDodger",
      path: "/bugDodger"
    }
  ],
  scrollBehavior: () => ({ left: 0, top: 0 })
});

export default router;
