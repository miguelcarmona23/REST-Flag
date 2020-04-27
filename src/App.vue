<template>
  <div id="app">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
      integrity="sha256-+N4/V/SbAFiW1MPBCXnfnP9QSN3+Keu+NlB+0ev/YKQ="
      crossorigin="anonymous"
    >

    <navbar :dark="darkMode" @clicked="darkToogle"/>
    <div class="body-container" :class="{ 'dark': darkMode}">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: "App",
  components: {
    Navbar
  },

  data: function() {
    return {
      searchValue: "",
      region: "",
      darkMode: false
    };
  },

  methods: {
    updateSearchString(searchString) {
      this.searchValue = searchString;
    },
    updateRegionString(region) {
      this.region = region;
    },
    darkToogle(value) {
      this.darkMode = value;
    }
  }
};
</script>

<style lang="scss">
* {
  font-family: sans-serif;
}

body {
  margin: 0px !important;
  min-height: 100vh;
}

.body-container {
  padding: 30px;
  height: 100%;
}

.body-container.dark {
  background: rgb(37, 37, 53);
}
</style>


