<script lang="ts">
import CardItem from '@/components/CardItem.vue';
import { defineComponent } from 'vue';
import PaginationComponent from '../components/PaginationComponent.vue';

export default defineComponent({
  components: { CardItem, PaginationComponent },
});
</script>

<template>
  <div>
    <div class="grid gap-5 grid-cols-1 md:grid-cols-2">
      <CardItem
        imgUrl="d"
        title="Wheit a minute"
        subtitle="You know you shouldn't"
        description="This is the description of the beer" />
      <CardItem
        imgUrl=""
        title="Wheit a minute"
        subtitle="You know you shouldn't"
        description="This is the description of the beer" />
      <CardItem
        imgUrl=""
        title="Wheit a minute"
        subtitle="You know you shouldn't"
        description="This is the description of the beer" />
    </div>
    <PaginationComponent :currentPage="1" :itemsPerPage="4" :length="18" />
  </div>
</template>
