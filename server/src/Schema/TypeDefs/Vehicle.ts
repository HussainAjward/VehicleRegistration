import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export const VehicleType = new GraphQLObjectType({
  name: "Vehicle",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    address: { type: GraphQLString },
    phonenumber: { type: GraphQLString },
    licenseplate: { type: GraphQLString },
    vclass: { type: GraphQLString },
    capacity: { type: GraphQLString },
    fueltype: { type: GraphQLString },
    country: { type: GraphQLString },
    myear: { type: GraphQLString },
    colour: { type: GraphQLString },
  }),
});
