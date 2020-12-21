export default {
  finalCounter(state){
    // un getters trebuie sa aiba un return
    return state.counter * 3;
  },
  normalizedCounter(_, getters){
    const finalCounter = getters.finalCounter;
    if (finalCounter <0){
      return 0
    } if (finalCounter >100){
      return 100
    }
    return finalCounter;
  },
}