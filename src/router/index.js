import Vue from "vue";
import Router from "vue-router";
import SearchCountry from "../views/SearchCountry";
import CountryInfo from "../views/CountryInfo";

Vue.use(Router);

export default new Router({
    routes: [{
            path: "/",
            name: "SearchCountry",
            component: SearchCountry
        },
        {
            path: "/country",
            name: "CountryInfo",
            component: CountryInfo,
            props: true
        }
    ]
});