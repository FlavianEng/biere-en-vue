<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FilterItem',
  props: {
    filterName: {
      type: String,
      required: true,
    },
    filterVisibility: {
      type: Boolean,
    },
    maxValue: {
      type: Number,
      default: 100,
    },
    minValue: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      filterValues: { max: this.minValue, min: this.maxValue },
      isFilterOpened: false,
      maxValueModel: this.maxValue,
      minValueModel: this.minValue,
    };
  },
  methods: {
    checkMaxValue() {
      const minValue = this.minValueModel ?? this.minValue;

      if (this.maxValueModel && this.maxValueModel < minValue) {
        this.maxValueModel = minValue;
      }
    },
    checkMinValue() {
      const maxValue = this.maxValueModel ?? this.maxValue;

      if (this.minValueModel && this.minValueModel > maxValue) {
        this.minValueModel = maxValue;
      }
    },
    toggleFilterVisibility() {
      this.isFilterOpened = !this.isFilterOpened;
      this.$emit('filterVisibilityChange', this.isFilterOpened);
    },
    updateFilterValues() {
      this.checkMinValue();
      this.checkMaxValue();

      this.filterValues = { max: this.maxValueModel, min: this.minValueModel };
      this.$emit('filterValuesChange', this.filterValues);
    },
  },
  emits: ['filterValuesChange', 'filterVisibilityChange'],
});
</script>

<template>
  <div class="text-yellow select-none">
    <div
      @click="toggleFilterVisibility"
      class="pill-shape cursor-pointer bg-black font-semibold border-4 border-black hover:border-yellow transition-all">
      {{ filterName }}
    </div>
    <div
      v-show="isFilterOpened"
      class="absolute mt-2 p-2 bg-black rounded-lg min-w-[15rem] flex justify-center items-start flex-col text-sm">
      <p>
        <span class="font-semibold">{{ filterName }}</span> is between
        <input
          type="number"
          name=""
          :min="minValue"
          :max="maxValueModel ?? maxValue"
          step="1"
          v-model.number="minValueModel"
          @change="updateFilterValues"
          class="bg-black text-yellow font-semibold outline-none border-b-2 border-yellow w-10" />
        <span>%</span>
        and
        <input
          type="number"
          name=""
          :min="minValueModel ?? minValue"
          :max="maxValue"
          step="1"
          v-model.number="maxValueModel"
          @change="updateFilterValues"
          class="bg-black text-yellow font-semibold outline-none border-b-2 border-yellow w-10" />
        <span>%</span>
      </p>
    </div>
  </div>
</template>
