const initialState = {
  start: false,
  questionMark: "?",
  clickedArray: [],
  pairedArray: [],
  actualCarId: null,
  startTimeStamp: 0,
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CAR_CLICKED":
      return {
        ...state,
        clickedArray:
          state.start === false
            ? []
            : state.clickedArray.includes(action.payload.carBrand) === false &&
              state.clickedArray.length % 2 !== 0
            ? []
            : state.pairedArray.includes(action.payload.carBrand)
            ? []
            : [...state.clickedArray, action.payload.carBrand],
        pairedArray: state.clickedArray.includes(action.payload.carBrand)
          ? [...state.pairedArray, action.payload.carBrand]
          : [...state.pairedArray],
        actualCarId: action.payload.carId,
      };
    case "START_CLICKED":
      return {
        ...state,
        start: true,
        startTimeStamp: Date.now(),
      };
    default:
      return state;
  }
};
export default rootReducer;
