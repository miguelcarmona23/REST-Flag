<template>
  <div class="container">
    <input
      placeholder="Search for a country"
      v-model="searchValue"
      @keyup="searchCountry(searchValue)"
    >
    <select v-model="region" @change="searchRegion">
      <option selected value="All">All</option>
      <option v-for="region in regionList" :key="region.name">{{region}}</option>
    </select>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      searchValue: "",
      region: "All",
      regionList: ["Africa", "Americas", "Asia", "Europe", "Oceania"]
    };
  },

  methods: {
    searchCountry(searchValue) {
      this.$emit("search", searchValue);
    },
    searchRegion() {
      let reg = this.region;
      this.$emit("region", reg);
    }
  }
};
</script>

<style scoped>
input {
  padding: 10px;
  border: none;
  border-radius: 5px;
  box-shadow: 1px 1px 5px 1px rgb(231, 231, 231);
}

input:focus,
select:focus {
  outline: none;
}

.dark input,
.dark select {
  background: rgb(46, 46, 66);
  box-shadow: 1px 1px 5px 1px rgb(19, 19, 19);
  color: white;
}

select {
  padding: 10px;
  background: white;
  border: none;
  box-shadow: 1px 1px 5px 1px rgb(231, 231, 231);
}

.container {
  display: flex;
  justify-content: space-between;
  margin: 10px;
}
</style>

