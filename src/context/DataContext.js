import React, {createContext, useState, useEffect } from "react";
import axios from "axios";
import {Permissions, Roles, Fonctions, Cie, Champs, Users, Groupes} from "../data/Model";

export const DataContext = createContext();
const token = "0232491183faeaf72363c0c6a6edbde9328b740b75a1c64253a5ab033ccdc7b4";
const Api = {
  apiDataApp : "https://dev.geo.sdis67.com/api/v1/app/",
  apiDataCommune : "https://dev.geo.sdis67.com/api/v1/app/erp/communes",
  apiDjangoPermissions: "https://dev.geo.sdis67.com/api/v1/public/permissions",
  apiDataUserGet: "https://dev.geo.sdis67.com/api/v1/public/tousUtilisateurs",
  apiDataGetGroupe: "https://dev.geo.sdis67.com/api/v1/public/groupes",
};


export default function DataContextProvider(props) {
  const [dataApp, setDataApp] = useState(null);
  const [tableCommune, setTableCommune] = useState(null);
  //const [Groupes, setGroupes] = useState([]);
  const [permissionsDjango, setPermissinsDjango] = useState(null);
  //const [Users, setUsers] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedRow, setSelectedRow]= useState(null);

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
  /** ----------------- Api Zone ---------- */
  const getAPIDataCommune = async () => {
    const res = await axios.get(Api.apiDataCommune);
      setTableCommune(res.data.data.communes)
  };
  useEffect(() => {
    console.log("getCommune");
      getAPIDataCommune();
  }, []);
  /** ----------------- Api Users ---------- */
  /**const getAPIDataUsers = async () => {
    const res = await axios.get(Api.apiDataUserGet);
    let userObject = [];
    res && res.data.data.map((d)=>{
      return(
      userObject.push(d[0])
      
      )
    });
  
    setUsers(userObject);
  };
  useEffect(() => {
    console.log("getUser");
    getAPIDataUsers();
  }, []);*/
  /**-------------------Api Groupe GetList -------------- */
  /**const getAPIDataGroupe = async () => {
    const res = await axios.get(Api.apiDataGetGroupe);
      setGroupes(res.data.data);
  };
  useEffect(() => {
    console.log("getGroupe");
      getAPIDataGroupe();
  }, []);*/
  /** ----------------- Api DjangoPerm ---------- */
  const getDjangoPermissions = async () => {
    const res = await axios.get(Api.apiDjangoPermissions);
    setPermissinsDjango(res.data.data.permissions)
  };
  useEffect(() => {
    console.log("getDjangoPerm");
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
        permissionsDjango,
        selectedUser,
        setSelectedUser,
        setSelectedRow,
        selectedRow,

      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}