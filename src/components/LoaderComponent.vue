<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LoaderComponent',
  props: {
    isActive: {
      type: Boolean,
      required: true,
    },
  },
});
</script>

<template>
  <div v-if="isActive" class="text-2xl flex justify-center items-center my-10 gap-x-2">
    <span class="animate-spin-fast">🍺</span>
    <p>Loading</p>
  </div>
</template>
