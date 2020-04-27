<template>
  <div class="country-layout">
    <country-card v-for="country in countryList" :key="country.name" :country="country"></country-card>
  </div>
</template>

<script>
import CountryCard from "./CountryCard";
import axios from "axios";

export default {
  name: "CountryList",
  components: {
    CountryCard
  },

  data: function() {
    return {
      countryList: []
    };
  },

  mounted() {
    this.getAll();
  },

  watch: {
    searchValue: function() {
      this.getCountries(this.searchValue);
    }
  },

  props: ["searchValue", "region"],

  methods: {
    getAll() {
      axios
        .get("https://restcountries.eu/rest/v2/all")
        .then(response => {
          this.countryList = response.data;
        })
        // .catch(error => {
        //   // handle error
        //   console.log(error);
        // });
    },

    getCountries() {
      axios
        .get("https://restcountries.eu/rest/v2/name/" + this.searchValue)
        .then(response => {
          this.countryList = [];
          response.data.forEach(e => {
            if (e.region === this.region || this.region === "All") {
              this.countryList.push(e);
            }
          });
          // this.countryList = response.data;
        })
        // .catch(error => {
        //   this.countryList = [];
        // });
    }
  }
};
</script>

<style scoped>
.country-layout {
  display: flex;
  flex-wrap: wrap;
}
</style>

