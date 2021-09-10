<template>
  <div :style="{ background: store.state.theme.bg }" class="bg"></div>
  <div class="app">
    <Header />
    <SearchBar />
    <User />
  </div>
</template>

<script>
  import SearchBar from "./components/SearchBar"
  import Header from "./components/Header"
  import User from "./components/User"
  import { provide } from "vue"
  import store from "@/store"

  export default {
    name: 'App',
    components: {
      SearchBar,
      Header,
      User
    },
    setup() {
      provide("store", store)

      store.methods.searchUser()

      return { store }
    } 
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all .5s ease-in;
    transition-property: color, background-color, fill;
  }

  body {
    font-family: 'Space Mono', monospace;
    font-size: 1.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 95vh;
    position: relative;
  }

  html {
    font-size: 62.5%;
  }

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: -1;
  }

  .unavailable {
    color: #C3CDDD!important;
  }

  @media (min-width: 768px) {
    .app {
      width: 85%;
      padding: 4rem;
    }
  }

  @media (min-width: 1440px) {
    .app {
      width: 750px;
    }
  }
</style>
