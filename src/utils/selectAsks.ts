import { accumulateSize } from "./accumulateSize";

export const selectAsks = (asks: [number, number][]) =>
  accumulateSize(asks).sort(({ price: a }, { price: b }) => b - a);
