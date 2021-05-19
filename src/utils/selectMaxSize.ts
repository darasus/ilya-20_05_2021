export const selectMaxSize = ({
  asks,
  bids,
}: {
  asks: [number, number][];
  bids: [number, number][];
}) =>
  Math.max(
    bids.slice(0, 10).reduce((acc, [, size]) => acc + size, 0),
    asks.slice(0, 10).reduce((acc, [, size]) => acc + size, 0)
  );
