import React, {createContext, useState, useEffect } from "react";
import axios from "axios";
import {Permissions, Roles, Fonctions, Cie, Champs, Groupes, Users} from "../data/Model";

export const DataContext = createContext();
const token = "8db091b6a212501bedc12d17110779557b02cc2d835082ebe7d80056aad562c2";
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
  const [getCodeName, setGetCodeName] = useState(null);

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
  const code_name =(array)=>{
    let codeName=[];
    array && array.map((d)=>{
      codeName.push(d.codeName);
      return setGetCodeName(codeName)
    });
  }
  useEffect(() => {
    code_name(dataApp);
  }, [dataApp]);
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
        Users,
        dataApp,
        tableCommune,
        dataGroupe,
        permissionsDjango,
        selectedRow,
        getCodeName,
        setSelectedRow,
        setDataGroupe

      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}