<script lang="ts">
import CustomButton from '../components/CustomButton.vue';
import { defineComponent } from 'vue';
import outOfBeerGif from '@/assets/images/outOfBeer.gif';
import { routeNames } from '@/router/index';

export default defineComponent({
  name: 'NotFound',
  components: { CustomButton },
  props: {
    label: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      outOfBeerGif: outOfBeerGif,
      routes: routeNames,
    };
  },
  methods: {
    redirectToHome() {
      this.$router.push(this.routes.home);
    },
  },
});
</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <img class="h-full mb-8" :src="outOfBeerGif" alt="Out of beer gif" />
    <div class="bg-card w-full flex flex-col justify-center items-center gap-y-8">
      <div class="flex gap-x-2">
        <p class="font-moonget">Beer not found</p>
        <p class="hidden md:block">(╯°□°）╯︵ ┻━┻</p>
      </div>
      <CustomButton @handle-click="redirectToHome">Back to home</CustomButton>
    </div>
  </div>
</template>
