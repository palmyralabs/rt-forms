import { StoreFactory } from "@palmyralabs/palmyra-wire";
import { createContext } from "react";
import { IFormFieldManager, IFormManager } from "./types";

export const StoreFactoryContext = createContext<StoreFactory<any>>(null);
export const FormManagerContext = createContext<IFormManager>(null);
export const FormFieldManagerContext = createContext<IFormFieldManager>(null);