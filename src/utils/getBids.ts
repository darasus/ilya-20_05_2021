import { Order } from "../types";
import { accumulateSize } from "./accumulateSize";

export const getBids = (bids: Order[]) => accumulateSize(bids);
