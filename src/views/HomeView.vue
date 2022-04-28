<script lang="ts">
import CardItem from '@/components/CardItem.vue';
import { defineComponent } from 'vue';
import FilterItem from '@/components/FilterItem.vue';
import { getTotalNumberOfBeers } from '@/services/beer.service';
import PaginationComponent from '@/components/PaginationComponent.vue';

export default defineComponent({
  components: { CardItem, FilterItem, PaginationComponent },
  data() {
    return {
      totalNumberOfBeers: getTotalNumberOfBeers(),
    };
  },
  methods: {
    filterAbv(filterValues: Record<string, number | null>) {
      console.log('🚀   filterValues', filterValues);
    },
    filterEbc(filterValues: Record<string, number | null>) {
      console.log('🚀   filterValues', filterValues);
    },
    filterIbu(filterValues: Record<string, number | null>) {
      console.log('🚀   filterValues', filterValues);
    },
  },
});
</script>

<template>
  <div class="bg-card mb-8 flex gap-x-8">
    <FilterItem filterName="abv" @filterValuesChange="filterAbv" :filterVisibility="true" />
    <FilterItem filterName="ibu" @filterValuesChange="filterIbu" :filterVisibility="true" />
    <FilterItem filterName="ebc" @filterValuesChange="filterEbc" :filterVisibility="true" />
  </div>
  <div class="grid gap-5 grid-cols-1 md:grid-cols-2">
    <CardItem
      imgUrl="d"
      title="Wheit a minute"
      subtitle="You know you shouldn't"
      description="This is the description of the beer" />
  </div>
  <PaginationComponent :currentPage="1" :itemsPerPage="4" :length="18" />
</template>
