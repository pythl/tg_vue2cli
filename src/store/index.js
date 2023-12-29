import Vue from "vue";
import Vuex from "vuex";
import match from "./modules/match";
import user from "./modules/user";
import join from "./modules/join";
// 挂载Vuex
Vue.use(Vuex);
const state = {};
const mutations = {};
const actions = {};
const getters = {};
//创建VueX对象
export default new Vuex.Store({
  modules: {
    match,
    user,
    join,
  },
  state,
  mutations,
  actions,
  getters,
});
