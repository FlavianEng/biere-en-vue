<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FieldContainer',
  props: {
    className: {
      default: '',
      type: String,
    },
    errorMessage: {
      default: '',
      type: String,
    },
    label: {
      type: String,
    },
    name: {
      required: true,
      type: String,
    },
  },
  computed: {
    htmlFor(): string {
      return `form-${this.name}`;
    },
  },
});
</script>

<template>
  <div class="flex flex-col" :class="className">
    <label v-if="label" :for="htmlFor" class="mb-2 font-bold">{{ label }}</label>
    <slot />
    <span v-if="errorMessage" class="text-red w-full mt-1">{{ errorMessage }}</span>
  </div>
</template>
