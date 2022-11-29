import { DataSource } from "typeorm/browser";

import { Client } from "../entities/client";

import { creatingClientTable1669512896420 } from "../migrations/1669512896420-creatingClientTable";

import { addingCreateAndUpdateColumnsToClient1669679394998 } from "../migrations/1669679394998-addingCreateAndUpdateColumnsToClient";

const dataSource = new DataSource({
  database: "aaa",
  driver: require("expo-sqlite"),
  entities: [Client],
  migrations: [
    creatingClientTable1669512896420,
    addingCreateAndUpdateColumnsToClient1669679394998,
  ],
  // migrationsRun: true,
  // synchronize: false,
  type: "expo",
});

async function initializeDatabase(): Promise<DataSource | null> {
  const connection = await dataSource.initialize();

  if (connection.isInitialized) {
    connection.runMigrations();
    connection.synchronize();
  }

  return connection;
}

export { initializeDatabase };
