<script lang="ts">
import { defineComponent } from 'vue';
import { routeNames } from '@/router/index';
import TheHeader from '@/components/TheHeader.vue';

export default defineComponent({
  components: { TheHeader },
  data() {
    return {
      routeNames: routeNames,
    };
  },
});
</script>

<template>
  <TheHeader />

  <main class="p-8 max-w-7xl m-auto">
    <RouterView />
  </main>
</template>
