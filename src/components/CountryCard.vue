<template>
  <div class="country-card">
    <!-- Generally not a good idea to pass this much thru router.
    But instead of importing a state manager, this was smoother.-->
    <router-link
      :to="{ name: 'CountryInfo', params: 
{name: country.name,
nativeName: country.nativeName,
population: country.population, 
region: country.region, 
subregion: country.subregion,
capital: country.capital,
topLevelDomain: country.topLevelDomain,
currencies: country.currencies,
languages: country.languages,
borders: country.borders,
flag: country.flag} }"
    >
      <div class="country-flag-container">
        <img class="country-flag" :src="country.flag">
      </div>
      <div class="country-info">
        <h4 class="country-name">{{country.name}}</h4>
        <ul>
          <li>
            <b>Population:</b>
            {{country.population}}
          </li>
          <li>
            <b>Region:</b>
            {{country.region}}
          </li>
          <li>
            <b>Capital:</b>
            {{country.capital}}
          </li>
        </ul>
      </div>
    </router-link>
  </div>
</template>

<style>
.country-card {
  flex-basis: 19%;
  margin: 3%;
  background: white;
  box-shadow: 1px 1px 5px 1px rgb(231, 231, 231);
}

.dark .country-card {
  box-shadow: 1px 1px 5px 1px rgb(19, 19, 19);
  background: rgb(46, 46, 66);
}

.country-info {
  padding: 5%;
  margin-bottom: 20px;
  font-size: 12px;
}

.country-name {
  font-size: 14px;
}

.country-flag-container {
  height: 50%;
}

.country-flag {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
  color: rgb(82, 82, 82);
}

.dark a {
  color: white;
}

@media screen and (max-width: 720px) {
  .country-card {
    flex-basis: 44%;
  }
}

@media screen and (max-width: 375px) {
  .country-card {
    flex-basis: 100%;
    margin: 5%;
  }
}
</style>


<script>
export default {
  props: ["country"]
};
</script>