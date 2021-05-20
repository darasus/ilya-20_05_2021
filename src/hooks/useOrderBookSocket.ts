import React from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";

export const useOrderBookSocket = () => {
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

  const isReady = React.useMemo(
    () => readyState === ReadyState.OPEN,
    [readyState]
  );

  React.useEffect(() => {
    sendJsonMessage({
      event: "subscribe",
      feed: "book_ui_1",
      product_ids: ["PI_XBTUSD"],
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { lastJsonMessage, isReady };
};
