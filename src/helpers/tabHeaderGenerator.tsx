import React from "react";

export interface TabHeaderItem {
  width: string;
  title: string;
}

export const tabHeaderGenerator = (headers: TabHeaderItem[]) => {
  return (
    <thead>
      <tr className="text-center">
        {headers &&
          headers.map((header) => (
            <th key={header.title} style={{ width: `${header.width}` }}>
              {header.title}
            </th>
          ))}
      </tr>
    </thead>
  );
};
