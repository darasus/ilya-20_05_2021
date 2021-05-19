import { Order, OrderBookItemType } from "../types";

export const accumulateSize = (orders: Order[]) =>
  orders
    .slice(0, 10)
    .reduce<OrderBookItemType[]>((acc, [price, size], i, arr) => {
      const accumulatedSize = arr
        .slice(0, i + 1)
        .reduce((sum, next) => sum + next[1], 0);

      return [...acc, { price, size, accumulatedSize }];
    }, []);
