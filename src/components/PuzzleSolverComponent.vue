<template>
  <div>
    <div class="flex flex-row">
      <puzzle-component :puzzle="puzzle"
                        @edgeLeft="edgeLeftClicked"
                        @edgeRight="edgeRightClicked"
      ></puzzle-component>
      <div class="flex flex-col p-4 max-h-96 overflow-y-scroll">
        <div class="flex flex-row flex-wrap justify-items-stretch">
          <button @click="undo" class="btn btn-red">Undo</button>
          <button @click="redo" class="btn btn-green">Redo</button>
        </div>
        <div v-for="(command, index) in commands" :key="command.toString()">
          <p>{{ command.toString() }}</p>
          <hr class="border-2 border-black"
              v-if="puzzleSolver.commands.index === puzzleSolver.commands.commands.length - index-1">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {PuzzleSolver} from "@/puzzles/PuzzleSolver";
import PuzzleComponent from "@/components/PuzzleComponent.vue";
import {Edge} from "@/puzzles/Edge";
import {ToggleEdgeCommand} from "@/puzzles/commands/ToggleEdgeCommand";
import {DisableEdgeCommand} from "@/puzzles/commands/DisableEdgeCommand";

export default defineComponent({
  name: 'PuzzleSolverComponent',
  components: {PuzzleComponent},
  props: {
    puzzleSolver: {
      type: PuzzleSolver,
      required: true,
    }
  },
  data() {
    return {
      isSolved: false,
    }
  },
  computed: {
    puzzle() {
      return this.puzzleSolver.puzzle
    },
    commands() {
      return this.puzzleSolver.commands.commands.slice().reverse();
    }
  },
  methods: {
    undo() {
      this.puzzleSolver.undo();
    },
    redo() {
      this.puzzleSolver.redo();
    },
    checkIsSolved() {
      this.isSolved = this.puzzle.isSolved()
    },
    edgeLeftClicked(edge: Edge) {
      this.puzzleSolver.do(new ToggleEdgeCommand(
          this.puzzle, edge
      ));
      this.checkIsSolved();
    },
    edgeRightClicked(edge: Edge) {
      this.puzzleSolver.do(new DisableEdgeCommand(
          this.puzzle, edge
      ));
    },
  },
});
</script>

<style scoped>

</style>
