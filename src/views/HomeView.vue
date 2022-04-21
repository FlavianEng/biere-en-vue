<script lang="ts">
import CardItem from '@/components/CardItem.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { CardItem },
});
</script>

<template>
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
</template>
