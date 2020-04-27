import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import router from "./router";

import App from "./App.vue";

Vue.use(VueAxios, axios);

new Vue({
    el: "#app",
    router,
    template: "<App/>",
    components: { App }
});