import React, {useState, useContext,forwardRef, useMemo}  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Container from "@material-ui/core/Container";
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {DataContext} from "../../../context/DataContext";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Accordion from '@material-ui/core/Accordion';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import _ from 'lodash';
import {
  AddBox,
  ArrowDownward,
  Check,
  ChevronLeft,
  ChevronRight,
  Clear,
  DeleteOutline,
  Edit,
  FilterList,
  FirstPage,
  LastPage,
  Remove,
  SaveAlt,
  Search,
  ViewColumn
} from "@material-ui/icons";
import MaterialTable, { MTableBodyRow } from "material-table";
 
const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    marginTop: "1%"
  },
}));

function getSteps() {
  return ['Création du groupe', 'Ajout des permissions', "Ajout d'une zone", "Ajout d'un membre "];
}

function GetStepContent(stepIndex) {
  /**------------------ set state --------------------*/
  const classes = useStyles();
  const [checkGroupLeader, setCheckGroupLeader] = useState(false);
  const {Cie, dataApp, tableCommune, dataGroupe, Roles, Groupes, Users, Fonctions, getCodeName} = useContext(DataContext);
  const [value, setValue] = useState(0); 

  const [getZone, setGetZone] = useState('');
  const [getNature, setGetNature] = useState('');
  const [getRole, setGetRole] = useState([{
    id_role:null,
    id_app:null,
  }]);
  const [getFonctions, setGetFonctions] = useState([
    {id_fonction:null,
      role:getRole
    }]);
  const [choixZone, setChoixZone] = useState([]);
  const [getUserInGroup, setUserInGroup]= useState([{
    id_user:null,
    id_fonction:null
  }]);
  const [saveAddGroup, setSaveAddGroup] = useState({
    nom:" cs Altorf",
    description:"",
    groupeParent:2,
    nature:getNature,
    zone:null,
    fonction:getFonctions,
    user:getUserInGroup
  });
  const useForceUpdate = function() {
    setValue((value) => value + 1); // update the state to force render
  }
  /**---------------- function for first step ------------------*/
  const handleChange = (event) => {
    setCheckGroupLeader(event.target.checked);
  };
  /**---------------- function for second step ---------------- */
  const handleChangeCodeName = (d) => {

    d.checked = !d.checked 
    console.log(d, dataApp)

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useForceUpdate();
 
  };
  const handleCheckCodeName = (d) => {
    d.checked = !d.checked;
    console.log(d, dataApp)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useForceUpdate();
  };

  const isChecked = (d) => {
    return d.checked;
  };


  /**---------------- function for third step ---------------*/
  const handleChangeZone = (e)=>{
    setGetZone(e.target.value);
    if (e.target.value === "Cie"){
      setChoixZone(Cie);
    }else if( e.target.value === "Commune"){
      setChoixZone(tableCommune);
    }
  }; 
  /**---------------- function for four step --------------- */
  const convertArrayToObject = (array, key) => {
    const initialValue = {};
    return array.reduce((obj, item) => {
      return {
        ...obj,
        [item[key]]: item.label,
      };
    }, initialValue);
  };
  const lookup = convertArrayToObject(Fonctions,'id');

  switch (stepIndex) {
    case 0:
      return (
          <Container maxWidth="sm">
            <form  noValidate autoComplete="off">
                <TextField id="name" label="Nom du groupe" variant="outlined" name="name" fullWidth/>
                <TextField id="Descriptif" label="Description" multiline name="description" fullWidth variant="outlined" style={{marginTop:"2%"}}/>
                <Select
                labelId="SelectNature"
                id="SelectNature"
                value={getNature}
                onChange={handleChangeZone}
                label="Nature"
                placeholder="Nature du groupe"
                fullWidth
                variant="outlined"
                style={{marginTop:"2%"}}
            >
                <MenuItem value={null}>
                    <em>None</em>
                </MenuItem>
                <MenuItem value={"UO"}>Unité organisationnelle</MenuItem>
                <MenuItem value={"groupe"}>Groupe</MenuItem>
            </Select>
                <Grid container spacing={3}>
                    <Grid>
                        <Checkbox
                            checked={checkGroupLeader}
                            onChange={handleChange}
                            style={{marginTop:"50%"}}
                        />
                    </Grid>
                    <Grid>
                        <Autocomplete
                            disabled={!checkGroupLeader}
                            id="GroupLeader"
                            options={Groupes}
                            name="groupeParent"
                            getOptionLabel={(option) => option.nom}
                            style={{ width: 520, marginTop: "6%" }}
                            renderInput={(params) => 
                            <TextField {...params} label="Groupe Parent" variant="outlined" />}
                        />
                    </Grid>
                </Grid>
            </form>
        </Container>
      );
    case 1:
      return (
        <Container maxWidth="xl">
          {dataApp && dataApp.map((d)=>{
            return (
              <Box key={d.id}>
                <Grid container spacing={3}>
                  <Grid item xs={2}>
                  <Checkbox  checked={isChecked(d)} onClick={() => {handleChangeCodeName(d)}} name={d.codeName} />
                  </Grid>
                  <Grid item xs={10} >
                      <Accordion disabled ={d.checked && d.checked === true ? false : true}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="permission-panel"
                        id={d.id}
                      >
                        <Typography className={classes.heading}>{d.titre}</Typography>
                        <Typography style={{marginLeft:"20%", marginTop:"2%"}} variant="caption">
                          héritage du groupe parent
                        </Typography>
                        <FormControlLabel 
                          style={{marginTop:"1%", marginLeft:"5%"}}
                          control={<Switch disabled={!checkGroupLeader} checked={isChecked(d)} onClick={(e)=>{handleCheckCodeName(e, d)}} name={d.titre} />}
                        />
                      </AccordionSummary>
                      <AccordionDetails>
                        {saveAddGroup && saveAddGroup.groupeParent === null ?(
                          <>
                            <Grid container >
                              <Grid item xs={12}>
                                  {Fonctions && Fonctions.map((data)=>{return(
                                    <>
                                      <Typography variant="caption" style={{marginLeft:"20%" }}>{data.label}</Typography>
                                    </>
                                  )})}
                                </Grid>
                              <Grid item xs={3}>
                                <Typography variant="caption">{saveAddGroup.nom}</Typography>
                              </Grid>
                              {Fonctions && Fonctions.map((data)=>{return(
                                <Grid item xs={3} >
                                  <Autocomplete
                                      id="permissionGroup"
                                      options={Roles}
                                      name="permissionGroup"
                                      style={{width:"40%", marginLeft:"20%"}}
                                      getOptionLabel={(option) => option.label}
                                      renderInput={(params) => 
                                      <TextField {...params} label="Rôles" variant="outlined" />}
                                  />
                                </Grid>
                              )})}
                             
                            </Grid>
                          </>
                        ):(
                          <>
                          <Grid container >
                            <Grid item xs={12}>
                                {Fonctions && Fonctions.map((data)=>{return(
                                  <>
                                    <Typography variant="caption" style={{marginLeft:"20%" }}>{data.label}</Typography>
                                  </>
                                )})}
                              </Grid>
                              
                                  <Grid item xs={3}>
                                    <Typography variant="caption">{saveAddGroup.nom}</Typography>
                                  </Grid>
                                  {Fonctions && Fonctions.map((data)=>{return(
                                    <Grid item xs={3} >
                                      <Autocomplete
                                          id="permissionGroup"
                                          options={Roles}
                                          name="permissionGroup"
                                          style={{width:"40%", marginLeft:"20%"}}
                                          getOptionLabel={(option) => option.label}
                                          renderInput={(params) => 
                                          <TextField {...params} label="Rôles" variant="outlined" />}
                                      />
                                    </Grid>
                                  )})}
                             
                          </Grid>
                          
                        </>
                        )}
                      </AccordionDetails>
                    </Accordion>
                  </Grid>
                </Grid>
                
              </Box>
            )   
          })}
        </Container>
      );
    case 2:
      return (
        <Container maxWidth="sm">
            <Select
                labelId="SelectCategorie"
                id="SelectCategorie"
                value={getZone}
                onChange={handleChangeZone}
                label="Catégorie"
                fullWidth
                variant="outlined"
            >
                <MenuItem value={null}>
                    <em>None</em>
                </MenuItem>
                <MenuItem value={"Departement"}>Département</MenuItem>
                <MenuItem value={"Commune"}>Commune</MenuItem>
                <MenuItem value={"Quartier"}>Quartier</MenuItem>
                <MenuItem value={"Section"}>Section</MenuItem>
                <MenuItem value={"Cie"}>Compagnie</MenuItem>
                <MenuItem value={"UT"}>Unité territoriale</MenuItem>
                <MenuItem value={"CIS"}>CIS</MenuItem>
                <MenuItem value={"Cs"}>Centre de Secours</MenuItem>
            </Select>
            <Autocomplete
                disabled={ getZone === null}
                id="choixZone"
                options={choixZone}
                multiple
                getOptionLabel={(option) => option.nom}
                style={{ marginTop: "6%" }}
                fullWidth
                renderInput={(params) => 
                    <TextField {...params} label="choix de la zone" variant="outlined" />}
            />
    </Container>
      );
      case 3:
        return ( <MaterialTable
          columns={[
            {
              title: "Nom",
              field: "nom",
              editable: 'never'
            },
            {
              title: "Email",
              field: "email",
              editable: 'never'
            },
            {
              title: "fonction",
              field: "fonction",
              lookup:lookup
            }
          ]}
          title=""
          icons={tableIcons}
          data={Users}
          cellEditable={{
            onCellEditApproved: (newValue, oldValue, rowData, columnDef) => {
              return new Promise((resolve, reject) => {
                console.log('newValue: ' + newValue);
                setTimeout(resolve, 1000);
              });
            }
          }}
          options={{
            selection: true
          }}
        />
        )
    default:
      return 'Unknown stepIndex';
  }
}

export default function HorizontalLabelPositionBelowStepper() {
    
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
 

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Box className={classes.instructions}>{GetStepContent(activeStep)}</Box>
            <div style={{marginTop: "3%"}}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Précedent
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Fin' : 'Suivant'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}