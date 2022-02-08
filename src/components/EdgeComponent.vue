<template>
  <div :class="dimensions + ' bg-yellow-400'"></div>
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
    isHorizontal: {
      type: Boolean,
      required: true,
    }
  },
  computed: {
    dimensions() {
      return this.isHorizontal ? 'w-12 h-4' : 'w-4 h-12';
    }
  },
});
</script>

<style scoped>

</style>
