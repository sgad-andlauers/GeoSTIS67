import React, {createContext} from "react";
//import axios from "axios";
import * as dataUsers from '../data/tableUser.json';
import * as dataApp from '../data/tableApp.json';
import * as dataPermissions from '../data/tablePermission.json';
import * as dataFonction from '../data/tableFonction.json';
import * as dataChamps from '../data/tableChamps.json';
import * as dataRole from '../data/tableRole.json';

export const DataContext = createContext();



export default function DataContextProvider(props) {

    /** ---------------------------- questionnement de l'api --------------------------------- */
 

    /** -------------------------------- fin du questionnement de l'api ------------------------------ */
    return (
        <DataContext.Provider
          value={{
           dataApp,
           dataPermissions,
           dataUsers,
           dataFonction,
           dataChamps,
           dataRole,
          }}
        >
          {props.children}
        </DataContext.Provider>
      );
}