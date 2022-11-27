import React from "react";

import { DataSource } from "typeorm/browser";

export interface DatabaseContextProps {
  database: DataSource;
}

const DatabaseContext = React.createContext({} as DatabaseContextProps | null);

export { DatabaseContext };
