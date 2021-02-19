import React, { useState } from "react";
import { connect } from "react-redux";
import { carClicked } from "../actions";
import styles from "./Car.module.scss";

const Car = ({
  carBrand,
  questionMark,
  start,
  carClicked,
  pairedArray,
  carId,
  actualCarId,
}) => {
  const [localChange, setLocalChange] = useState(false);
  return (
    <div
      className={styles.carItem}
      onClick={() => {
        !pairedArray.includes(carBrand) &&
          actualCarId !== carId &&
          carClicked(carBrand, carId);
        start && setLocalChange(true);
        setTimeout(() => {
          setLocalChange(false);
        }, 1000);
      }}
    >
      {pairedArray.includes(carBrand) ? (
        <img src={carBrand} alt="car" className={styles.carImage}></img>
      ) : start ? (
        localChange ? (
          <img src={carBrand} alt="car" className={styles.carImage}></img>
        ) : (
          <div className={styles.container}>{questionMark}</div>
        )
      ) : (
        <div className={styles.container}>{questionMark}</div>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  const { questionMark, click, pair, start, pairedArray, actualCarId } = state;
  return { questionMark, click, pair, start, pairedArray, actualCarId };
};
const mapDispatchToProps = (dispatch) => ({
  carClicked: (carBrand, carId) => dispatch(carClicked(carBrand, carId)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Car);
