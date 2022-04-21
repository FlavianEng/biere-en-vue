<script lang="ts">
import { defineComponent } from 'vue';
import exampleBottle from '@/assets/images/defaultBeer.png';

export default defineComponent({
  name: 'CardItem',
  props: {
    description: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
    },
    subtitle: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      exampleBottle,
    };
  },
  computed: {
    getAlt(): string {
      return 'Visuel de la bière'.concat(' ', this.title);
    },
    getImgUrl(): string {
      let beerImgUrl = this.imgUrl;

      if (!this.imgUrl) {
        beerImgUrl = this.exampleBottle;
      }

      return beerImgUrl as string;
    },
  },
});
</script>

<template>
  <div class="py-5 px-8 bg-grey-light rounded-xl flex">
    <img :src="getImgUrl" :alt="getAlt" class="h-64 text-vertical mr-10" />
    <div>
      <p class="text-title">{{ title }}</p>
      <p class="text-subtitle mb-5">{{ subtitle }}</p>
      <p class="mb-8 h-[5.800rem] line-clamp-3">
        {{ description }}
      </p>
      <button>Discover</button>
    </div>
  </div>
</template>
