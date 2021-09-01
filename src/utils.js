import { NUM_COLS, ITEM_RATIO } from "./constants";

export const getItemDimensions = (gridDimensions) => {
  const width = gridDimensions.width / NUM_COLS;
  const height = width * ITEM_RATIO;
  return { width, height };
};

export const swap = (arr, from, to) => {
  const _arr = arr.slice(0);
  const val = _arr[from];
  _arr.splice(from, 1);
  _arr.splice(to, 0, val);
  return _arr;
};
