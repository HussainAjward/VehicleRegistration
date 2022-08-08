import { GraphQLList } from "graphql";
import { VehicleType } from "../TypeDefs/Vehicle";
import { Vehicles } from "../../Entities/Vehicles";

export const GET_ALL_VEHICLES = {
  type: new GraphQLList(VehicleType),
  resolve() {
    return Vehicles.find();
  },
};