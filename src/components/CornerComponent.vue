<template>
  <div @click="click" :class="'h-4 w-4 ' + cornerColor"></div>
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
  computed: {
    cornerColor() {
      return this.corner.value ? 'bg-black' : 'bg-red-400';
    }
  },
  methods: {
    click(): void {
      this.$emit('corner', this.corner);
    }
  },
});
</script>

<style scoped>

</style>
