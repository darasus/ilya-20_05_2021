import React from "react";
import useWebSocket from "react-use-websocket";
import { Order } from "../../types";
import { isOrderBookData } from "../isOrderBookData";
import { mergeOrders } from "../mergeOrders";

export type State = { bids: Order[]; asks: Order[] };

export const useOrderBook = () => {
  const data = React.useRef<State>({
    bids: [],
    asks: [],
  });

  const { sendMessage, lastJsonMessage } = useWebSocket(
    "wss://www.cryptofacilities.com/ws/v1"
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
    sendMessage(
      JSON.stringify({
        event: "subscribe",
        feed: "book_ui_1",
        product_ids: ["PI_XBTUSD"],
      })
    );
  }, []);

  return data;
};
