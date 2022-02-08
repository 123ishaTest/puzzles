<template>
  <div>

    <div class="puzzle-container">
      <div class="flex flex-row" v-for="(row, y) in puzzle.grid" :key="'row-'+y">
        <div class="flex flex-col" v-for="(cell, x) in row" :key="'cell-'+x+'-'+y">
          <corner-component v-if="y % 2 === 0 && x % 2 === 0" :corner="cell"></corner-component>
          <tile-component v-else-if="y % 2 === 1 && x % 2 === 1" :tile="cell"></tile-component>
          <edge-component v-else :edge="cell" :is-horizontal="y % 2 === 0"></edge-component>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {Puzzle} from "@/puzzles/Puzzle";
import TileComponent from "@/components/TileComponent.vue";
import EdgeComponent from "@/components/EdgeComponent.vue";
import CornerComponent from "@/components/CornerComponent.vue";

export default defineComponent({
  name: 'PuzzleComponent',
  components: {CornerComponent, EdgeComponent, TileComponent},
  props: {
    puzzle: {
      type: Puzzle,
      required: true,
    }
  },
});
</script>

<style scoped>

</style>
