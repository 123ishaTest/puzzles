<template>
  <puzzle-component :puzzle="puzzle"></puzzle-component>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import PuzzleComponent from "@/components/PuzzleComponent.vue";
import {Puzzle} from "@/puzzles/Puzzle";

export default defineComponent({
  name: 'App',
  components: {
    PuzzleComponent,
  },
  data() {
    return {
      puzzle: new Puzzle(9, 9, [])
    }
  },
});
</script>

<style>
</style>
