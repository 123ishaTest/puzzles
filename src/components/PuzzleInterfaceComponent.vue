<template>
  <div>
    <div class="flex flex-row">
      <puzzle-component :puzzle="puzzle"
                        @edgeLeft="edgeLeftClicked"
                        @edgeRight="edgeRightClicked"
                        @tileLeft="tileLeftClicked"
                        @tileRight="tileRightClicked"
      ></puzzle-component>
      <div class="flex flex-col p-4 max-h-96 overflow-y-scroll">
        <div class="flex flex-row flex-wrap justify-items-stretch">
          <button @click="undo" class="btn btn-red">Undo</button>
          <button @click="redo" class="btn btn-green">Redo</button>
        </div>
        <div v-for="(command, index) in commands" :key="command.toString()">
          <p>{{ command.toString() }}</p>
          <hr class="border-2 border-black"
              v-if="puzzleInterface.commands.index === puzzleInterface.commands.commands.length - index-1">
        </div>
      </div>
    </div>
    <p>Is solved: {{ isSolved }}</p>
    <button @click="exportPuzzle" class="btn btn-blue">Export!</button>
    <input class="input-primary" v-model="exportValue">
    <button @click="importPuzzle" class="btn btn-red">Import!</button>
    <button @click="switchMode" class="btn btn-green">{{ isSolving ? 'Solving' : 'Editing' }}</button>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {PuzzleInterface} from "@/puzzles/PuzzleInterface";
import PuzzleComponent from "@/components/PuzzleComponent.vue";
import {Edge} from "@/puzzles/Edge";
import {Tile} from "@/puzzles/Tile";
import {PuzzleInterfaceMode} from "@/puzzles/PuzzleInterfaceMode";

export default defineComponent({
  name: 'PuzzleInterfaceComponent',
  components: {PuzzleComponent},
  props: {
    puzzleInterface: {
      type: PuzzleInterface,
      required: true,
    }
  },
  data() {
    return {
      isSolved: false,
      exportValue: '',
    }
  },
  computed: {
    isSolving(): boolean {
      return this.puzzleInterface.mode === PuzzleInterfaceMode.Solving;
    },
    isEditing(): boolean {
      return this.puzzleInterface.mode === PuzzleInterfaceMode.Editing;
    },
    puzzle() {
      return this.puzzleInterface.puzzle
    },
    commands() {
      return this.puzzleInterface.commands.commands.slice().reverse();
    }
  },
  methods: {
    switchMode() {
      this.puzzleInterface.switchMode();
    },
    undo() {
      this.puzzleInterface.undo();
    },
    redo() {
      this.puzzleInterface.redo();
    },
    exportPuzzle() {
      if (this.isEditing && !this.isSolved) {
        alert("You can only export solved puzzles");
        return;
      }
      this.exportValue = this.puzzleInterface.export();
    },
    importPuzzle() {
      this.puzzleInterface.import(this.exportValue);
    },
    checkIsSolved() {
      this.isSolved = this.puzzle.isSolved()
    },
    edgeLeftClicked(edge: Edge) {
      this.puzzleInterface.performEdgeClickAction(edge, true);
      this.checkIsSolved();
    },
    edgeRightClicked(edge: Edge) {
      this.puzzleInterface.performEdgeClickAction(edge, false);
      this.checkIsSolved();
    },
    tileLeftClicked(tile: Tile) {
      this.puzzleInterface.performTileClickAction(tile, true);
      this.checkIsSolved();
    },
    tileRightClicked(tile: Tile) {
      this.puzzleInterface.performTileClickAction(tile, false);
      this.checkIsSolved();
    },
  },
});
</script>

<style scoped>

</style>
