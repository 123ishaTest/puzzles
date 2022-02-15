<template>
  <div
      @click="leftClick"
      @click.right="rightClick"
      :class="dimensions + ' ' + edgeColor"
      class="flex flex-row justify-center items-center"
  >
    <span v-if="edge.isDisabled">x</span>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {Edge} from "@/puzzles/Edge";

export default defineComponent({
  name: 'EdgeComponent',
  props: {
    edge: {
      type: Edge,
      required: true,
    },
  },
  computed: {
    dimensions() {
      return this.edge.isHorizontal ? 'w-12 h-4' : 'w-4 h-12';
    },
    edgeColor() {
      return this.edge.value ? 'bg-black' : 'bg-gray-300';
    }
  },
  methods: {
    leftClick(): void {
      this.$parent?.$emit('edgeLeft', this.edge);
    },
    rightClick(): void {
      this.$parent?.$emit('edgeRight', this.edge);
    },
  },
});
</script>

<style scoped>

</style>
