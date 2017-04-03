import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  groupItems: [],
  checkItems: [],
  initItems: [],
  items: []
}

const getters = {
  getCheckItems: state => {
    return state.checkItems
  },
  getItems: state => {
    return state.items
  },
  getGroupItems: state => {
    return state.groupItems
  },
  getInitItems: state => {
    return state.initItems
  }
}
const mutations = {
  LOAD_INIT_ITEMS (state, list){
    state. initItems = list
  },
  LOAD_CHECK_ITEMS (state, list) {
    state.checkItems = list
  },
  LOAD_GROUP_ITEMS (state, list) {
    state.groupItems = list
  },
  CLEAN_ITEMS (state) {
    state.items = [];
  },
  LOAD_ITEMS (state, list) {
    state.items = list;
  },
  DELETE_ITEM (state, item) {
    var index = state.items.indexOf(item)
    state.items.splice(index,1)
  },
  ADD_ITEM (state, item) {
    state.items.push(item)
  }
}

const actions = {
  toggleLoading ({ dispatch }) {
  dispatch('TOGGLE_LOADING')
}
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})