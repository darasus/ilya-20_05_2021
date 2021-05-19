import { OrderBookData } from "../types";

export const isOrderBookData = (data: any): data is OrderBookData =>
  data?.bids !== undefined && data?.asks !== undefined;
