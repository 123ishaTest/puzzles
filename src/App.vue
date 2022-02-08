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
        width: 4,
        height: 4,
      })
    }
  },
});
</script>

<style>
</style>
