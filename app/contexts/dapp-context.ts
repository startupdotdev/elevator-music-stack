import { createContext } from "react";

interface DappContextType {}

// We must initialize this context with a proper TenderContextType to avoid
// Runtime errors
export const DappContext = createContext<DappContextType>(
  {} as DappContextType
);
