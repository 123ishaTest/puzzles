<template>
  <div class="flex flex-col h-screen justify-center">
    <div class="flex flex-row justify-center">
      <puzzle-component :puzzle="puzzle"></puzzle-component>
    </div>
  </div>
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
