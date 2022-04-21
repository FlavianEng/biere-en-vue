<script lang="ts">
import CardItem from '../components/CardItem.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { CardItem },
  data() {
    return {};
  },
});
</script>

<template>
  <div class="grid gap-5 grid-cols-1 md:grid-cols-2">
    <CardItem imgUrl="" />
    <CardItem imgUrl="" />
    <CardItem imgUrl="" />
  </div>
</template>
