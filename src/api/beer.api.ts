import axios, { type AxiosResponse } from 'axios';
import type { Beer } from '@/models/beer.model';

const baseApiUrl = import.meta.env.VITE_API_URL;

/**
 * Every query return an array of beers
 * When possible, use destructuring
 */

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
