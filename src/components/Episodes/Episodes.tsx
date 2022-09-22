import React, { FC } from "react";
import RenderTableWithPaginator from "../RenderTableWithPaginator";
import { useAppSelector } from "../../store/hooks";
import { TableSchema } from "../../types/table";
import { episodesSlice } from "../../store/slices/episodes";

const Episodes: FC = () => {
  const { currentURL, currentPage, count, isLoading, episodes } =
    useAppSelector((state) => state.episodes);

  const episodesStructure: TableSchema[] = [
    { title: "#", width: "5%", fieldName: "#" },
    { title: "Episode Name", width: "35%", fieldName: "name" },
    { title: "Air date", width: "20%", fieldName: "air_date" },
    { title: "Episode code", width: "10%", fieldName: "episode" },
    { title: "Created", width: "30%", fieldName: "created" },
  ];

  return (
    <RenderTableWithPaginator
      currentURL={currentURL}
      currentPage={currentPage}
      count={count}
      isLoading={isLoading}
      data={episodes}
      actions={episodesSlice.actions}
      name="Episodes"
      tableSchema={episodesStructure}
    />
  );
};

export default Episodes;
