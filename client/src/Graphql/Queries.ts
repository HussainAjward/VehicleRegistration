import { gql } from "@apollo/client";

export const GET_ALL_VEHICLES = gql`
  query getAllVehicles {
    getAllVehicles {
      id
      name
      address
      phonenumber
      licenseplate
      vclass
      capacity
      fueltype
      country
      myear
      colour
    }
  }
`;
