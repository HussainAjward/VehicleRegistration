import { gql } from "@apollo/client";

export const REGISTER_VEHICLE = gql`
  mutation registerVehicle(
    $name: String!
    $address: String!
    $phonenumber: String!
    $licenseplate: String!
    $vclass: String!
    $capacity: String!
    $fueltype: String!
    $country: String!
    $myear: String!
    $colour: String!
  ) {
    registerVehicle(
      name: $name
      address: $address
      phonenumber: $phonenumber
      licenseplate: $licenseplate
      vclass: $vclass
      capacity: $capacity
      fueltype: $fueltype
      country: $country
      myear: $myear
      colour: $colour
    ) {
      id
      name
    }
  }
`;

export const UPDATE_VEHICLE = gql`
  mutation updateVehicle(
    $licenseplate: String!
    $oldphonenumber: String!
    $newphonenumber: String!
  ) {
    updateVehicle(
      licenseplate: $licenseplate
      oldphonenumber: $oldphonenumber
      newphonenumber: $newphonenumber
    ) {
      message
    }
  }
`;

export const DELETE_VEHICLE = gql`
  mutation deleteVehicle($id: ID!) {
    deleteVehicle(id: $id) {
      message
    }
  }
`;
