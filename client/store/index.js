import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  data: [],
  loading: false,
}

const mutations = {
  RECEIVE_SITES (state, { sites }) {
    state.data = sites
  },
  LOADING (state, { status }) {
    state.loading = status
  }
}

const actions = {
  async FETCH_SITES ({ commit }, username) {
    commit('RECEIVE_SITES', { sites: []})
    commit('LOADING', {status: true})
    const url = `http://localhost:5000/sherlock/${username}`
    const { data } = await axios.get(url)
    commit('LOADING', {status: false})
    commit('RECEIVE_SITES', { sites: data })
  }
}

const getters = {
  sites: state => {
    return state.data
  },
  loading: state => {
    return state.loading
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
