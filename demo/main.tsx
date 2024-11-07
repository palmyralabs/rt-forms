import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { StoreFactoryContext } from '../src/main.ts'
import { PalmyraStoreFactory } from '@palmyralabs/palmyra-wire';

const AppStoreFactory = new PalmyraStoreFactory({ baseUrl: "/api/palmyra" });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreFactoryContext.Provider value={AppStoreFactory} >
    <App />
    </StoreFactoryContext.Provider>
  </React.StrictMode>,
)
