<template>
  <main>
  <div ref="card" :class="`user ${[store.state.currTheme === 'light' ? 'light-shadow' : '']}`">
    <div class="user-bg" :style="{ backgroundColor: store.state.theme.card, opacity: store.state.isFocused ? .3 : 1 }"></div>
    <div class="user-info">
      <img class="user-info-avatar" :src="store.state.user.avatar" alt="User Avatar" />
      <div class="user-info-details">
        <div class="user-info-name">
          <h1 :style="{ color: store.state.theme.headline }" class="user-info-headline">{{ store.state.user.name }}</h1>
          <a class="user-info-github" href="#">@{{ store.state.user.username }}</a>
        </div>
        <p :style="{ color: store.state.theme.headline }" class="user-info-joined">Joined {{ store.state.user.joined_at}}</p>
      </div>
    </div>
    <div class="user-profile">
      <p :style="{ color: store.state.theme.text }" class="user-profile-bio">
        {{ store.state.user.bio ? store.state.user.bio : "This profile has no bio" }}
      </p>
      <div :style="{ backgroundColor: store.state.theme.bg }" class="user-profile-stats">
        <div class="user-profile-repos">
          <p :style="{ color: store.state.theme.text }" class="user-profile-stats-label">Repos</p>
          <p :style="{ color: store.state.theme.text }" class="user-profile-stats-value">{{ store.state.user.repos }}</p>
        </div>
        <div class="user-profile-followers">
          <p :style="{ color: store.state.theme.text }" class="user-profile-stats-label">Followers</p>
          <p :style="{ color: store.state.theme.text }" class="user-profile-stats-value">{{ store.state.user.followers }}</p>
        </div>
        <div class="user-profile-repos">
          <p :style="{ color: store.state.theme.text }" class="user-profile-stats-label">Following</p>
          <p :style="{ color: store.state.theme.text }" class="user-profile-stats-value">{{ store.state.user.following }}</p>
        </div>
      </div>
      <div class="user-profile-details">
        <div class="user-profile-location">
          <svg height="20" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12.797 3.425C11.584 1.33 9.427.05 7.03.002a7.483 7.483 0 00-.308 0C4.325.05 2.17 1.33.955 3.425a6.963 6.963 0 00-.09 6.88l4.959 9.077.007.012c.218.38.609.606 1.045.606.437 0 .828-.226 1.046-.606l.007-.012 4.96-9.077a6.963 6.963 0 00-.092-6.88zm-5.92 5.638c-1.552 0-2.813-1.262-2.813-2.813s1.261-2.812 2.812-2.812S9.69 4.699 9.69 6.25 8.427 9.063 6.876 9.063z" :fill="[store.state.user.location ? store.state.theme.text : store.state.theme.unavailable]" /></svg>
          <p :style="{ color: store.state.user.location ? store.state.theme.text : store.state.theme.unavailable }">{{ store.state.user.location ? `${store.state.user.location }` : "Not Available" }}</p>
        </div>
        <div class="user-profile-twitter">
          <svg height="18" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 2.799a8.549 8.549 0 01-2.363.647 4.077 4.077 0 001.804-2.266 8.194 8.194 0 01-2.6.993A4.099 4.099 0 009.75 4.977c0 .324.027.637.095.934-3.409-.166-6.425-1.8-8.452-4.288a4.128 4.128 0 00-.56 2.072c0 1.42.73 2.679 1.82 3.408A4.05 4.05 0 01.8 6.598v.045a4.119 4.119 0 003.285 4.028 4.092 4.092 0 01-1.075.135c-.263 0-.528-.015-.776-.07.531 1.624 2.038 2.818 3.831 2.857A8.239 8.239 0 01.981 15.34 7.68 7.68 0 010 15.285a11.543 11.543 0 006.29 1.84c7.545 0 11.67-6.25 11.67-11.667 0-.182-.006-.357-.015-.53A8.18 8.18 0 0020 2.798z" :fill="[store.state.user.twitter ? store.state.theme.text : store.state.theme.unavailable]" /></svg>
          <a :style="{ color: store.state.user.twitter ? store.state.theme.text : store.state.theme.unavailable }" :href="[store.state.user.twitter ? store.state.user.twitter : '#']" target="_blank">
            {{ store.state.user.twitter ? `@${store.state.user.twitter}` : "Not Available" }}
          </a>
        </div>
        <div class="user-profile-website">
          <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg"><g :fill="[store.state.user.blog ? store.state.theme.text : store.state.theme.unavailable]"><path d="M7.404 5.012c-2.355 2.437-1.841 6.482.857 8.273.089.06.207.048.283-.027.568-.555 1.049-1.093 1.47-1.776a.213.213 0 00-.084-.3A2.743 2.743 0 018.878 10.1a2.64 2.64 0 01-.223-1.803c.168-.815 1.043-1.573 1.711-2.274l-.004-.002 2.504-2.555a2.568 2.568 0 013.648-.019 2.6 2.6 0 01.037 3.666l-1.517 1.56a.266.266 0 00-.06.273c.35 1.012.435 2.44.201 3.519-.006.03.031.05.053.028l3.228-3.295c2.062-2.105 2.044-5.531-.04-7.615a5.416 5.416 0 00-7.691.04L7.417 4.998l-.013.014z"/><path d="M13.439 13.75a.401.401 0 00.006-.003c.659-1.204.788-2.586.48-3.933l-.002.002-.001-.001a5.434 5.434 0 00-2.19-3.124.3.3 0 00-.333.015c-.553.448-1.095 1.021-1.452 1.754a.243.243 0 00.096.317c.415.24.79.593 1.04 1.061h.001c.196.33.388.958.263 1.632-.116.894-1.019 1.714-1.736 2.453-.546.559-1.935 1.974-2.49 2.542a2.6 2.6 0 01-3.666.037 2.6 2.6 0 01-.038-3.666l1.521-1.564A.266.266 0 005 11.004c-.338-1.036-.43-2.432-.217-3.51.006-.03-.031-.049-.053-.027l-3.179 3.245c-2.083 2.126-2.066 5.588.04 7.693 2.125 2.083 5.57 2.048 7.653-.078.723-.81 3.821-3.678 4.195-4.577z"/></g></svg>
          <a :style="{ color: store.state.user.blog ? store.state.theme.text : store.state.theme.unavailable }" :href="[store.state.user.blog ? store.state.user.blog : '#']" target="_blank">
            {{ store.state.user.blog ? `${store.state.user.blog}` : "Not Available" }}
          </a>
        </div>
        <div class="user-profile-company">
          <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg"><g :fill="[store.state.user.company ? store.state.theme.text : store.state.theme.unavailable]"><path d="M10.858 1.558L1.7.167A1.477 1.477 0 00.517.492 1.49 1.49 0 000 1.608v17.559c0 .458.375.833.833.833h2.709v-4.375c0-.808.65-1.458 1.458-1.458h2.083c.809 0 1.459.65 1.459 1.458V20h3.541V3a1.46 1.46 0 00-1.225-1.442zM4.583 12.292h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm4.167 7.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zM18.85 9.035l-5.933-1.242V20h5.625A1.46 1.46 0 0020 18.542V10.46c0-.688-.47-1.274-1.15-1.425zM16.875 17.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25z"/></g></svg>
          <p :style="{ color: store.state.user.company ? store.state.theme.text : store.state.theme.unavailable }">{{ store.state.user.company ? `${store.state.user.company}` : "Not Available" }}</p>
        </div>
      </div>
    </div>
  </div>  
  </main>
</template>

<script>
  import { inject, ref, onMounted } from "vue"
  import { gsap } from "gsap"

  export default {
    name: "User",
    setup() {
      const store = inject("store")
      const card = ref(null)
      
      onMounted(() => {
        gsap.from(card.value, { opacity: [0], y: 100, ease: "power1.out", duration: 1, delay: .2 })
      })
      

      return {
        store,
        card
      }
    }
  }
</script>

<style scoped>
  .user {
    padding: 4rem;
    position: relative;
  }

  .user-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    border-radius: 1.8rem;
    height: 100%;
    z-index: -1;
    transition: all .5s ease-in;
    transition-property: background-color, opacity;
  }

  .light-shadow {
    box-shadow: 0 16px 30px -10px rgba(70,96,187, .2);
  }

  /* User Info */

  .user-info {
    display: flex;
    align-items: center;
  }

  .user-info-joined {
    font-size: 1.3rem;
    color: #697C9A;
    margin-top: .5rem;
  }

  .user-info-details {
    margin-left: 2rem;
  }

  .user-info-headline {
    font-size: 1.6rem;
  }

  .user-info-github {
    margin-top: -.5rem;
    color: #0079FF;
    text-decoration: none;
  }

  .user-info-avatar {
    width: 70px;
    border-radius: 50%;
    align-self: flex-start;
  }

  /* User Profile */
  .user-profile {
    margin-top: 2.5rem;
    font-size: 1.3rem;
    color: #4B6A9B;
    line-height: 2.5rem;
  }

  .user-profile-stats {
    display: flex;
    justify-content: space-between;
    background-color: #F6F8FF;
    margin: 1.5rem 0;
    padding: 2rem 2.5rem;
    border-radius: 1.2rem;
  }

  .user-profile-stats-label {
    color: #4B6A9B;
  }

  .user-profile-stats-value {
    color: #2B3442;
    font-weight: bold;
    font-size: 1.6rem;
  }

  .user-profile-stats > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }   

  .user-profile-details { 
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 1rem;
  }

  .user-profile-details > div {
    display: flex;
    align-items: center;
  }

  .user-profile-details > div > p,
  .user-profile-details > div > a {
    margin-left: 1rem;
    color: #4B6A9B;
    text-decoration: none;
  }

  @media (min-width: 768px) {
    .user {
      padding: 3rem 3.5rem;
    }

    .user-info-avatar {
      width: 117px;
    }

    .user-info-headline {
      font-size: 2.6rem;
    }

    .user-profile {
      margin-top: 2.5rem;
    }

    .user-profile-stats {
      margin: 2.5rem 0;
    }

    .user-profile-stats > div {
      align-items: flex-start;
    }

    .user-profile-details {
      grid-template-columns: repeat(2, 1fr)
    }
  }

  @media (min-width: 1440px) {
    .user-profile {
      margin-left: 15rem;
      margin-top: -1rem;
    }

    .user-info-avatar {
      margin-right: 1rem;
    }

    .user-info-details {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }

    .user-info-joined {
      margin-top: 1rem;
    }

    .user-profile-bio {
      width: 90%;
    }
  }
</style>