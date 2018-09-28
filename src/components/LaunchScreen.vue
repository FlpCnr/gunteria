<template>
  <div>
    <h1>Gunteria</h1>
    <button v-on:click="startGame">Start!</button>
  </div>
</template>

<script>
export default {
  name: 'LaunchScreen',
  methods: {
    startGame: function () {
      this.$router.push('game')
    }
  }
}
</script>

<style scoped>
</style>
