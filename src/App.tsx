import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import { Navigate, Route, Routes } from "react-router-dom";
import CharactersPage from "./pages/CharactersPage";
import EpisodesPage from "./pages/EpisodesPage";
import Locations from "./pages/Locations";
import MyWatchListPage from "./pages/MyWatchListPage";
import OverlayWithSpinner from "./UI/OverlayWithSpinner";
import { useAppSelector } from "./store/hooks";
import ErrorToast from "./UI/ErrorToast";

function App() {
  const { isLoading: charactersIsLoading, error: charactersError } =
    useAppSelector((state) => state.characters);
  const { isLoading: episodesIsLoading, error: episodesError } = useAppSelector(
    (state) => state.episodes
  );
  const { isLoading: locationsIsLoading, error: locationsError } =
    useAppSelector((state) => state.locations);
  const [showError, setShowError] = useState(false);
  const isLoading =
    charactersIsLoading || episodesIsLoading || locationsIsLoading;
  const error = charactersError || episodesError || locationsError;

  useEffect(() => {
    if (!!error) setShowError(!!error);
  }, [error]);

  return (
    <div>
      {isLoading && <OverlayWithSpinner />}
      <ErrorToast
        errorMessage={error ? error : ""}
        show={showError}
        setShow={() => {
          setShowError(false);
        }}
      />
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/characters" replace />} />
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/episodes" element={<EpisodesPage />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/watch-list" element={<MyWatchListPage />} />
      </Routes>
    </div>
  );
}

export default App;
