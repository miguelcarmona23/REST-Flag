<template>
  <div>
    <nav class="navbar" :class="{ dark : dark}">
      <span class="headline">Where in the world?</span>
      <span class="color-mode" @click="toogleDarkMode()">
        <i class="icon far fa-moon"></i>Darkmode
      </span>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data: function() {
    return {};
  },
  props: ["dark"],
  methods: {
    toogleDarkMode() {
      let newColorMode = !this.dark;
      this.$emit("clicked", newColorMode);
    }
  }
};
</script>

<style lang="scss" scoped>
.headline {
  font-size: 20px;
  font-weight: bold;
}

.icon {
  margin: 0px 5px;
}

.navbar {
  display: flex;
  justify-content: space-between;
  padding: 15px 30px;
  border-bottom: 2px solid rgb(226, 226, 226);
  background: white;
}

.dark.navbar {
  background: rgb(46, 46, 66);
  color: white;
  border-bottom: 2px solid rgb(28, 26, 32);
}

.color-mode:hover {
  cursor: pointer;
}
</style>