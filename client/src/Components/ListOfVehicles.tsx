import React from 'react'
import { GET_ALL_VEHICLES } from '../Graphql/Queries'
import { useQuery, useMutation } from '@apollo/client'
import { DELETE_VEHICLE } from '../Graphql/Mutation'
import "./ListOfVehicles.css";

function ListOfVehicles() {

  const { data } = useQuery(GET_ALL_VEHICLES);

  const [deleteVehicle, { error }] = useMutation(DELETE_VEHICLE);

  return (
    <div>
      <div className="card-list">
        <div className="card-header">
          <div>
            <h2>Registered Vehicles List</h2>
          </div>
        </div>
        <div className="card-body">
          <table className="content-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Phone Number</th>
                <th>License Plate</th>
                <th>Class of Vehicle</th>
                <th>Cylinder Capacity</th>
                <th>Fuel Type</th>
                <th>Country of Origin</th>
                <th>Year of Manufacture</th>
                <th>Colour</th>
                <th>Action</th>
              </tr>
            </thead>
            {data &&
              data.getAllVehicles.map((user: any) => {
                return (
                  <tbody>
                    <tr>
                      <td>{user.name}</td>
                      <td>{user.address}</td>
                      <td>{user.phonenumber}</td>
                      <td>{user.licenseplate}</td>
                      <td>{user.vclass}</td>
                      <td>{user.capacity}</td>
                      <td>{user.fueltype}</td>
                      <td>{user.country}</td>
                      <td>{user.myear}</td>
                      <td>{user.colour}</td>
                      <td>
                        <button onClick={() => { deleteVehicle({ variables: { id: user.id } }) }}> Delete Vehicle</button>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
          </table>
        </div>
      </div>
    </div>
  );
}

export default ListOfVehicles