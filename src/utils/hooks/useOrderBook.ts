import React from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { Order } from "../../types";
import { isOrderBookData } from "../isOrderBookData";
import { mergeOrders } from "../mergeOrders";

export type State = { bids: Order[]; asks: Order[] };

export const useOrderBook = () => {
  const data = React.useRef<State>({
    bids: [],
    asks: [],
  });

  const { lastJsonMessage, sendJsonMessage, readyState } = useWebSocket(
    "wss://www.cryptofacilities.com/ws/v1",
    {
      retryOnError: true,
      onError(event) {
        // silent error
        console.error(event);
      },
    }
  );

  React.useEffect(() => {
    if (isOrderBookData(lastJsonMessage)) {
      const { asks, bids } = lastJsonMessage;

      data.current = {
        bids: mergeOrders(data.current.bids, bids).sort(([a], [b]) => b - a),
        asks: mergeOrders(data.current.asks, asks).sort(([a], [b]) => a - b),
      };
    }
  }, [lastJsonMessage]);

  React.useEffect(() => {
    sendJsonMessage({
      event: "subscribe",
      feed: "book_ui_1",
      product_ids: ["PI_XBTUSD"],
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isReady = React.useMemo(
    () => readyState === ReadyState.OPEN,
    [readyState]
  );

  return { data, isReady };
};
