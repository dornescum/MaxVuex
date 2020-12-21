export default {
  // poti folosi acc nume ca si mutations
  increment(context){
    setTimeout(function(){
      context.commit('increment')
    },2000)
  },
  increase(context, payload){
    context.commit('increase', payload)
  },
}