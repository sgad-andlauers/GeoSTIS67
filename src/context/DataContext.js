import React, {createContext, useState, useEffect } from "react";
import axios from "axios";
import * as dataUsers from '../data/tableUser.json';
import * as dataChamps from '../data/tableChamps.json';
import {Permissions, Roles, Fonctions, Cie, Champs, Groupes} from "../data/Model";

export const DataContext = createContext();
const token = "d38d2c5ca7b3ec88108834dc5ca28d3cb72cb765689c20194e3430f839fe8158";
const Api = {
  apiDataApp : "https://dev.geo.sdis67.com/api/v1/app/",
  apiDataCommune : "https://dev.geo.sdis67.com/api/v1/app/erp/communes",
  apiDjangoPermissions: "https://dev.geo.sdis67.com/api/v1/public/permissions",
};


export default function DataContextProvider(props) {
  const [dataApp, setDataApp] = useState(null);
  const [tableCommune, setTableCommune] = useState(null);
  const [dataGroupe, setDataGroupe] = useState([]);
  const [permissionsDjango, setPermissinsDjango] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);

  /** ---------------------------- questionnement de l'api --------------------------------- */
                    /** ----------------- Api App --------------- */
  const getAPIDataApp = async () => {
    const res = await axios.get(Api.apiDataApp,  {headers: {
      'Authorization': `token ${token}`
    }});
    setDataApp(res.data.data)
  };
  useEffect(() => {
    console.log("getApiApp");
    getAPIDataApp();
  }, []);
                    /** ----------------- Api communes ---------- */
  const getAPIDataCommune = async () => {
    const res = await axios.get(Api.apiDataCommune);
      setTableCommune(res.data.data.communes)
  };
  useEffect(() => {
    console.log("getCommune");
      getAPIDataCommune();
  }, []);
  
                      /** ----------------- Api communes ---------- */
  const getDjangoPermissions = async () => {
    const res = await axios.get(Api.apiDjangoPermissions);
    setPermissinsDjango(res.data.data.permissions)
  };
  useEffect(() => {
    console.log("getCommune");
    getDjangoPermissions();
  }, []);
  /** -------------------------------- fin du questionnement de l'api ------------------------------ */
  return (
    <DataContext.Provider
      value={{
        Permissions, 
        Roles, 
        Fonctions,
        Cie,
        Champs,
        Groupes,
        dataApp,
        tableCommune,
        dataUsers,
        dataChamps,
        dataGroupe,
        permissionsDjango,
        selectedRow,
        setSelectedRow,
        setDataGroupe

      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}