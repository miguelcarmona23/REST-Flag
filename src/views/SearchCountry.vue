<template>
  <div>
    <search-filter @search="updateSearchString" @region="updateRegionString"/>
    <country-list :searchValue="searchValue" :region="regionValue"/>
  </div>
</template>

<script>
import SearchFilter from "../components/SearchFilter";
import CountryList from "../components/CountryList";

export default {
  name: "App",
  components: {
    SearchFilter,
    CountryList
  },

  data: function() {
    return {
      searchValue: "",
      regionValue: "All"
    };
  },

  methods: {
    updateSearchString(searchString) {
      this.searchValue = searchString;
    },
    updateRegionString(region) {
      this.regionValue = region;
    }
  },

  props: ["search", "region"]
};
</script>
<style lang="scss">
* {
  font-family: sans-serif;
}
</style>
