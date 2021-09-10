<template>
  <nav ref="searchbar" :style="{ backgroundColor: store.state.theme.card }" class="bar">
    <div class="search">
      <img src="../assets/icon-search.svg" alt="Search Glass Icon" class="search-icon">
      <input 
        @focus="store.methods.focusOn"
        @blur="store.methods.focusOut"
        ref="username"
        :style="{ color: store.state.theme.text }" 
        type="text" placeholder="Search Github username..." 
        :class="`search-input ${[store.state.currTheme === 'dark' ? 'light-input' : '']}`">
    </div>
    <span class="err">{{ store.state.errMsg }}</span>
    <button @click="store.methods.searchUser(this.$refs.username.value)" class="search-btn">Search</button>
  </nav>
</template>

<script>
  import { inject, onMounted, ref } from "vue"
  import { gsap } from "gsap"

  export default {
    name: "SearchBar",
    setup() {
      const store = inject("store")
      const searchbar = ref(null)

      onMounted(() => {
        gsap.from(searchbar.value, { opacity: [0], y: 50, ease: "power1.out", duration: 1.5 })
      })
   
      return {
        store,
        searchbar
      }
    }
  }
</script>

<style scoped>
  /* Search Bar */
  .bar {
    background-color: #fff;
    padding: .8rem;
    border-radius: 1.8rem;
    box-shadow: 0 16px 30px -10px rgba(70,96,187, .2);
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
  }

  /* No Results Found */
  .err {
    position: absolute;
    color: #F74646;
    right: 11rem;
    font-size: 1.2rem;
    font-weight: bold;
  }

  /* Search Input Wrapper */
  .search {
    display: flex;
    align-items: center;
    width: 100%;
    margin-left: .5rem;
  }

  /* Search Input */
  .search-input {
    font-size: 1.4rem;
    margin-left: 1rem;
    border: none;
    background: none;
    width: 60%;
  }

  .search-input:focus {
    outline: none;
  }

  .search-input::placeholder {
    color: #4B6A9B;
  }

  .light-input::placeholder {
    color: #fff!important;
  }

  /* Search Btn */
  .search-btn {
    border: none;
    background-color: #0079FF;
    color: #fff;
    cursor: pointer;
    font-size: 1.4rem;
    font-weight: bold;
    padding: 1.7rem 2.1rem;
    border-radius: 1.4rem;
  }

  .search-btn:hover {
    background-color: #60ABFF;
  }

  @media (min-width: 768px) {
    .search-input {
      width: 70%;
    }

    .err {
      font-size: 1.5rem;
      right: 12rem;
    }
  }

</style>