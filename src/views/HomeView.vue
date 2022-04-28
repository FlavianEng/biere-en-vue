<script lang="ts">
import type { Beer } from '@/models/beer.model';
import CardItem from '@/components/CardItem.vue';
import { defineComponent } from 'vue';
import { getBeers } from '@/api/beer.api';
import { getTotalNumberOfBeers } from '@/services/beer.service';
import LoaderComponent from '@/components/LoaderComponent.vue';
import PaginationComponent from '@/components/PaginationComponent.vue';

export default defineComponent({
  components: { CardItem, LoaderComponent, PaginationComponent },
  data() {
    return {
      beers: [] as Beer[],
      currentPage: 1,
      itemsPerPage: 12,
      totalNumberOfBeers: 0,
    };
  },
  methods: {
    async getBeers(): Promise<void> {
      this.beers = await getBeers(this.currentPage, this.itemsPerPage);
    },
    async getTotalNumberOfBeers(): Promise<void> {
      this.totalNumberOfBeers = await getTotalNumberOfBeers();
    },
    async onChangePage(page: number): Promise<void> {
      this.currentPage = page;
      await this.getBeers();
    },
  },
  async beforeMount(): Promise<void> {
    await this.getTotalNumberOfBeers();
    await this.getBeers();
  },
});
</script>

<template>
  <div class="max-w-7xl m-auto">
    <LoaderComponent :isActive="!beers.length" />
    <div class="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3" v-if="beers.length">
      <CardItem
        v-for="(beer, index) in beers"
        :key="index"
        :id="beer.id"
        :imgUrl="beer.image_url"
        :title="beer.name"
        :subtitle="beer.tagline"
        :description="beer.description" />
    </div>
    <div class="flex items-center justify-end">
      <PaginationComponent
        v-if="totalNumberOfBeers"
        :currentPage="currentPage"
        :itemsPerPage="itemsPerPage"
        :length="totalNumberOfBeers"
        @handleChangePage="onChangePage($event)"
        class="mt-12" />
    </div>
  </div>
</template>
