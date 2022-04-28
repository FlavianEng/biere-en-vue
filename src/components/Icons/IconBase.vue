<script lang="ts">
import { defineComponent } from 'vue';
import { ICON_SIZES } from '@/components/Icons/constants';

export default defineComponent({
  name: 'IconBase',
  props: {
    className: {
      default: '',
      type: String,
    },
    fillColor: {
      type: String,
      default: 'fill-black',
    },
    height: {
      type: [Number, String],
      default: 18,
    },
    size: {
      type: String,
      default: 'md',
    },
    width: {
      type: [Number, String],
      default: 18,
    },
  },
  computed: {
    getSizes(): Record<string, string> {
      const iconSize =
        this.size && Object.keys(ICON_SIZES).includes(this.size)
          ? ICON_SIZES[this.size]
          : ICON_SIZES.md;

      return {
        height: `${iconSize.height}px`,
        minHeight: `${iconSize.height}px`,
        minWidth: `${iconSize.width}px`,
        width: `${iconSize.width}px`,
      };
    },
  },
});
</script>

<template>
  <span
    class="icon inline-flex items-center justify-center overflow-hidden"
    :class="[className, fillColor]"
    :style="getSizes">
    <slot />
  </span>
</template>
