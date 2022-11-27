import { DataSource } from "typeorm/browser";

import { Client } from "../entities/client";

import { creatingClientTable1669512896420 } from "../migrations/1669512896420-creatingClientTable";

const dataSource = new DataSource({
  database: "appdb",
  driver: require("expo-sqlite"),
  entities: [Client],
  migrations: [creatingClientTable1669512896420],
  migrationsRun: true,
  type: "expo",
});

async function initializeDatabase(): Promise<DataSource | null> {
  return await dataSource.initialize();
}

export { initializeDatabase };
