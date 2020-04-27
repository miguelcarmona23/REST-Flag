<template>
  <div>
    <router-link :to="{ name: 'SearchCountry'}">
      <button class="btn">
        <i class="fas fa-arrow-left"></i> Back
      </button>
    </router-link>
    <div class="container">
      <div class="flag flex-item">
        <img class="flag" :src="flag">
      </div>

      <div class="info-container flex-item">
        <span class="headline">{{name}}</span>
        <span>
          <b>Native Name:</b>
          {{nativeName}}
        </span>
        <span>
          <b>Population:</b>
          {{population}}
        </span>
        <span>
          <b>Region:</b>
          {{region}}
        </span>
        <span>
          <b>Sub Region:</b>
          {{subregion}}
        </span>
        <span>
          <b>Capital:</b>
          {{capital}}
        </span>
        <span>
          <b>Top Level Domain:</b>
          {{topLevelDomain[0]}}
        </span>
        <span>
          <b>Currencies:</b>
          <span
            style="margin: 0px 5px;"
            v-for="currency in currencies"
            :key="currency.name"
          >{{currency.name}}</span>
        </span>
        <span>
          <b>Languages:</b>
          <span
            style="margin: 0px 5px;"
            v-for="language in languages"
            :key="language.name"
          >{{language.name}}</span>
        </span>
        <span class="border-countries-container">
          <b>Border Countries:</b>
          <span v-for="border in borders" :key="border">
            <span class="border-country">{{border}}</span>
          </span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CountryInfo",
  props: [
    "name",
    "nativeName",
    "population",
    "currencies",
    "languages",
    "region",
    "subregion",
    "topLevelDomain",
    "capital",
    "borders",
    "flag"
  ]
};
</script>

<style scoped>
.container {
  display: flex;
}

.btn {
  background: white;
  border: none;
  padding: 8px 20px;
  border-radius: 5px;
  margin: 20px 0px;
  box-shadow: 2px 2px 5px 2px rgb(231, 231, 231);
  color: rgb(87, 87, 87);
}

.dark .btn {
  background: rgb(46, 46, 66);
  color: white;
  box-shadow: 1px 1px 5px 1px rgb(19, 19, 19);
}

.border-countries-container {
  margin-top: 20px;
}

.border-country {
  box-shadow: 2px 2px 5px 2px rgb(231, 231, 231);
  margin: 0px 10px;
  padding: 10px 20px;
}

.dark .border-country {
  background: rgb(46, 46, 66);
  box-shadow: 1px 1px 5px 1px rgb(19, 19, 19);
}

.btn:hover {
  cursor: pointer;
}

.fa-arrow-left {
  margin: 0px 5px;
}

.flag {
  width: 100%;
}

.info-container {
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
  line-height: 1.5;
  font-size: 12px;
}

.dark .info-container {
  color: white;
}

.headline {
  font-size: 18px;
  font-weight: bold;
  margin: 20px 0px;
}

.flex-item {
  flex: 1;
}
</style>
