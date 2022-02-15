<template>
  <div class="flex flex-col h-screen justify-center">
    <div class="flex flex-row justify-center">
      <puzzle-interface-component :puzzle-interface="puzzleInterface"></puzzle-interface-component>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {Slitherlink} from "@/puzzles/instances/slitherlink/Slitherlink";
import {PuzzleInterface} from "@/puzzles/PuzzleInterface";
import {PuzzleInterfaceMode} from "@/puzzles/PuzzleInterfaceMode";
import PuzzleInterfaceComponent from "@/components/PuzzleInterfaceComponent.vue";

export default defineComponent({
  name: 'App',
  components: {
    PuzzleInterfaceComponent
  },
  data() {
    return {
      puzzleInterface: new PuzzleInterface(new Slitherlink({
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
