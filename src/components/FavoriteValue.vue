<template>
  <h3>{{ counter }}</h3>
    <p>we do more ...</p>
</template>

<script>
export default {
  name: 'TheCounter',
  computed:{
    counter(){
      return  this.$store.getters['numbers/normalizedCounter'];

    }
  },
};
</script>

<style scoped>

</style>