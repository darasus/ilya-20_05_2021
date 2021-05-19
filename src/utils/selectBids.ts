import { accumulateSize } from "./accumulateSize";

export const selectBids = (bids: [number, number][]) => accumulateSize(bids);
