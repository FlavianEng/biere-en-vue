<script lang="ts">
import type { Beer } from '@/models/beer.model';
import CardItem from '@/components/CardItem.vue';
import { cloneObject } from '@/utils/helpers';
import CustomButton from '@/components/CustomButton.vue';
import { defineComponent } from 'vue';
import type { Filters } from '@/models/filters.model';
import { getBeers } from '@/api/beer.api';
import { getTotalNumberOfBeers } from '@/services/beer.service';
import InputField from '@/components/Fields/InputField.vue';
import LoaderComponent from '@/components/LoaderComponent.vue';
import OPTIONS_ITEMS_PER_PAGE from '@/data/options/itemsPerPage';
import PaginationComponent from '@/components/PaginationComponent.vue';
import SelectField from '@/components/Fields/SelectField.vue';

export default defineComponent({
  components: {
    CardItem,
    CustomButton,
    InputField,
    LoaderComponent,
    PaginationComponent,
    SelectField,
  },
  data() {
    return {
      beers: [] as Beer[],
      currentPage: 1,
      errors: {},
      filters: {
        search: '',
      },
      isLoading: false,
      itemsPerPage: OPTIONS_ITEMS_PER_PAGE[0].name,
      optionsItemsPerPage: OPTIONS_ITEMS_PER_PAGE,
      totalNumberOfBeers: 0,
    };
  },

  methods: {
    async getBeers(): Promise<void> {
      this.isLoading = true;
      this.beers = await getBeers(this.currentPage, this.itemsPerPage, this.filters).finally(
        () => (this.isLoading = false),
      );
    },
    async getTotalNumberOfBeers(filters: Filters): Promise<void> {
      this.isLoading = true;
      this.totalNumberOfBeers = await getTotalNumberOfBeers(filters).finally(
        () => (this.isLoading = false),
      );
    },
    async onChangeItemsPerPage(itemsPerpage: number): Promise<void> {
      this.currentPage = 1;
      this.itemsPerPage = itemsPerpage;
      await this.getBeers();
    },
    async onChangePage(page: number): Promise<void> {
      this.currentPage = page;
      await this.getBeers();
    },
    async onSubmit(e): Promise<void> {
      e.preventDefault();

      this.errors = {};
      const { search } = this.filters;

      if (!search) {
        this.errors = { ...this.errors, search: 'Search is required' };
      }

      if (!Object.keys(cloneObject(this.errors)).length) {
        this.currentPage = 1;
        await this.getBeers();
        await this.getTotalNumberOfBeers(this.filters);
      }
    },
  },
  async beforeMount(): Promise<void> {
    await this.getTotalNumberOfBeers(this.filters);
    await this.getBeers();
  },
});
</script>

<template>
  <div>
    <div class="mb-12">
      <form class="flex items-center" @submit="onSubmit">
        <InputField
          type="search"
          name="search"
          iconName="search"
          placeholder="Find a beer..."
          class="flex-1"
          :value="filters.search"
          :errorMessage="errors['search']"
          @onValueChange="filters.search = $event" />
        <CustomButton type="submit" class="ml-10" :disabled="!filters.search.length">
          Find
        </CustomButton>
      </form>
    </div>
    <LoaderComponent :isActive="isLoading" />
    <p v-if="!isLoading && !beers.length">No result...</p>
    <p class="mb-5 text-right">
      {{ totalNumberOfBeers }} result{{ totalNumberOfBeers > 1 ? 's' : '' }}
    </p>
    <div
      class="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      v-if="!isLoading && beers.length">
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
        v-if="totalNumberOfBeers >= itemsPerPage"
        :currentPage="currentPage"
        :itemsPerPage="itemsPerPage"
        :length="totalNumberOfBeers"
        @handleChangePage="onChangePage($event)" />
      <SelectField
        name="itemsPerPage"
        placeholder="Beers per page"
        optional
        :options="optionsItemsPerPage"
        :value="itemsPerPage"
        class="ml-6"
        @onValueChange="onChangeItemsPerPage($event)" />
    </div>
  </div>
</template>
