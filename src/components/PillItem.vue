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
  <div class="pill-shape bg-yellow">{{ label }}</div>
</template>
