export const carClicked = (carBrand,carId) => {
    return {
       type: 'CAR_CLICKED',
       payload: {carBrand,carId},
    };
 };
export const startClicked = () => {
    return {
       type: 'START_CLICKED',
       payload: {},
    };
 };