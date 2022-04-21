<script lang="ts">
import CustomButton from './CustomButton.vue';
import { defineComponent } from 'vue';
import exampleBottle from '@/assets/images/defaultBeer.png';
import IconArrowRight from '@/components/Icons/components/IconArrowRight.vue';
import IconBase from '@/components/Icons/IconBase.vue';

export default defineComponent({
  name: 'CardItem',
  components: { CustomButton, IconArrowRight, IconBase },
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
      <CustomButton className="px-0 group">
        <RouterLink to="#" class="w-full h-full flex items-center gap-5 px-10">
          Discover
          <IconBase fillColor="fill-yellow-dark group-hover:fill-yellow transition-all">
            <IconArrowRight />
          </IconBase>
        </RouterLink>
      </CustomButton>
    </div>
  </div>
</template>
