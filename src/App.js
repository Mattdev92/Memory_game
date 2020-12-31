import "./App.css";
import React from "react";
import Car from "./components/Car";
import Audi from "./assets/audi.svg";
import BMW from "./assets/bmw.svg";
import Chevrolet from "./assets/chevrolet.svg";
import Mercedes from "./assets/mercedes-benz.svg";
import Opel from "./assets/opel.svg";
import Volksw from "./assets/volkswagen.svg";
import {connect} from 'react-redux';
import {startClicked} from './actions';
const carArray = [Audi, BMW, Chevrolet, Mercedes, Opel, Volksw,Audi, BMW, Chevrolet, Mercedes, Opel, Volksw];
const carId = [1,2,3,4,5,6,7,8,9,10,11,12];
class App extends React.Component {
    
  render() {
    const {startClicked}=this.props;
    return (
        <>
        <button onClick={startClicked} className="button">START</button>
        <div id="App">
        {carArray
          .sort(() => Math.random() - 0.5)
          .map((carBrand,i) => (
            <Car carBrand={carBrand} carId={carId.i}/>
          ))}
      </div>
      </>
    );
  }
}
const mapDispatchToProps = (dispatch)=>({
  startClicked: () =>dispatch(startClicked(),),
})
export default connect(null,mapDispatchToProps)(App);
