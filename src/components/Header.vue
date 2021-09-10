<template>
  <div class="header">
    <p :style="{ color: store.state.theme.headline }" class="logo">devfinder</p>
    <div class="theme">
      <span :style="{ color: store.state.theme.headline }">{{store.state.currTheme === "light" ? "Dark" : "Light"}}</span>
      <img @click="store.methods.toggleTheme" :src="store.state.theme.icon" alt="Dark Theme Icon" class="theme-icon">
    </div>
  </div>
</template>

<script>
  import { inject } from "vue"

  export default {
    name: "Header",
    setup() {
      const store = inject("store")

      return {
        store
      }
    }
  }
</script>

<style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2rem 0;
  }

  .logo {
    font-weight: bold;
    font-size: 2.6rem;
  }

  span {
    font-size: 1.3rem;
    font-weight: bold;
    letter-spacing: .25rem;
    text-transform: uppercase;
    color: #4B6A9B;
    margin-right: 1rem;
  }

  .theme {
    display: flex;
    align-items: center;
  }

  .theme-icon {
    cursor: pointer;
  }
</style>