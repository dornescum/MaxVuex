export default {
  // vuex ne da deja state
  increment(state){
    state.counter= state.counter +2;
  },
  increase(state, payload){
    state.counter = state.counter + payload.value;
  },
}