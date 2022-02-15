<template>
  <div class="flex flex-col h-screen justify-center">
    <div class="flex flex-row justify-center">
      <puzzle-solver-component :puzzle-solver="solver"></puzzle-solver-component>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {Slitherlink} from "@/puzzles/instances/slitherlink/Slitherlink";
import {PuzzleInterface} from "@/puzzles/PuzzleInterface";
import PuzzleSolverComponent from "@/components/PuzzleSolverComponent.vue";
import {PuzzleInterfaceMode} from "@/puzzles/PuzzleInterfaceMode";

export default defineComponent({
  name: 'App',
  components: {
    PuzzleSolverComponent,
  },
  data() {
    return {
      solver: new PuzzleInterface(new Slitherlink({
            width: 5,
            height: 5,
          }),
          PuzzleInterfaceMode.Editing),
    }
  },
});
</script>

<style>
</style>
