<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PillItem',
  props: {
    label: {
      type: String,
      required: true,
    },
  },
});
</script>

<template>
  <div class="py-1 px-5 rounded-full bg-yellow w-min whitespace-nowrap">{{ label }}</div>
</template>
