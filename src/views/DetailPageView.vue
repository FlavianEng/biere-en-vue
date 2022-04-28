<script lang="ts">
import type { Beer } from '@/models/beer.model';
import CustomButton from '@/components/CustomButton.vue';
import { defineComponent } from 'vue';
import { getBeerById } from '@/api/beer.api';
import type { HopsIngredient } from '@/models/beer.model';
import IconArrowLeft from '@/components/Icons/components/IconArrowLeft.vue';
import IconBase from '@/components/Icons/IconBase.vue';
import LoaderComponent from '@/components/LoaderComponent.vue';
import type { MaltIngredient } from '@/models/beer.model';
import PillItem from '@/components/PillItem.vue';

export default defineComponent({
  components: { CustomButton, IconArrowLeft, IconBase, LoaderComponent, PillItem },
  data() {
    return {
      beer: {} as Beer,
    };
  },
  computed: {
    getAbv(): string {
      return `ABV : ${this.beer.abv}%`;
    },
    getAlt(): string {
      return 'Visuel de la bière'.concat(' ', this.beer.name);
    },
    getEbc(): string {
      return `EBC : ${this.beer.ebc}`;
    },
    getHops(): string[] {
      const arrayOfNames = this.getIngredientListName(this.beer.ingredients.hops);
      return [...new Set(arrayOfNames)];
    },
    getIbu(): string {
      return `IBU : ${this.beer.ibu}`;
    },
    getMalt(): string[] {
      const arrayOfNames = this.getIngredientListName(this.beer.ingredients.malt);
      return [...new Set(arrayOfNames)];
    },
    getSrm(): string {
      return `SRM : ${this.beer.srm}`;
    },
  },
  methods: {
    async getBeer() {
      this.$route;
      const beerId = this.$route.params.id as string;
      this.beer = await getBeerById(beerId);
    },
    getIngredientListName(array: HopsIngredient[] | MaltIngredient[]): string[] {
      if (!this.beer) return [];

      return array.map((ingredient: HopsIngredient | MaltIngredient) => ingredient.name);
    },
  },
  beforeMount() {
    this.getBeer();
  },
});
</script>

<template>
  <LoaderComponent :isActive="!Object.keys(beer).length" />
  <div v-if="Object.keys(beer).length" class="flex flex-col gap-y-10">
    <div class="flex">
      <CustomButton class="!px-0 group mr-10">
        <RouterLink to="/" class="w-full h-full flex items-center gap-5 px-10">
          <IconBase fillColor="fill-yellow-dark group-hover:fill-yellow transition-all">
            <IconArrowLeft />
          </IconBase>
          Retour
        </RouterLink>
      </CustomButton>
      <div>
        <p class="text-title">{{ beer.name }}</p>
        <p class="text-subtitle mb-5">{{ beer.tagline }}</p>
      </div>
    </div>

    <div class="bg-card">
      <img :src="beer.image_url" :alt="getAlt" class="h-60 text-vertical mr-10" />
      <div>
        <p class="font-moonget mb-3">Description</p>
        <p class="mb-8">
          {{ beer.description }}
        </p>

        <div class="flex gap-x-5 mb-4">
          <PillItem v-if="beer.abv" :label="getAbv" />
          <PillItem v-if="beer.ibu" :label="getIbu" />
          <PillItem v-if="beer.ebc" :label="getEbc" />
          <PillItem v-if="beer.srm" :label="getSrm" />
        </div>
        <p class="text-sm">First brewed : {{ beer.first_brewed }}</p>
      </div>
    </div>

    <div v-if="beer.ingredients">
      <p class="font-moonget mb-3">Ingredients :</p>
      <ul>
        <li class="mb-4">
          <span class="font-semibold"> Malt : </span>
          <ul>
            <li v-for="(ingredient, index) in getMalt" :key="index" class="list-disc list-inside">
              {{ ingredient }}
            </li>
          </ul>
        </li>
        <li class="mb-4">
          <span class="font-semibold"> Hops : </span>
          <ul>
            <li v-for="(ingredient, index) in getHops" :key="index" class="list-disc list-inside">
              {{ ingredient }}
            </li>
          </ul>
        </li>
        <li class="mb-4">
          <span class="font-semibold"> Yeast : </span>
          <ul>
            <li class="list-disc list-inside">
              {{ beer.ingredients.yeast }}
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <div v-if="beer.food_pairing">
      <p class="font-moonget mb-3">Food pairing</p>
      <ul>
        <li v-for="(food, index) in beer.food_pairing" :key="index" class="list-disc list-inside">
          {{ food }}
        </li>
      </ul>
    </div>

    <div v-if="beer.brewers_tips">
      <p class="font-moonget mb-3">Brewers tips</p>
      <p>
        {{ beer.brewers_tips }}
      </p>
    </div>
  </div>
</template>
