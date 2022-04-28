<script lang="ts">
import CustomButton from './CustomButton.vue';
import { defineComponent } from 'vue';
import exampleBottle from '@/assets/images/defaultBeer.png';
import { getImgUrl } from '@/services/beer.service';
import IconArrowRight from '@/components/Icons/components/IconArrowRight.vue';
import IconBase from '@/components/Icons/IconBase.vue';
import { routeNames } from '@/router';

export default defineComponent({
  name: 'CardItem',
  components: { CustomButton, IconArrowRight, IconBase },
  props: {
    description: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
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
      routes: routeNames,
    };
  },
  computed: {
    getAlt(): string {
      return 'Visuel de la bière'.concat(' ', this.title);
    },
    getImg(): string {
      return getImgUrl(this.imgUrl ?? null);
    },
  },
});
</script>

<template>
  <div class="bg-card">
    <img :src="getImg" :alt="getAlt" class="h-64 text-vertical mr-10" />
    <div>
      <p class="text-title">{{ title }}</p>
      <p class="text-subtitle mb-5">{{ subtitle }}</p>
      <p class="mb-8 line-clamp-3">
        {{ description }}
      </p>
      <CustomButton class="!px-0 group">
        <RouterLink
          :to="routes.detail.replace(':id', id)"
          class="w-full h-full flex items-center gap-5 px-10">
          Discover
          <IconBase fillColor="fill-yellow-dark group-hover:fill-yellow transition-all">
            <IconArrowRight />
          </IconBase>
        </RouterLink>
      </CustomButton>
    </div>
  </div>
</template>
