import { DataSource } from "typeorm/browser";

import { Client } from "../entities/client";

import { creatingClientTable1669512896420 } from "../migrations/1669512896420-creatingClientTable";

import { addingCreateAndUpdateColumnsToClient1669679394998 } from "../migrations/1669679394998-addingCreateAndUpdateColumnsToClient";

const dataSource = new DataSource({
  database: "bancoarrombado",
  driver: require("expo-sqlite"),
  entities: [Client],
  migrations: [
    creatingClientTable1669512896420,
    addingCreateAndUpdateColumnsToClient1669679394998,
  ],
  migrationsRun: true,
  synchronize: false,
  type: "expo",
});

async function initializeDatabase(): Promise<DataSource | null> {
  return await dataSource.initialize();
}

export { initializeDatabase };
