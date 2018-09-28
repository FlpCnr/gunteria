<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
import VueKonva from 'vue-konva'

export default {
  name: 'App',
  created: function () {
    Vue.use(VueKonva)
  }
}
</script>

<style>
</style>
