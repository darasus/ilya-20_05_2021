import { Order } from "../types";

export const getMaxSize = ({ asks, bids }: { asks: Order[]; bids: Order[] }) =>
  Math.max(
    bids.slice(0, 10).reduce((acc, [, size]) => acc + size, 0),
    asks.slice(0, 10).reduce((acc, [, size]) => acc + size, 0)
  );
