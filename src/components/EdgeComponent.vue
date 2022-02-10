<template>
  <div @click="click" :class="dimensions + ' ' + edgeColor"></div>
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
    click(): void {
      this.$emit('edge', this.edge);
    }
  },
});
</script>

<style scoped>

</style>
