import { reactive } from "vue"
import moment from "moment"
import { lightTheme, darkTheme } from "../variables"

const state = reactive({
 user: {},
 theme: {...lightTheme},
 currTheme: "light",
 username: "octocat",
 isFocused: false,
 errMsg: ""
})

const methods = {
  async searchUser(username = state.username) {
    const res = await fetch(`https://api.github.com/users/${username}`)
    
    if (res.status === 404) {
      state.errMsg = "No results"
      setTimeout(() => state.errMsg = "", 2000)
    } else {
      const data = await res.json()

      state.user = {
        name: data.name,
        username: data.login,
        avatar: data.avatar_url,
        joined_at: moment(data.created_at).format("MMM Do YYYY"),
        bio: data.bio,
        repos: data.public_repos,
        followers: data.followers,
        following: data.following,
        location: data.location,
        twitter: data.twitter_username,
        blog: data.blog,
        company: data.company
      } 
    }
  },

  toggleTheme() {
    if (state.currTheme === "light") {
      state.theme = {...darkTheme}
      state.currTheme = "dark"
    } else {
      state.currTheme = "light"
      state.theme = {...lightTheme}
    }
  },

  focusOn() {
    state.isFocused = true
  },

  focusOut() {
    state.isFocused = false
  }
}

const getters = {
  getUser() {
    return state.user
  }
}

export default {
  state,
  methods,
  getters
}