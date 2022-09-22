import { CharacterSchema } from "../types/characters";

interface FiltersI {
  genderOptions: string[];
  statusOptions: string[];
  speciesOptions: string[];
}

export const fillFilterOptions = (characters: CharacterSchema[]) => {
  const defaultFilters: FiltersI = {
    genderOptions: [],
    statusOptions: [],
    speciesOptions: [],
  };

  characters.forEach(({ gender, status, species }: CharacterSchema) => {
    if (!defaultFilters.genderOptions.includes(gender))
      defaultFilters.genderOptions.push(gender);
    if (!defaultFilters.statusOptions.includes(status))
      defaultFilters.statusOptions.push(status);
    if (!defaultFilters.speciesOptions.includes(species))
      defaultFilters.speciesOptions.push(species);
  });

  return {
    ...defaultFilters,
  };
};
