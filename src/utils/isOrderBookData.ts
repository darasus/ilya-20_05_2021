import { OrderBookData } from "../types";

export function isOrderBookData(data: any): data is OrderBookData {
  return data?.bids !== undefined && data?.asks !== undefined;
}
