import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // show1: true,
    // show2: true,
    // show: true,
    // sty1: "",
    // sty2: "",
  },
  mutations: {
    // hide1(state) {
    //   state.show1 = !state.show1;
    // },
    // hide2(state) {
    //   state.show2 = !state.show2;
    // },
    // showList(state) {
    //   state.show = !state.show;
    //   if (state.show == false) {
    //     state.sty1 = "width:54px;";
    //     state.sty2 = "width: calc(100% - 54px);";
    //     state.show1 = false;
    //     state.show2 = false;
    //   } else {
    //     state.sty1 = "width:240px;";
    //     state.sty2 = "width: calc(100% - 240px);";
    //     state.show1 = true;
    //     state.show2 = true;
    //   }
    // },
  },
  actions: {
  },
  modules: {
  }
})
