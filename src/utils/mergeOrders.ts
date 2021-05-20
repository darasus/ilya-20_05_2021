import { Order } from "../types";
import { groupOrdersByPrice } from "./groupOrders";

export const mergeOrders = (
  state: Order[],
  incoming: Order[],
  priceGroupSize: number
) => {
  const groupedIncoming = groupOrdersByPrice(incoming, priceGroupSize);
  const result: Order[] = groupedIncoming;

  state.forEach(([price, size]) => {
    if (groupedIncoming.find((el) => el[0] === price)) {
      return;
    }

    result.push([price, size]);
  });

  return result.filter(([, size]) => size > 0);
};
