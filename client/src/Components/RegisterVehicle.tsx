import React, { useState } from "react";
import { REGISTER_VEHICLE } from "../Graphql/Mutation";
import { useMutation } from "@apollo/client";
import "./RegisterVehicle.css";

function RegisterVehicle() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [licenseplate, setLicenseplate] = useState("");
  const [vclass, setVclass] = useState("");
  const [capacity, setCapacity] = useState("");
  const [fueltype, setFueltype] = useState("");
  const [country, setCountry] = useState("");
  const [myear, setMyear] = useState("");
  const [colour, setColour] = useState("");

  const [registerVehicle, { error }] = useMutation(REGISTER_VEHICLE);
  return (
    <section>
      <div className="container">
        <div className="register-form">
          <div>
            <h2>Register Vehicle</h2>
          </div>
          <form>
            <div className="form-inner">
              <div className="input-box">
                <label className="form-label">Name</label>
                <input type="text" onChange={(event) => { setName(event.target.value); }}></input>
              </div>
              <div className="input-box">
                <label className="form-label">Address</label>
                <input type="text" onChange={(event) => { setAddress(event.target.value); }}></input>
              </div>
              <div className="input-box">
                <label className="form-label">Phone Number</label>
                <input type="number" onChange={(event) => { setPhonenumber(event.target.value); }}></input>
              </div>
              <div className="input-box">
                <label className="form-label">License Plate</label>
                <input type="text" onChange={(event) => { setLicenseplate(event.target.value); }}></input>
              </div>
              <div className="input-box">
                <label className="form-label">Class of Vehicle</label>
                <input type="text" onChange={(event) => { setVclass(event.target.value); }}></input>
              </div>
              <div className="input-box">
                <label className="form-label">Cylinder Capacity</label>
                <input type="text" onChange={(event) => { setCapacity(event.target.value); }}></input>
              </div>
              <div className="input-box">
                <label className="form-label">Fuel Type</label>
                <input type="text" onChange={(event) => { setFueltype(event.target.value); }}></input>
              </div>
              <div className="input-box">
                <label className="form-label">Country of Origin</label>
                <input type="text" onChange={(event) => { setCountry(event.target.value); }}></input>
              </div>
              <div className="input-box">
                <label className="form-label">Year of Manufacture</label>
                <input type="number" onChange={(event) => { setMyear(event.target.value); }}></input>
              </div>
              <div className="input-box">
                <label className="form-label">Colour</label>
                <input type="text" onChange={(event) => { setColour(event.target.value); }}></input>
              </div>
            </div>
            <div>
              <button className="input-button"
                onClick={() => {
                  registerVehicle({
                    variables: { name: name, address: address, phonenumber: phonenumber, licenseplate: licenseplate, vclass: vclass, capacity: capacity, fueltype: fueltype, country: country, myear: myear, colour: colour },
                  });
                }}
              >
                Register Vehicle
              </button>
            </div>
          </form>
        </div>
      </div>


    </section>
  );
}

export default RegisterVehicle;
