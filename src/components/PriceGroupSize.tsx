import React from "react";
import styles from "./PriceGroupSize.module.css";

interface Props {
  handlePriceGroupSizeChange: (value: number) => React.MouseEventHandler;
  priceGroupSize: number;
}

const priceGroups = [0.5, 1, 10];

export const PriceGroupSize: React.FC<Props> = ({
  handlePriceGroupSizeChange,
  priceGroupSize,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.buttonGroup}>
        <button
          onClick={handlePriceGroupSizeChange(
            priceGroups[priceGroups.indexOf(priceGroupSize) - 1]
          )}
          disabled={priceGroupSize === priceGroups[0]}
          className={styles.button}
        >
          -
        </button>
        <button
          onClick={handlePriceGroupSizeChange(
            priceGroups[priceGroups.indexOf(priceGroupSize) + 1]
          )}
          className={styles.button}
          disabled={priceGroupSize === priceGroups[priceGroups.length - 1]}
        >
          +
        </button>
      </div>
      <div className={styles.value}>{priceGroupSize}</div>
    </div>
  );
};
