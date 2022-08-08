import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./Schema";
import cors from "cors";
import { createConnection } from "typeorm";
import { rootCertificates } from "tls";
import { Vehicles } from "./Entities/Vehicles";

const main = async () => {
  await createConnection({
    type: "mysql",
    database: "vehicleregistration",
    username: "root",
    password: "root",
    logging: true,
    synchronize: false,
    entities: [Vehicles],
  });

  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(
    "/graphql",
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  );

  app.listen(3001, () => {
    console.log("SERVER RUNNING ON PORT 3001");
  });
};

main().catch((err) => {
  console.log(err);
});
