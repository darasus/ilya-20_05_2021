import { OrderBookContainer } from "./components/OrderBookContainer";
import { useOrderBook } from "./hooks/useOrderBook";
import { getAsks } from "./utils/getAsks";
import { getBids } from "./utils/getBids";
import { getMaxSize } from "./utils/getMaxSize";
import React from "react";
import { PriceGroupSize } from "./components/PriceGroupSize";

export const App = () => {
  const [priceGroupSize, setPriceGroupSize] = React.useState<number>(0.5);
  const { data, isReady } = useOrderBook(priceGroupSize);
  const bids = getBids(data.current.bids);
  const asks = getAsks(data.current.asks);
  const maxSize = getMaxSize(data.current);

  const handlePriceGroupSizeChange = React.useCallback((value: number) => {
    return () => setPriceGroupSize(value);
  }, []);

  if (!isReady) return null;

  return (
    <div>
      <PriceGroupSize
        handlePriceGroupSizeChange={handlePriceGroupSizeChange}
        priceGroupSize={priceGroupSize}
      />
      <OrderBookContainer
        orders={asks}
        label="Sell orders"
        maxSize={maxSize}
        variant="red"
      />
      <OrderBookContainer
        orders={bids}
        label="Buy orders"
        maxSize={maxSize}
        variant="green"
      />
    </div>
  );
};
