import { useEffect, useState } from "react";
import {
  changeCurrentURL,
  setCount,
  setError,
  setFilterOptions,
  setIsLoading,
} from "../../../store/slices/characters";
import { fillFilterOptions } from "../../../helpers/fillFilterOptions";
import { Info } from "../../../types/info";
import { CHARACTERS_URL } from "../../../common/urls";
import { useAppDispatch } from "../../../store/hooks";
import { CharacterSchema } from "../../../types/characters";

const InitCharactersFilters = () => {
  const [characters, setCharacters] = useState<CharacterSchema[]>([]);
  const [info, setInfo] = useState<Info | null>(null);
  const [url, setUrl] = useState<string>(`${CHARACTERS_URL}/?page=1`);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setIsLoading(true));

    const getCharacters = async (url: string) => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setCharacters((prevCharacters) => {
          return [...prevCharacters, ...data.results];
        });
        setInfo(data.info);
        setUrl(data.info.next);
      } catch (e) {
        if (e instanceof TypeError) {
          dispatch(setIsLoading(false));
          dispatch(setError("Something went wrong..."));
        }
      }
    };

    if (url) {
      getCharacters(url);
    } else {
      const { genderOptions, speciesOptions, statusOptions } =
        fillFilterOptions(characters);
      dispatch(setIsLoading(false));
      dispatch(
        setFilterOptions({
          genderOptions: [...genderOptions, "empty"],
          speciesOptions: [...speciesOptions, "empty"],
          statusOptions: [...statusOptions, "empty"],
        })
      );
      dispatch(setCount(info?.count!));
      dispatch(changeCurrentURL(`${CHARACTERS_URL}/?page=1`));
    }
    // eslint-disable-next-line
  }, [url]);
  return null;
};

export default InitCharactersFilters;
