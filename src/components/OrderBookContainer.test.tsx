import React from "react";
import { render, screen } from "@testing-library/react";
import { OrderBookItem } from "./OrderBookItem";

test("correctly renders OrderBookItem", () => {
  const props = {
    price: 100,
    size: 200,
    accumulatedSize: 300,
    maxSize: 400,
  };
  render(<OrderBookItem {...props} variant="green" />);
  const price = screen.getByText(/100/i);
  const size = screen.getByText(/200/i);
  const accumulatedSize = screen.getByText(/300/i);
  expect(price).toBeInTheDocument();
  expect(size).toBeInTheDocument();
  expect(accumulatedSize).toBeInTheDocument();
});
