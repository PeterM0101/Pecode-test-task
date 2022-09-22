import React, { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Container, Row } from "react-bootstrap";
import Character from "./Character";
import { fetchData } from "../../services/fetchData";
import Paginator from "../../UI/Paginator";
import { newURL } from "../../helpers/newUrl";

import DetailsCharacterInfo from "./DetailsCharacterInfo";
import { CharacterSchema } from "../../types/characters";
import {
  changeCurrentURL,
  setCurrentPage,
} from "../../store/slices/characters";

interface CharactersProps {}

const Characters: FC<CharactersProps> = () => {
  const [showCharacterInfo, setShowCharacterInfo] = useState<boolean>(false);
  const [currentCharacter, setCurrentCharacter] =
    useState<CharacterSchema | null>(null);
  const dispatch = useAppDispatch();
  const {
    characters,
    isLoading,
    currentPage,
    count,
    currentURL,
    filtersState,
  } = useAppSelector((state) => state.characters);

  const handlePageChange = (page: number) => {
    dispatch(changeCurrentURL(newURL("character", page, filtersState)));
    dispatch(setCurrentPage(page));
  };

  const getCharacterInfoHandler = (character: CharacterSchema) => {
    setShowCharacterInfo(true);
    setCurrentCharacter(character);
  };

  useEffect(() => {
    if (currentURL) dispatch(fetchData(currentURL));
    // eslint-disable-next-line
  }, [currentURL]);

  return (
    <Container className="mt-5 d-flex flex-column align-items-center">
      {currentCharacter && (
        <DetailsCharacterInfo
          show={showCharacterInfo}
          handleClose={() => setShowCharacterInfo(false)}
          info={currentCharacter}
        />
      )}
      {characters.length > 0 ? (
        <>
          <Paginator
            onPageChange={handlePageChange}
            totalCount={count}
            siblingCount={1}
            currentPage={currentPage}
            pageSize={20}
          />
          <Row>
            {characters.map((character) => (
              <Character
                key={character.id}
                image={character.image}
                name={character.name}
                status={character.status}
                character={character}
                getCharacterInfo={getCharacterInfoHandler}
              />
            ))}
          </Row>
        </>
      ) : (
        !isLoading && <h3>List of characters is empty!</h3>
      )}
    </Container>
  );
};

export default Characters;
