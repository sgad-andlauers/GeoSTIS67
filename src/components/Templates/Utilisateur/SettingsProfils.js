 import React,{useContext, useState} from 'react';
import { DataContext } from "../../../context/DataContext";
//import { PasswordContext } from "../../../context/GeneratedPassword";
import {Button, Typography, makeStyles}from '@material-ui/core';
import { Link } from "react-router-dom";
import validator from 'validator'
import { 
    Grid,
    TextField} from "@material-ui/core";
import{Autocomplete} from "@material-ui/lab";
    
    
    const useHelperTextStyles = makeStyles(() => ({
        root: {
            color: "red"
        },
        display:{
            display:"none"
        }
    }));
    export default function SettingsProfils(props) {
        const {Groupes, selectedUser} = useContext(DataContext);
        const helperTextStyles = useHelperTextStyles();
        /** Gestion du post vers l'api */
        const [addUsers, setAddUsers] = useState({
            nom:selectedUser.lastName,
            prenom:selectedUser.firstName,
            email:selectedUser.email,
            username:selectedUser.userName,
            password:"",
            matricule:selectedUser.matricule,
            ancien_password:"",
        });
        
        const handleChangeText = (e) =>{
            let change = {...addUsers};
            if(e.target.name === "nom") {
                change.nom = e.target.value;
              }else if (e.target.name === "prenom"){
                change.prenom = e.target.value;
              }else if(e.target.name === "username") {
                change.username = e.target.value;
              }else if(e.target.name === "email"){
                change.email = e.target.value;
              }else if (e.target.name === "matricule"){
                change.matricule = e.target.value;
              }
              setAddUsers(change);
        };
        //generateur de mot de passe 
        /**const onClickSetPassword =()=>{
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
            setAddUsers({...addUsers, password: randomstring});
           
        };*/
        // post request api
        const PostUser = (e)=>{
           if(addUsers.prenom === "" || addUsers.nom  === "" || validator.isEmail(addUsers.email) === false|| addUsers.username === "" || addUsers.matricule === null){
                e.preventDefault();
                alert("Remplir tout les champs qui sont requis !")
           }else{
            console.log("Submit modificate User", addUsers);
           }
            /**await axios.post("https://dev.geo.sdis67.com/api/v1/public/utilisateur", addUsers).then(res => {
                console.log("res", res);
              });*/
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
                required
                error={addUsers.prenom === "" || addUsers.prenom.length < 3}
                id="firstName"
                name="prenom"
                label="Prénom"
                fullWidth
                variant="outlined"
                minLength="3"
                value={addUsers.prenom}
                onChange={(e)=>{handleChangeText(e)}}
                helperText={addUsers.prenom === "" ?"Ce champ est requis !":"Ce champ n'a pas le bon format !"}
                FormHelperTextProps={addUsers.prenom=== "" ||addUsers.prenom.length < 3 ?{
					classes:{
							root:helperTextStyles.root
						}}:{classes:{
							root:helperTextStyles.display
						}}
				}

            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                required
                error={addUsers.nom === "" || addUsers.nom.length < 3}
                id="lastName"
                name="nom"
                label="Nom"
                variant="outlined"
                fullWidth
                minLength="3"
                value={addUsers.nom}
                onChange={(e)=>{handleChangeText(e)}}
                helperText={addUsers.nom === "" ?"Ce champ est requis !":"Ce champ n'a pas le bon format !"}
                FormHelperTextProps={addUsers.nom=== "" ||addUsers.nom.length < 3 ?{
					classes:{
							root:helperTextStyles.root
						}}:{classes:{
							root:helperTextStyles.display
						}}
				}
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
                required
                error={addUsers.email ===""|| validator.isEmail(addUsers.email) === false}
                id="eMail"
                name="email"
                label="Email"
                type="email"
                pattern="[A-Za-z0-9._%+-]+@sdis67.com"
                variant="outlined"
                fullWidth
                value={addUsers.email}
                onChange={(e)=>{handleChangeText(e)}}
                helperText={addUsers.email === "" ?"Ce champ est requis !":"Ce champ n'a pas le bon format !"}
                FormHelperTextProps={addUsers.email=== "" || validator.isEmail(addUsers.email) === false?{
					classes:{
							root:helperTextStyles.root
						}}:{classes:{
							root:helperTextStyles.display
						}}
				}
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField

                id="telephone1"
                name="phoneOne"
                label="Téléphone portable"
                type="tel"
                fullWidth
                variant="outlined"
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField

                id="Telephone2"
                name="phoneTwo"
                label="Téléphone fixe"
                type="tel"
                variant="outlined"
                fullWidth
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                error={addUsers.username===""||addUsers.username.length < 3}
                id="userName"
                name="username"
                label="Nom d'utilisateur"
                fullWidth
                variant="outlined"
                minLength="3"
                required
                value={addUsers.username}
                onChange={(e)=>{handleChangeText(e)}}
                helperText={addUsers.username === "" ?"Ce champ est requis !":"Ce champ n'a pas le bon format !"}
                FormHelperTextProps={addUsers.username=== "" ||addUsers.username.length < 3?{
					classes:{
							root:helperTextStyles.root
						}}:{classes:{
							root:helperTextStyles.display
						}}
				}
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                disabled
                required
                error={addUsers.matricule=== null || addUsers.matricule.length < 3}
                type="number"
                inputMode="numeric"
                id="matricule"
                name="matricule"
                label="Matricule"
                variant="outlined"
                fullWidth
                minLength="3"
                value={addUsers.matricule}
                onChange={(e)=>{handleChangeText(e)}}
                helperText={addUsers.matricule === null ?"Ce champ est requis !":"Ce champ n'a pas le bon format !"}
                FormHelperTextProps={addUsers.matricule=== null || addUsers.matricule.length < 3 ?{
					classes:{
							root:helperTextStyles.root
						}}:{classes:{
							root:helperTextStyles.display
						}}
				}
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
                    <Button color="primary" name="password"  id="password" >
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
                    {/**<Link to="/Utilisateurs" style={{ textDecoration: "none" }}>*/}
                        <Button color="primary"  >
                            <Typography variant="caption" onClick={(e)=>PostUser(e)}>Sauvegarder</Typography>
                        </Button>
                    {/**</Link>*/}
                </Grid>
                </Grid>
        )
    }
            