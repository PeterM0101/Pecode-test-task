import { URL } from "../common/urls";

export const newURL = (
  field: string,
  page: number = 1,
  filtersObject: { [key: string]: string } | null = null
): string => {
  let filtersArray: [string, string][] = [];
  if (filtersObject !== null) {
    filtersArray = Array.from(
      Object.entries(filtersObject).filter((item) => item[1] !== "empty")
    );
  }
  const newSearchParams = new URLSearchParams([
    ["page", page.toString()],
    ...filtersArray,
  ]);
  return `${URL}/${field}?${newSearchParams}`;
};
