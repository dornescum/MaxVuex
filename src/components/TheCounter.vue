<template>
  <h3>{{ finalCounter }}</h3>

</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'TheCounter',
  computed:{
    // VOM FOLOSI MAPGETTERS IN LOC DE  return  this.$store.getters.finalCounter;
    // counter(){
    //   return  this.$store.getters.finalCounter;
    // }
    ...mapGetters('numbers',['finalCounter']) // dar putem aveam mai multe getters in array
  },
};
</script>

<style scoped>

</style>