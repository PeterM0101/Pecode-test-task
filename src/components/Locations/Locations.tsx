import React, { FC } from "react";
import RenderTableWithPaginator from "../RenderTableWithPaginator";
import { useAppSelector } from "../../store/hooks";
import { TableSchema } from "../../types/table";
import { locationsSlice } from "../../store/slices/locations";

interface LocationsProps {}

const Locations: FC<LocationsProps> = () => {
  const { currentURL, currentPage, count, isLoading, locations } =
    useAppSelector((state) => state.locations);

  const locationsStructure: TableSchema[] = [
    { title: "#", width: "5%", fieldName: "#" },
    { title: "Location Name", width: "30%", fieldName: "name" },
    { title: "Type", width: "15%", fieldName: "type" },
    { title: "Dimension", width: "25%", fieldName: "dimension" },
    { title: "Created", width: "25%", fieldName: "created" },
  ];

  return (
    <RenderTableWithPaginator
      currentURL={currentURL}
      currentPage={currentPage}
      count={count}
      isLoading={isLoading}
      data={locations}
      actions={locationsSlice.actions}
      name="Locations"
      tableSchema={locationsStructure}
    />
  );
};

export default Locations;
