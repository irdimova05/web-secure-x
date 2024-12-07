"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";

export type ResultResponses = {
  login: string;
  password: string;
  statusCode: number;
}[];

type Result =
  | { status: string }
  | {
      responses: ResultResponses;
    }
  | undefined;
// Create a Context
const ResultContext = createContext<{
  result: Result;
  setResult: Dispatch<SetStateAction<Result>>;
} | null>(null);

export const ResultProvider = ({ children }: { children: ReactNode }) => {
  const [result, setResult] = useState<Result>();
  const context = useMemo(
    () => ({
      result,
      setResult,
    }),
    [result]
  );

  return (
    <ResultContext.Provider value={context}>{children}</ResultContext.Provider>
  );
};

export const useResult = () => {
  const context = useContext(ResultContext);
  if (context === null) {
    throw new Error("Cannot use `useResult` outside of `ResultProvider`");
  }

  return context;
};
