import { Order } from "../types";
import { mergeOrders } from "./mergeOrders";

describe("mergeOrders", () => {
  it("correctly merges current state with incoming", () => {
    const data: Order[] = [];
    const incoming: Order[] = [
      [12345.44, 96],
      [12345.67, 97],
      [12345.33, 65],
    ];

    expect(mergeOrders(data, incoming, 10)[0][1]).toBe(
      incoming[0][1] + incoming[1][1] + incoming[2][1]
    );
  });

  it("correctly merges current state with incoming with state data present", () => {
    const data: Order[] = [[12350, 100]];
    const incoming: Order[] = [
      [12345.44, 96],
      [12345.67, 97],
      [12345.33, 65],
    ];

    expect(mergeOrders(data, incoming, 10)[0][1]).toBe(
      incoming[0][1] + incoming[1][1] + incoming[2][1]
    );
  });
});
