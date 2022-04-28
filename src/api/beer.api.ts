import axios, { type AxiosResponse } from 'axios';
import type { Beer } from '@/models/beer.model';
import type { Filters } from '@/models/filters.model';

const baseApiUrl = import.meta.env.VITE_API_URL;

export const getRandomBeer = async (): Promise<AxiosResponse<Beer>> => {
  const [randomBeer] = await axios
    .get(`${baseApiUrl}/beers/random`)
    .then((response) => response.data);
  return randomBeer;
};

export const getBeerById = async (id: string): Promise<Beer> => {
  const [beer] = await axios
    .get<Beer[]>(`${baseApiUrl}/beers/${id}`)
    .then((response) => response.data);
  return beer;
};

export const getBeers = async (
  page = 1,
  itemsPerPage = 16,
  filters: Filters = {},
): Promise<Beer[]> => {
  const beerArray = await axios
    .get(
      `${baseApiUrl}/beers?page=${page}&per_page=${itemsPerPage}${
        filters.search ? '&beer_name=' + filters.search : ''
      }`,
    )
    .then((response) => response.data);
  return beerArray;
};
