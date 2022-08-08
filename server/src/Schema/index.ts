import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GET_ALL_VEHICLES } from "./Queries/Vehicle";
import {
  REGISTER_VEHICLE,
  DELETE_VEHICLE,
  UPDATE_VEHICLE,
} from "./Mutations/Vehicle";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllVehicles: GET_ALL_VEHICLES,
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    registerVehicle: REGISTER_VEHICLE,
    deleteVehicle: DELETE_VEHICLE,
    updateVehicle: UPDATE_VEHICLE,
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
