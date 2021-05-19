import { Order, OrderBookItemData } from "../types";

export const accumulateSize = (orders: Order[]) =>
  orders
    .slice(0, 10)
    .reduce<OrderBookItemData[]>((acc, [price, size], idx, array) => {
      const accumulatedSize = array
        .slice(0, idx + 1)
        .reduce((sum, next) => sum + next[1], 0);

      return [...acc, { price, size, accumulatedSize }];
    }, []);
