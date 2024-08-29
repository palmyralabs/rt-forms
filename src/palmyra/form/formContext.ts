import { StoreFactory, StoreOptions } from "@palmyralabs/palmyra-wire";
import { createContext } from "react";
import { IFieldGroupManager, IFormManager } from "./types";

export const StoreFactoryContext = createContext<StoreFactory<any, StoreOptions & any>>(null);
export const FormManagerContext = createContext<IFormManager>(null);
export const FieldGroupManagerContext = createContext<IFieldGroupManager>(null);