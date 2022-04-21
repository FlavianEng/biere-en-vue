<script lang="ts">
import { defineComponent } from 'vue';
import exampleBottle from '@/assets/images/defaultBeer.png';

export default defineComponent({
  name: 'CardItem',
  props: {
    description: String,
    imgUrl: String,
    subtitle: String,
    title: String,
  },
  data() {
    return {
      exampleBottle: exampleBottle,
    };
  },
  computed: {
    getImgUrl(): string {
      let beerImgUrl = this.imgUrl;

      if (!this.imgUrl) {
        beerImgUrl = this.exampleBottle;
      }

      return beerImgUrl as string;
    },
  },
  methods: {},
});
</script>

<template>
  <div class="py-5 px-8 bg-grey-light rounded-xl flex">
    <img :src="getImgUrl" alt="Visuel de la bière" class="h-64 text-vertical mr-10" />
    <div>
      <p class="text-title">Trashy blonde</p>
      <p class="text-subtitle mb-5">You know you shouldn't</p>
      <p class="mb-8 h-[5.800rem] line-clamp-3">
        A titillating, neurotic, peroxide punk of a Pale Ale. Combining attitude, style, substance,
        and a little bit of low self esteem
      </p>
      <button>Découvrir</button>
    </div>
  </div>
</template>
