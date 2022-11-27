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
  const [database, setDatabase] = useState<DatabaseContextProps | null>(null);

  useEffect(() => {
    async function loadDatabase() {
      const db = await initializeDatabase();

      if (db) setDatabase({ database: db });
    }

    loadDatabase();
  }, []);

  return (
    <NativeBaseProvider>
      <StatusBar barStyle="light-content" backgroundColor="black" />

      {database && (
        <DatabaseContext.Provider value={database}>
          <Routes />
        </DatabaseContext.Provider>
      )}

      {!database && <Text>Carregando banco de dados</Text>}
    </NativeBaseProvider>
  );
}
