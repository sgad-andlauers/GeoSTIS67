import React,{useContext, useState} from 'react';
import { DataContext } from "../../../context/DataContext";
import {Button, Typography}from '@material-ui/core';
import { Link } from "react-router-dom";
import axios from "axios";
import { 
    Grid,
    TextField} from "@material-ui/core";
import{Autocomplete} from "@material-ui/lab";
export default function SettingsProfils(props) {
    const {Groupes, selectedUser} = useContext(DataContext);
    /** Gestion du post vers l'api */
    const [addUsers, setAddUsers] = useState({
        nom:selectedUser.lastName,
        prenom:selectedUser.firstName,
        email:selectedUser.email,
        username:selectedUser.username,
        password:"",
        matricule:selectedUser.matricule,
        ancien_password:"",
    });
    //console.warn("selectedUser", selectedUser)
    const handleChangeText = (e) =>{
        if(e.target.name === "nom") {
            addUsers.nom = e.target.value;
          }else if (e.target.name === "prenom"){
            addUsers.prenom = e.target.value;
          }else if(e.target.name === "username") {
            addUsers.username = e.target.value;
          }else if(e.target.name === "email"){
            addUsers.email= e.target.value;
          }else if (e.target.name === "matricule"){
            addUsers.matricule = e.target.value;
          }else if (e.target.name === "password"){
            addUsers.password = e.target.value;
          }else if (e.target.name === "ancien_password"){
            addUsers.ancien_password = e.target.value;
          }
          setAddUsers(addUsers);
    };
    const PutUser = async()=>{
        await axios.put("https://dev.geo.sdis67.com/api/v1/public/utilisateur", addUsers).then(res => {
            console.log("res", res);
          });
    }
    /** fonction example pour geree l'import de la donnee avec l'autocomplete */
      /*const handleChangeCities =(e, value, reason) => {
        console.log("addCitiesProfil")
        let array = [];
        value.map((d)=>array.push(d.inseeCode));
        setaddUsers({...addUsers, cities: array});
      }
      console.warn("Profil", addUsers)*/
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
            <TextField
                id="firstName"
                name="prenom"
                label="Prénom"
                fullWidth
                variant="outlined"
                value={addUsers.firstName}
                onChange={(e)=>{handleChangeText(e)}}
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                id="lastName"
                name="nom"
                label="Nom"
                variant="outlined"
                fullWidth
                value={addUsers.lastName}
                onChange={(e)=>{handleChangeText(e)}}
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
                id="eMail"
                name="email"
                label="Email"
                variant="outlined"
                fullWidth
                value={addUsers.email}
                onChange={(e)=>{handleChangeText(e)}}
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                disabled
                id="telephone1"
                name="phoneOne"
                label="Téléphone"
                type="tel"
                fullWidth
                variant="outlined"
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                disabled
                id="Telephone2"
                name="phoneTwo"
                label="Téléphone"
                type="tel"
                variant="outlined"
                fullWidth
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                id="userName"
                name="username"
                label="Nom d'utilisateur"
                fullWidth
                variant="outlined"
                value={addUsers.username}
                onChange={(e)=>{handleChangeText(e)}}
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                id="matricule"
                name="matricule"
                label="Matricule"
                variant="outlined"
                fullWidth
                value={addUsers.matricule}
                onChange={(e)=>{handleChangeText(e)}}
            />
            </Grid>
            <Grid item xs={12}>
            <Autocomplete
                multiple
                id="Uo"
                name="uo"
                options={Groupes}
                getOptionLabel={(option) => option.nom}
                renderInput={(params) => (
                <TextField
                    {...params}
                    variant="outlined"
                    label="Unitée Organisationnelle"
                />
                )}
            />
            </Grid>
            <Grid item xs={12}>
            <Typography variant="caption">A remplacer par la suite par un generateur de password </Typography>
            </Grid>
            <Grid item xs={12} sm={6}> 
            
            <TextField
                id="oldPWD"
                name="ancien_password"
                label="Ancien mot de passe"
                type="password"
                variant="outlined"
                fullWidth
                onChange={(e)=>{handleChangeText(e)}}
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                id="PWD"
                name="password"
                label="Mot de Passe"
                type="password"
                variant="outlined"
                fullWidth
                onChange={(e)=>{handleChangeText(e)}}
            />
            </Grid>
           
             <Grid item xs={12} sm={6}>
                <Link to="/Utilisateurs" style={{ textDecoration: "none" }}>
                    <Button color="secondary">
                        <Typography variant="caption">Annuler</Typography>
                    </Button>
                </Link>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Link to="/Utilisateurs" style={{ textDecoration: "none" }}>
                    <Button color="primary">
                        <Typography variant="caption">Sauvegarder</Typography>
                    </Button>
                </Link>
            </Grid>
        </Grid>
    )
}
        