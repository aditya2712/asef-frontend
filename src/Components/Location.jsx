import React, { Component, createContext } from "react";

const GetLocation = createContext();

var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
};

function success(pos) {
    var crd = pos.coords;

    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
}

function errors(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

export default class Location extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lat: 0,
            long: 0,
        };
    }

    componentDidMount() {
        if (navigator.geolocation) {
            navigator.permissions
            .query({ name: "geolocation" })
            .then(function (result) {
                if (result.state === "granted") {
                } else if (result.state === "prompt") {
                    navigator.geolocation.getCurrentPosition(success, errors, options);
                } 
                result.onchange = function () {
                    console.log(result.state);
                };
            });
        } else {
            alert("Sorry Not available!");
        }

        navigator.geolocation.getCurrentPosition((crt)=>{
            this.setState({
                lat: crt.coords.latitude,
                long: crt.coords.longitude,
            }); 
        });
    }

    render() {
        return (
        <div>
            <div>
                <GetLocation.Provider value={this.state}>
                </GetLocation.Provider>
            </div>
        </div>
        );
    }
}

export {GetLocation};