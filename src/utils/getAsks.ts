import { Order } from "../types";
import { accumulateSize } from "./accumulateSize";

export const getAsks = (asks: Order[]) =>
  accumulateSize(asks).sort(({ price: a }, { price: b }) => b - a);
