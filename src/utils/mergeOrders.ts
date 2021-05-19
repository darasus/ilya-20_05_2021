import { Order } from "../types";

export const mergeOrders = (state: Order[], incoming: Order[]) => {
  const result: Order[] = incoming;

  state.forEach(([price, size]) => {
    if (incoming.find((el) => el[0] === price)) {
      return;
    }

    result.push([price, size]);
  });

  return result.filter(([, size]) => size > 0);
};
