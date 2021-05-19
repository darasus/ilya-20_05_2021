import clsx from "clsx";
import React from "react";
import styles from "./OrderBookItem.module.css";

interface Props {
  price: number;
  size: number;
  accumulatedSize: number;
  maxSize: number;
  variant: "red" | "green";
}

const width = 300;

export const OrderBookItem: React.FC<Props> = React.memo(
  function OrderBookItem({ price, size, accumulatedSize, maxSize, variant }) {
    return (
      <div className={styles.orderBookItem}>
        <div
          className={styles.orderBookItemSize}
          style={{
            width: (accumulatedSize / maxSize) * width,
            backgroundColor: variant,
          }}
        />
        <div
          className={clsx(
            styles.orderBookItemValue,
            styles.orderBookItemPriceValue
          )}
          style={{ color: variant }}
        >
          {price.toLocaleString(undefined, {
            minimumFractionDigits: 2,
          })}
        </div>
        <div className={styles.orderBookItemValue}>{size.toLocaleString()}</div>
        <div className={styles.orderBookItemValue}>
          {accumulatedSize.toLocaleString()}
        </div>
      </div>
    );
  }
);
