export interface CharacterSchema {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface FilterOptions {
  genderOptions: string[];
  speciesOptions: string[];
  statusOptions: string[];
}

export interface SelectedFiltersState {
  [key: string]: string;
}
