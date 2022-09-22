import React, { FC } from "react";
import { Table } from "react-bootstrap";
import { TableSchema } from "../types/table";
import { v4 as uuid } from "uuid";

interface RenderTableProps {
  data: any;
  tableStructure: TableSchema[];
}

const RenderTable: FC<RenderTableProps> = ({ data, tableStructure }) => {
  return (
    <Table striped bordered>
      <thead>
        <tr className="text-center">
          {tableStructure &&
            tableStructure.map((headerItem) => (
              <th
                key={headerItem.title}
                style={{ width: `${headerItem.width}` }}
              >
                {headerItem.title}
              </th>
            ))}
        </tr>
      </thead>
      <tbody>
        {data.length > 0 &&
          data.map((row: any, index: number) => {
            return (
              <tr key={uuid()}>
                {tableStructure.map((col) => {
                  return col.fieldName === "#" ? (
                    <td key={uuid()}>{index + 1}</td>
                  ) : (
                    <td key={col.title}>{row[col.fieldName]}</td>
                  );
                })}
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
};

export default RenderTable;
