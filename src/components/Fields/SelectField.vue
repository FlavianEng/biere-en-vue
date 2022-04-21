<script lang="ts">
import { defineComponent } from 'vue';
import FieldContainer from '@/components/Fields/FieldContainer.vue';
import type { PropType } from 'vue';

type Option = {
  name: string;
  value: string;
};

export default defineComponent({
  name: 'SelectField',
  components: {
    FieldContainer,
  },
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
    optional: {
      default: false,
      type: Boolean,
    },
    options: {
      required: true,
      type: Array as PropType<Option[]>,
    },
    placeholder: {
      type: String,
    },
    value: {
      required: true,
      type: [String, Number, Boolean],
    },
  },
  computed: {
    htmlFor(): string {
      return `form-${this.name}`;
    },
    valueModel: {
      get(): string | number | boolean {
        return this.value;
      },
      set(val: string): void {
        this.$emit('onValueChange', val);
      },
    },
  },
  emits: ['onValueChange'],
});
</script>

<template>
  <FieldContainer :name="name" :label="label" :className="className" :errorMessage="errorMessage">
    <select
      :id="htmlFor"
      :name="name"
      :required="!optional"
      class="bg-grey-light outline-none rounded-xl p-5 h-16 border border-transparent transition-all focus:border-yellow-dark w-full"
      :class="{ 'border-red': errorMessage }"
      v-model="valueModel">
      <option v-if="placeholder" value="" hidden selected>
        {{ placeholder }}
      </option>
      <option v-for="(option, index) in options" :value="option.name" :key="index">
        {{ option.value }}
      </option>
    </select>
  </FieldContainer>
</template>
