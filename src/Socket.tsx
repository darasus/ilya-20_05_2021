import { useOrderBook } from "./utils/hooks/useOrderBook";
import { selectAsks } from "./utils/selectAsks";
import { selectBids } from "./utils/selectBids";
import { selectMaxSize } from "./utils/selectMaxSize";

export const WebSocketDemo = () => {
  const data = useOrderBook();
  const bids = selectBids(data.current.bids);
  const asks = selectAsks(data.current.asks);
  const maxSize = selectMaxSize(data.current);
  const width = 300;

  return (
    <div>
      <div style={{ width }}>
        Asks
        <div>
          {asks.map(({ price, size, accumulatedSize }) => {
            return (
              <div key={price}>
                <div>{`${price.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                })}-${size.toLocaleString()}-${accumulatedSize.toLocaleString()}`}</div>
                <div
                  style={{
                    width: (accumulatedSize / maxSize) * width,
                    backgroundColor: "black",
                    height: 2,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div style={{ width }}>
        Bids
        <div>
          {bids.map(({ price, size, accumulatedSize }) => {
            return (
              <div key={price}>
                <div>{`${price.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                })}-${size.toLocaleString()}-${accumulatedSize.toLocaleString()}`}</div>
                <div
                  style={{
                    width: (accumulatedSize / maxSize) * width,
                    backgroundColor: "black",
                    height: 2,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
