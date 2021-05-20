import { isOrderBookData } from "./isOrderBookData";

describe("isOrderBookData.ts", () => {
  it("if correct order book data provided should return true", () => {
    expect(isOrderBookData({ asks: [], bids: [] })).toEqual(true);
    expect(isOrderBookData({ asks: [[123, 123]], bids: [[123, 123]] })).toEqual(
      true
    );
  });

  it("if incorrect order book data provided should return true", () => {
    expect(isOrderBookData({ ask: [], bids: [] })).toEqual(false);
    expect(isOrderBookData({ asks: [], bid: [] })).toEqual(false);
    expect(isOrderBookData({})).toEqual(false);
    expect(isOrderBookData({ key: 1 })).toEqual(false);
  });
});
