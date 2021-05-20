import { Order } from "../types";
import { getAsks } from "./getAsks";

describe("getAsks", () => {
  it("accumulates orders and orders by size", () => {
    const data: Order[] = [
      [12345.65, 100],
      [12345.67, 100],
      [12345.66, 100],
    ];

    expect(getAsks(data)[0].price).toEqual(data[1][0]);
  });
});
