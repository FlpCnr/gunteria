<template>
  <div @click="onMouseClick" tabindex="0">
    <v-stage ref="stage" :config="configKonva">
      <v-layer ref="mainLayer">
        <Character ref="character" :velocity="velocity" :config="characterConfiguration"></Character>
      </v-layer>
    </v-stage>
  </div>
</template>

<script>
import Konva from 'konva'
import Character from '@/components/game/Character'

export default {
  name: 'Game',
  components: {Character},
  data: function () {
    return {
      configKonva: {
        width: 800,
        height: 600
      },
      mainAnimation: undefined,
      commands: {
        up: false,
        down: false,
        left: false,
        right: false
      },
      characterConfiguration: {
        x: 400,
        y: 300,
        radius: 30,
        fill: 'white',
        stroke: 'black',
        strokeWidth: 1,
        velocity: 0.5
      }
    }
  },
  mounted: function () {
    this.$el.onkeydown = this.onKeyDown
    this.$el.onkeyup = this.onKeyUp

    this.mainAnimation = new Konva.Animation(this.tick, this.$refs.mainLayer.getStage())
    this.mainAnimation.start()
  },
  methods: {
    tick: function (frame) {
      let timeDiff = frame.timeDiff
      this.$refs.character.tick(timeDiff, this.commands)
    },
    onKeyUp: function (event) {
      if (event.key === 'ArrowUp') this.commands.up = false
      if (event.key === 'ArrowDown') this.commands.down = false
      if (event.key === 'ArrowLeft') this.commands.left = false
      if (event.key === 'ArrowRight') this.commands.right = false
    },
    onKeyDown: function (event) {
      if (event.key === 'ArrowUp') this.commands.up = true
      if (event.key === 'ArrowDown') this.commands.down = true
      if (event.key === 'ArrowLeft') this.commands.left = true
      if (event.key === 'ArrowRight') this.commands.right = true
    }
  }
}
</script>

<style scoped>
</style>
