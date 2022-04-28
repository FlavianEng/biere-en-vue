<script lang="ts">
import CustomButton from '@/components/CustomButton.vue';
import { defineComponent } from 'vue';
import IconArrowLeft from './Icons/components/IconArrowLeft.vue';
import IconArrowRight from './Icons/components/IconArrowRight.vue';
import IconBase from './Icons/IconBase.vue';

export default defineComponent({
  name: 'PaginationComponent',
  components: { CustomButton, IconArrowLeft, IconArrowRight, IconBase },
  props: {
    currentPage: {
      type: Number,
      default: 1,
    },
    itemsPerPage: {
      type: Number,
      required: true,
    },
    length: {
      type: Number,
      required: true,
    },
  },
  computed: {
    getNumberOfPages(): number {
      return Math.ceil(this.length / this.itemsPerPage);
    },
  },
  methods: {
    nextPageIsActive(page): boolean {
      return page <= this.getNumberOfPages;
    },
    onChangePage(page) {
      if (this.previousPageIsActive(page) && this.previousPageIsActive(page)) {
        this.$emit('handleChangePage', page);
      }
    },
    previousPageIsActive(page): boolean {
      return page >= 1;
    },
  },
  emits: ['handleChangePage'],
});
</script>

<template>
  <div class="flex">
    <CustomButton @handleClick="onChangePage(currentPage - 1)">
      <IconBase><IconArrowLeft /></IconBase>
    </CustomButton>
    <div class="flex items-center gap-10 mx-6 overflow-x-auto max-width">
      <div v-for="index in getNumberOfPages" :key="index" class="h-10 w-10 min-w-10 min-h-10">
        <CustomButton
          className="bg-transparent hover:bg-grey-light text-black !p-0 w-full !h-full"
          v-if="currentPage !== index">
          {{ index }}
        </CustomButton>
        <span
          v-if="currentPage === index"
          class="text-yellow-dark px-0 py-0 font-semibold flex items-center justify-center w-full h-full">
          {{ index }}
        </span>
      </div>
    </div>
    <CustomButton @handleClick="onChangePage(currentPage + 1)">
      <IconBase><IconArrowRight /></IconBase>
    </CustomButton>
  </div>
</template>

<style scoped>
.max-width {
  max-width: calc((2.5rem * 4) + (1.5rem * 2) + (2.5rem * 3));
}
</style>
