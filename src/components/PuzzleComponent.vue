<template>
  <div>

    <div class="puzzle-container flex flex-col">
      <div class="flex flex-row" v-for="(row, y) in puzzle.grid" :key="'row-'+y">
        <div v-for="(cell, x) in row" :key="'cell-'+x+'-'+y">
          <corner-component @corner="cornerClicked" v-if="y % 2 === 0 && x % 2 === 0" :corner="cell"></corner-component>
          <tile-component @tile="tileClicked" v-else-if="y % 2 === 1 && x % 2 === 1" :tile="cell"></tile-component>
          <edge-component @edge="edgeClicked" v-else :edge="cell"></edge-component>
        </div>
      </div>
    </div>
    <button @click="checkIsSolved()">Check!</button>
    <p>Is solved: {{ isSolved }}</p>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {Puzzle} from "@/puzzles/Puzzle";
import TileComponent from "@/components/TileComponent.vue";
import EdgeComponent from "@/components/EdgeComponent.vue";
import CornerComponent from "@/components/CornerComponent.vue";
import {Tile} from "@/puzzles/Tile";
import {Edge} from "@/puzzles/Edge";
import {Corner} from "@/puzzles/Corner";

export default defineComponent({
  name: 'PuzzleComponent',
  components: {CornerComponent, EdgeComponent, TileComponent},
  props: {
    puzzle: {
      type: Puzzle,
      required: true,
    }
  },
  data() {
    return {
      isSolved: false
    }
  },
  methods: {
    checkIsSolved() {
      this.isSolved = this.puzzle.isValid()
    },
    tileClicked(tile: Tile) {
      this.puzzle.setTileValue(tile, 3);
      this.checkIsSolved();
    },
    edgeClicked(edge: Edge) {
      this.puzzle.toggleEdge(edge);
      this.checkIsSolved();
    },
    cornerClicked(corner: Corner) {
      this.puzzle.toggleCorner(corner);
      this.checkIsSolved();
    }
  },
});
</script>

<style scoped>

</style>
