<template>
  <div class="h-12 w-12 bg-blue-400"></div>
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
});
</script>

<style scoped>

</style>
