import React from "react";
import { Order } from "../types";
import { isOrderBookData } from "../utils/isOrderBookData";
import { mergeOrders } from "../utils/mergeOrders";
import { useOrderBookSocket } from "./useOrderBookSocket";

export type State = { bids: Order[]; asks: Order[] };

export const useOrderBook = (priceGroupSize: number) => {
  const { lastJsonMessage, isReady } = useOrderBookSocket();
  const data = React.useRef<State>({
    bids: [],
    asks: [],
  });

  React.useEffect(() => {
    data.current = { bids: [], asks: [] };
  }, [priceGroupSize]);

  React.useEffect(() => {
    if (isOrderBookData(lastJsonMessage)) {
      const { asks, bids } = lastJsonMessage;

      data.current = {
        bids: mergeOrders(data.current.bids, bids, priceGroupSize).sort(
          ([a], [b]) => b - a
        ),
        asks: mergeOrders(data.current.asks, asks, priceGroupSize).sort(
          ([a], [b]) => a - b
        ),
      };
    }
  }, [lastJsonMessage, priceGroupSize]);

  return { data, isReady };
};
