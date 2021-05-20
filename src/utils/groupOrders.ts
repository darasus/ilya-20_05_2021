import { Order } from "../types";

export const groupOrdersByPrice = (orders: Order[], priceGroupSize: number) => {
  return orders.reduce<Order[]>((acc, [price, size]) => {
    const groupedPrice = Math.ceil(price / priceGroupSize) * priceGroupSize;
    const order = acc.find(([price]) => price === groupedPrice);

    if (order) {
      const i = acc.findIndex(([price]) => price === order[0]);

      acc[i] = [groupedPrice, order[1] + size];

      return acc;
    }

    return [...acc, [groupedPrice, size]];
  }, []);
};
