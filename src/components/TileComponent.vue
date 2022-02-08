<template>
  <div @click="click" class="h-12 w-12 bg-blue-400 flex flex-col justify-center">
    <div class="text-center"> {{ tile.value }}</div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {Tile} from "@/puzzles/Tile";

export default defineComponent({
  name: 'TileComponent',
  props: {
    tile: {
      type: Tile,
      required: true,
    }
  },
  methods: {
    click(): void {
      this.$emit('tile', this.tile);
    }
  },
});
</script>

<style scoped>

</style>
