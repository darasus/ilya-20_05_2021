export type Order = [number, number];

export type OrderBookData = {
  bids: [number, number][];
  asks: [number, number][];
};

export type OrderBookItemType = {
  price: number;
  size: number;
  accumulatedSize: number;
};
