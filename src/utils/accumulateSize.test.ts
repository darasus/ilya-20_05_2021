import { Order } from "../types";
import { accumulateSize } from "./accumulateSize";

describe("accumulateSize", () => {
  it("for each new accumulated order item increments accumulated size based on all previous items", () => {
    const data: Order[] = [
      [12345.67, 100],
      [12345.67, 100],
      [12345.67, 100],
    ];
    const orders = accumulateSize(data);

    expect(orders[0].accumulatedSize).toEqual(100);
    expect(orders[1].accumulatedSize).toEqual(200);
    expect(orders[2].accumulatedSize).toEqual(300);
  });

  it("takes only first 10 items in the order book list", () => {
    const data: Order[] = [
      [12345.67, 100],
      [12345.67, 100],
      [12345.67, 100],
      [12345.67, 100],
      [12345.67, 100],
      [12345.67, 100],
      [12345.67, 100],
      [12345.67, 100],
      [12345.67, 100],
      [12345.67, 100],
      [12345.67, 100],
      [12345.67, 100],
      [12345.67, 100],
    ];
    const orders = accumulateSize(data);

    expect(orders.length).toEqual(10);
  });
});
