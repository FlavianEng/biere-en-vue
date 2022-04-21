<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

export default defineComponent({
  name: 'CustomButton',
  props: {
    className: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '',
    },
    type: {
      type: String as PropType<'button' | 'submit' | 'reset' | undefined>,
      default: 'button',
    },
  },
  computed: {
    getColorButton(): string | null {
      if (this.color === 'red') return 'button-red';
      if (this.color === 'grey') return 'button-grey';

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
    :type="type"
    class="px-10 text-white bg-yellow font-semibold uppercase rounded-lg outline-none transition-all h-16 hover:bg-yellow-dark"
    :class="[getColorButton, className]"
    @click="handleClick">
    <slot />
  </button>
</template>

<style scoped>
.button:hover {
  border-color: #0074e8;
  background-color: transparent;
  color: #0074e8;
}

.button:focus {
  background-color: #005cb9;
}

.button-red {
  background-color: #c91407;
}

.button-red:focus {
  background-color: #a11208;
}

.button-red:hover {
  border-color: #c91407;
  color: #c91407;
}

.button-grey {
  background-color: #777777;
}

.button-grey:focus {
  background-color: #626262;
}

.button-grey:hover {
  border-color: #777777;
  color: #777777;
}
</style>
