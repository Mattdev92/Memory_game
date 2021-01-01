import React, { useState } from "react";
import "./Car.css";
import { connect } from "react-redux";
import { carClicked } from "../actions";

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
      className="carItem"
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
        <img src={carBrand} alt="car"></img>
      ) : start ? (
        localChange ? (
          <img src={carBrand} alt="car"></img>
        ) : (
          <div className="yellow">{questionMark}</div>
        )
      ) : (
        <div className="yellow">{questionMark}</div>
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
