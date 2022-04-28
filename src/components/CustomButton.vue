<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

export default defineComponent({
  name: 'CustomButton',
  props: {
    color: {
      type: String,
      default: 'yellow',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String as PropType<'button' | 'submit' | 'reset' | undefined>,
      default: 'button',
    },
  },
  computed: {
    getColorButton(): string | null {
      if (this.color === 'grey') return 'bg-grey hover:bg-grey-dark';
      if (this.color === 'black') return 'bg-black hover:bg-black-dark';
      if (this.color === 'yellow') return 'bg-yellow hover:bg-yellow-dark';

      return null;
    },
  },
  methods: {
    handleClick() {
      this.$emit('handleClick');
    },
  },
  emits: ['handleClick'],
});
</script>

<template>
  <button
    :disabled="disabled"
    :type="type"
    class="px-10 text-white font-semibold uppercase rounded-lg outline-none transition-all h-16 flex justify-center items-center gap-5"
    :class="[getColorButton, { '!bg-grey': disabled }]"
    @click="handleClick">
    <slot />
  </button>
</template>
