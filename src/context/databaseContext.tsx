import React from "react";
import { DataSource } from "typeorm/browser";

export interface DatabaseContextProps {
  database: DataSource | null;
}

const DatabaseContext = React.createContext({} as DatabaseContextProps | null);

export { DatabaseContext };
