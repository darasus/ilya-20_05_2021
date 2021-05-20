import { Order } from "../types";
import { groupOrdersByPrice } from "./groupOrdersByPrice";

describe("groupOrdersByPrice", () => {
  it("groups and rounds prices by price group size", () => {
    const asks: Order[] = [
      [12345.67, 99],
      [12345.67, 100],
      [12345.67, 98],
    ];

    expect(groupOrdersByPrice(asks, 0.5)[0][0]).toEqual(12346);
    expect(groupOrdersByPrice(asks, 10)[0][0]).toEqual(12350);
  });
});
