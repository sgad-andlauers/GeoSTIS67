import React,{useContext, useState, useEffect} from 'react';
import { DataContext } from "../../../context/DataContext";
//import { PasswordContext } from "../../../context/GeneratedPassword";
import {Button, Typography}from '@material-ui/core';
import { Link } from "react-router-dom";
import axios from "axios";
import { 
    Grid,
    TextField} from "@material-ui/core";
import{Autocomplete} from "@material-ui/lab";
export default function AddUsers(props) {
    const {Groupes} = useContext(DataContext);
    //const {generatedPassword}= useContext(PasswordContext);
    /** Gestion du post vers l'api */
    const [password, setPassword]= useState("");
    const [addUsers, setAddUsers] = useState({
        nom:"",
        prenom:"",
        email:"",
        username:"",
        password: "",
        matricule:"",
    });
    
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
          }
          setAddUsers(addUsers);
    };
    //generateur de mot de passe 
    const onClickSetPassword =()=>{
        var chars = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        var string_length = 8;
        var charCount = 0;
        var numCount = 0;
        var rnum;
        var randomstring='';

        for (var i=0; i<string_length; i++) {
            if((Math.floor(Math.random() * 2) === 0) && numCount < 3 && charCount >= 5) {
                rnum = Math.floor(Math.random() * 10);
                randomstring += rnum;
                numCount += 1;
            } else {
                rnum = Math.floor(Math.random() * chars.length);
                randomstring += chars.substring(rnum,rnum+1);
                charCount += 1;
                
            }
        }
        setPassword(randomstring);
       
    };
    useEffect(() => {
        addUsers.password= password;
        setAddUsers(addUsers);
    }, [addUsers])
    console.log("user", addUsers);
    // post request api
    const PostUser = async()=>{
        await axios.post("https://dev.geo.sdis67.com/api/v1/public/utilisateur", addUsers).then(res => {
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
            <Grid item xs={12} >
                <Button color="primary" name="password"  id="password" onClick={onClickSetPassword} >
                       Générer le password
                </Button>
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
                    <Button color="primary" onClick={PostUser}>
                        <Typography variant="caption">Sauvegarder</Typography>
                    </Button>
                </Link>
            </Grid>
        </Grid>
    )
}
        