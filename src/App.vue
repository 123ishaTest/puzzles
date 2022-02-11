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
import {Slitherlink} from "@/puzzles/instances/slitherlink/Slitherlink";

export default defineComponent({
  name: 'App',
  components: {
    PuzzleComponent,
  },
  data() {
    return {
      puzzle: new Slitherlink({
        width: 3,
        height: 3,
        tileClues: [
          {x: 0, y: 0, value: 3},
          {x: 2, y: 0, value: 1},
          {x: 2, y: 2, value: 3},
          {x: 0, y: 2, value: 1},
        ]
      })
    }
  },
});
</script>

<style>
</style>
