import { Order } from "../types";
import { getMaxSize } from "./getMaxSize";

describe("getMaxSize", () => {
  it("gets max size from all combined bids and asks", () => {
    const asks: Order[] = [
      [12345.67, 99],
      [12345.67, 100],
      [12345.67, 98],
    ];
    const bids: Order[] = [
      [12345.67, 96],
      [12345.67, 97],
      [12345.67, 65],
    ];

    expect(getMaxSize({ bids, asks })).toEqual(
      asks[0][1] + asks[1][1] + asks[2][1]
    );
  });
});
