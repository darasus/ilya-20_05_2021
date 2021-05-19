import React from "react";
import { OrderBookItemType } from "../types";
import { OrderBookItem } from "./OrderBookItem";
import styles from "./OrderBookContainer.module.css";

interface Props {
  label: string;
  maxSize: number;
  orders: OrderBookItemType[];
  variant: "red" | "green";
}

const width = 300;

export const OrderBookContainer: React.FC<Props> = ({
  label,
  orders,
  maxSize,
  variant,
}) => {
  return (
    <div className={styles.orderBookContainer} style={{ width }}>
      <div className={styles.label}>{label}</div>
      <div>
        {orders.map(({ price, size, accumulatedSize }) => {
          return (
            <OrderBookItem
              key={price}
              price={price}
              size={size}
              accumulatedSize={accumulatedSize}
              variant={variant}
              maxSize={maxSize}
            />
          );
        })}
      </div>
    </div>
  );
};
