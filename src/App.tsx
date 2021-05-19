import { OrderBookContainer } from "./components/OrderBookContainer";
import { useOrderBook } from "./utils/hooks/useOrderBook";
import { getAsks } from "./utils/getAsks";
import { getBids } from "./utils/getBids";
import { getMaxSize } from "./utils/getMaxSize";

export const App = () => {
  const { data, isReady } = useOrderBook();
  const bids = getBids(data.current.bids);
  const asks = getAsks(data.current.asks);
  const maxSize = getMaxSize(data.current);

  if (!isReady) return null;

  return (
    <div>
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
