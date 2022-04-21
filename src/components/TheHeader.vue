<template>
  <header class="flex h-full justify-center items-center bg-yellow">
    <div class="py-10">
      <RouterLink to="/"> <img :src="logo" class="h-14 w-full" /> </RouterLink>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import logo from '@/assets/logo.svg';

export default defineComponent({
  name: 'TheHeader',
  data() {
    return {
      logo: logo,
    };
  },
});
</script>
