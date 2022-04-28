import type { Filters } from '@/models/filters.model';
import { getBeers } from '@/api/beer.api';

// We have to calculate the total number of beers since the API does not return this information
export const getTotalNumberOfBeers = async (filters: Filters = {}): Promise<number> => {
  let pageNumber = 1;
  const itemsPerPage = 80;
  let totalNumberOfBeers = 0;
  let resultLength = 0;

  do {
    const result = await getBeers(pageNumber, itemsPerPage, filters);
    resultLength = result.length;

    totalNumberOfBeers += resultLength;
    pageNumber++;
  } while (resultLength === itemsPerPage);

  return totalNumberOfBeers;
};
