import "reflect-metadata";
import "react-native-get-random-values";

import React, { useState, useEffect } from "react";

import { NativeBaseProvider, StatusBar, Text } from "native-base";
import { Routes } from "./src/routes";

import {
  DatabaseContext,
  DatabaseContextProps,
} from "./src/context/databaseContext";

import { initializeDatabase } from "./database/config";

export default function App() {
  const [databaseLoaded, setDatabaseLoaded] = useState<boolean>(false);
  const [database, setDatabase] = useState<DatabaseContextProps | null>(null);

  useEffect(() => {
    async function load() {
      const db = await initializeDatabase();

      setDatabase({ database: db });

      setDatabaseLoaded(true);
    }

    load();
  }, []);

  return (
    <NativeBaseProvider>
      <StatusBar barStyle="light-content" backgroundColor="black" />

      {databaseLoaded && (
        <DatabaseContext.Provider value={database}>
          <Routes />
        </DatabaseContext.Provider>
      )}

      {!databaseLoaded && <Text>Carregando banco de dados</Text>}
    </NativeBaseProvider>
  );
}
