<script lang="ts">
import type { Beer } from '@/models/beer.model';
import CardItem from '@/components/CardItem.vue';
import { defineComponent } from 'vue';
import { getBeers } from '@/api/beer.api';
import { getTotalNumberOfBeers } from '@/services/beer.service';
import LoaderComponent from '@/components/LoaderComponent.vue';
import OPTIONS_ITEMS_PER_PAGE from '@/data/options/itemsPerPage';
import PaginationComponent from '@/components/PaginationComponent.vue';
import SelectField from '@/components/Fields/SelectField.vue';

export default defineComponent({
  components: { CardItem, LoaderComponent, PaginationComponent, SelectField },
  data() {
    return {
      beers: [] as Beer[],
      currentPage: 1,
      itemsPerPage: OPTIONS_ITEMS_PER_PAGE[0].name,
      optionsItemsPerPage: OPTIONS_ITEMS_PER_PAGE,
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
    async onChangeItemsPerPage(itemsPerpage: number): Promise<void> {
      this.itemsPerPage = itemsPerpage;
      await this.getBeers();
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
    <div class="flex items-center justify-end mt-12">
      <PaginationComponent
        v-if="totalNumberOfBeers"
        :currentPage="currentPage"
        :itemsPerPage="itemsPerPage"
        :length="totalNumberOfBeers"
        @handleChangePage="onChangePage($event)" />
      <SelectField
        name="itemsPerPage"
        placeholder="Bières par page"
        optional
        :options="optionsItemsPerPage"
        :value="itemsPerPage"
        class="ml-6"
        @onValueChange="onChangeItemsPerPage($event)" />
    </div>
  </div>
</template>
