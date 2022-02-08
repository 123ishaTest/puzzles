<template>
  <div>
    I am a puzzle
    {{ puzzle }}
    <div class="puzzle-container">
      <div v-for="(row, y) in puzzle.cells" :key="'row-'+y">
        <div v-for="(cell, x) in row" :key="'cell-'+x+'-'+y">
          <div class="bg-red-100">
s
            {{ cell }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {Puzzle} from "@/puzzles/Puzzle";

export default defineComponent({
  name: 'PuzzleComponent',
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
