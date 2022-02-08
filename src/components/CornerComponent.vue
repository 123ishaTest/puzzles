<template>
  <div class="h-4 w-4 bg-red-400"></div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {Corner} from "@/puzzles/Corner";

export default defineComponent({
  name: 'CornerComponent',
  props: {
    corner: {
      type: Corner,
      required: true,
    }
  },
});
</script>

<style scoped>

</style>
