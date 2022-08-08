import { GraphQLID, GraphQLString } from "graphql";
import { VehicleType } from "../TypeDefs/Vehicle";
import { MessageType } from "../TypeDefs/Messages";
import { Vehicles } from "../../Entities/Vehicles";

export const REGISTER_VEHICLE = {
  type: VehicleType,
  args: {
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
  },
  async resolve(parent: any, args: any) {
    const {
      name,
      address,
      phonenumber,
      licenseplate,
      vclass,
      capacity,
      fueltype,
      country,
      myear,
      colour,
    } = args;
    await Vehicles.insert({
      name,
      address,
      phonenumber,
      licenseplate,
      vclass,
      capacity,
      fueltype,
      country,
      myear,
      colour,
    });
    return args;
  },
};

export const UPDATE_VEHICLE = {
  type: MessageType,
  args: {
    licenseplate: { type: GraphQLString },
    oldphonenumber: { type: GraphQLString },
    newphonenumber: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { licenseplate, oldphonenumber, newphonenumber } = args;
    const vehicle = await Vehicles.findOneBy({ licenseplate: licenseplate });

    if (!vehicle) {
      throw new Error("VEHICLE DOES NOT EXIST");
    }
    const userphonenumber = vehicle?.phonenumber;

    if (oldphonenumber === userphonenumber) {
      await Vehicles.update(
        { licenseplate: licenseplate },
        { phonenumber: newphonenumber }
      );

      return { successful: true, message: "PHONE NUMBER UPDATED" };
    } else {
      throw new Error("PHONE NUMBER DO NOT MATCH");
    }
  },
};

export const DELETE_VEHICLE = {
  type: MessageType,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(parent: any, args: any) {
    const id = args.id;
    await Vehicles.delete(id);

    return { successful: true, message: "DELETE SUCCESSFUL" };
  },
};
