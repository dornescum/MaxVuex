import { createStore } from 'vuex';
import rootMutations from '@/store/mutations';
import rootActions from '@/store/actions';
import rootGetters from '@/store/getters';
import counterModule from '../store/counter/index';


const store = createStore({
  modules:{
    numbers: counterModule
  },
  state(){
    return {
      isLoggedIn: false
    };
  },
  actions: rootActions ,
  mutations: rootMutations ,
  getters: rootGetters ,
});

export default store;