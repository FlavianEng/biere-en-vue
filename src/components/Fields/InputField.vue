<script lang="ts">
import { defineComponent } from 'vue';
import FieldContainer from '@/components/Fields/FieldContainer.vue';
import IconBase from '@/components/Icons/IconBase.vue';
import IconSearch from '@/components/Icons/components/IconSearch.vue';

export default defineComponent({
  name: 'InputField',
  components: {
    FieldContainer,
    IconBase,
    IconSearch,
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
    iconName: {
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
    getIcon(): string | null {
      switch (this.iconName) {
        case 'search':
          return 'IconSearch';
      }

      return null;
    },
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
    <div class="relative">
      <IconBase
        v-if="iconName"
        fillColor="fill-grey-dark"
        size="lg"
        className="absolute left-5 top-2/4 -translate-y-2/4 pointer-events-none">
        <component :is="getIcon" />
      </IconBase>
      <input
        :id="htmlFor"
        :name="name"
        :type="type"
        :required="!optional"
        :placeholder="placeholder"
        :min="min"
        :max="max"
        v-model="valueModel"
        class="bg-grey-light outline-none rounded-xl p-5 h-16 border border-transparent transition-all focus:border-yellow-dark w-full"
        :class="{ 'border-red': errorMessage, 'pl-16': iconName }"
        autocomplete="off" />
    </div>
  </FieldContainer>
</template>
