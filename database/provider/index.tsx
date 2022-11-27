import React, { PropsWithChildren, useEffect, useState } from "react";

import { Text } from "native-base";

import { DatabaseContext, DatabaseContextProps } from "../context";

import { initializeDatabase } from "../config";

export function DatabaseProvider({ children }: PropsWithChildren) {
  const [database, setDatabase] = useState<DatabaseContextProps | null>(null);

  useEffect(() => {
    async function loadDatabase() {
      const db = await initializeDatabase();

      if (db) setDatabase({ database: db });
    }

    loadDatabase();
  }, []);

  return (
    <>
      {database && (
        <DatabaseContext.Provider value={database}>
          {children}
        </DatabaseContext.Provider>
      )}

      {!database && <Text>Loading Database</Text>}
    </>
  );
}
