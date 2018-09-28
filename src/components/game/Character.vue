<template>
  <v-circle :config="config" ref="character"></v-circle>
</template>

<script>
export default {
  name: 'Character',
  props: ['config'],
  data: function () {
    return {
      x: this.config.x,
      y: this.config.y
    }
  },
  methods: {
    tick: function (timeDiff, commands) {
      let characterStage = this.$refs.character.getStage()
      let velocity = this.config.velocity

      if (commands.up) this.y -= timeDiff * velocity
      if (commands.down) this.y += timeDiff * velocity
      if (commands.left) this.x -= timeDiff * velocity
      if (commands.right) this.x += timeDiff * velocity

      characterStage.setX(this.x)
      characterStage.setY(this.y)
    }
  }
}
</script>

<style scoped>
</style>
