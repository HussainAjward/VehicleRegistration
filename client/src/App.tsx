import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "./App.css";
import RegisterVehicle from "./Components/RegisterVehicle";
import ListOfVehicles from "./Components/ListOfVehicles";
import UpdateVehicle from "./Components/UpdateVehicle";

function App() {
  const client = new ApolloClient({
    uri: "http://localhost:3001/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <>
      <ApolloProvider client={client}>
        <div>
          <br></br><br></br>
          <RegisterVehicle />
        </div>
        <div>
          <br></br><br></br>
          <ListOfVehicles />
        </div>
        <div>
          <br></br><br></br>
          <UpdateVehicle />
        </div>
        <br></br><br></br>
      </ApolloProvider>
    </>
  );
}

export default App;
