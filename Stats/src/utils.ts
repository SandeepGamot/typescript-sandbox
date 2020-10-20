export const dateStringToDate = (dateStr: string): Date => {
  let parts = dateStr.split("/").map((part: string): number => parseInt(part));
  return new Date(parts[2], parts[1] - 1, parts[0]);
};
