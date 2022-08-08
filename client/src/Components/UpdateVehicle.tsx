import React, { useState } from 'react'
import { UPDATE_VEHICLE } from "../Graphql/Mutation"
import { useMutation } from "@apollo/client"
import "./UpdateVehicle.css";

function UpdateVehicle() {

    const [licenseplate, setLicenseplate] = useState("");
    const [currentphonenumber, setCurrentPhonenumber] = useState("");
    const [newphonenumber, setNewPhonenumber] = useState("");

    const [updateVehicle, { error }] = useMutation(UPDATE_VEHICLE);

    return (

        <div className="container-update">
            <div className="form-update">
                <div>
                    <h2>Update Vehicle</h2>
                </div>
                <form>
                    <div className="update-form-inner">
                        <div className="update-input-box">
                            <label className="update-form-label">License Plate</label>
                            <input type="text" onChange={(event) => { setLicenseplate(event.target.value); }}></input>
                        </div>
                        <div className="update-input-box">
                            <label className="update-form-label">Current Phone Number</label>
                            <input type="text" onChange={(event) => { setCurrentPhonenumber(event.target.value); }}></input>
                        </div>
                        <div className="update-input-box">
                            <label className="update-form-label">New Phone Number</label>
                            <input type="text" onChange={(event) => { setNewPhonenumber(event.target.value); }}></input>
                        </div>
                    </div>
                    <div>
                        <button className="input-button"
                            onClick={() => {
                                updateVehicle({
                                    variables: {
                                        licenseplate: licenseplate,
                                        oldphonenumber: currentphonenumber,
                                        newphonenumber: newphonenumber,
                                    },
                                });
                            }}
                        >
                            UPDATE
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default UpdateVehicle