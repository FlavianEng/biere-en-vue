<template>
  <div class="flex flex-col" :class="className">
    <label v-if="label" :for="htmlFor" class="mb-2 font-bold">{{ label }}</label>
    <input
      :id="htmlFor"
      :name="name"
      :type="type"
      :required="!optional"
      :placeholder="placeholder"
      :min="min"
      :max="max"
      v-model="valueModel"
      class="bg-grey-light outline-none rounded-xl p-5 h-16 border border-transparent transition-all focus:border-yellow-dark"
      :class="{ 'border-red': errorMessage }"
      autocomplete="off" />
    <span v-if="errorMessage" class="text-red italic w-full mt-1">{{ errorMessage }}</span>
  </div>
</template>

<script lang="ts">
export default {
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
    max: {
      type: Number,
    },
    min: {
      type: Number,
    },
    name: {
      required: true,
      type: String,
    },
    optional: {
      default: false,
      type: Boolean,
    },
    placeholder: {
      type: String,
    },
    type: {
      default: 'text',
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
      get(): string {
        return this.value;
      },
      set(val: string): void {
        this.$emit('onValueChange', val);
      },
    },
  },
};
</script>
