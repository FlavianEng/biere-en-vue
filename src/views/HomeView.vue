<script lang="ts">
import CardItem from '@/components/CardItem.vue';
import { defineComponent } from 'vue';
import { getTotalNumberOfBeers } from '@/services/beer.service';
import PaginationComponent from '../components/PaginationComponent.vue';

export default defineComponent({
  components: { CardItem, PaginationComponent },
  data() {
    return {
      totalNumberOfBeers: getTotalNumberOfBeers(),
    };
  },
});
</script>

<template>
  <div class="grid gap-5 grid-cols-1 md:grid-cols-2">
    <CardItem
      imgUrl="d"
      title="Wheit a minute"
      subtitle="You know you shouldn't"
      description="This is the description of the beer" />
    <PaginationComponent :currentPage="1" :itemsPerPage="4" :length="18" />
  </div>
</template>
