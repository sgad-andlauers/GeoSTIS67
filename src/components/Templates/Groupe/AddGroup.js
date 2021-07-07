import React, {useState, useContext,forwardRef}  from 'react';
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
  const classes = useStyles();
  const [checkGroupLeader, setCheckGroupLeader] = useState(false);
  const {Cie, dataApp, tableCommune, dataGroupe, Roles, Groupes} = useContext(DataContext);
  const [getZone, setGetZone] = useState(null);
  const [choixZone, setChoixZone] = useState([]);
  const [responsable, setResponsable] = useState('');
  const [gestionnaire, setGestionnaire] = useState('');
  const [membre, setMembre] = useState('');
  //const [checkGroupeParents, setCheckGroupeParents] = useState({})
  const handleChange = (event) => {
    setCheckGroupLeader(event.target.checked);
  };
  const handleChangeZone = (e)=>{
    setGetZone(e.target.value);
    if (e.target.value === "Cie"){
      setChoixZone(Cie);
    }else if( e.target.value === "Commune"){
      setChoixZone(tableCommune);
    }
  }; 
  const isChecked = (d)=>{
    //setCheckGroupLeader({...checkGroupeParents, name:d.titre})
    return d.checked;
  }
  const handleCheckGroupeParent = (e, d)=>{
  /*if(checkGroupeParents.name === e.target.name){
    setCheckGroupeParents({...checkGroupeParents, titre: e.target.checked})
  }*/
  d.checked =! d.checked;
  };
  const handleChangeResponsable = (event) => {
    setResponsable(event.target.value);
  };
  const getLevelResponsable = () => {
    
    Roles && Roles.map((d)=>{
      return(
        <>
          <Select
              labelId="Role-Select-Groupe"
              id="Role-Select-Groupe"
              value={responsable}
              onChange={handleChangeResponsable}
              label="Age"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={d.label}>{d.label}</MenuItem>
          </Select>
        </>
      )
    })
  };
  const handleChangeGestionnaire = (event) => {
    setGestionnaire(event.target.value);
  };
  const getLevelGestionnaire = () => {
    
      Roles && Roles.map((d)=>{
        return(
          <>
          <Select
              labelId="Role-Select-Groupe"
              id="Role-Select-Groupe"
              value={gestionnaire}
              onChange={handleChangeGestionnaire}
              label="Age"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={d.label}>{d.label}</MenuItem>
            </Select>
          </>
        )
      })
    };
    const handleChangeMembre = (event) => {
      setMembre(event.target.value);
    };
  const getLevelMembre = () => {
   
      Roles && Roles.map((d)=>{
      return(
        <>
         <Select
            labelId="Role-Select-Groupe"
            id="Role-Select-Groupe"
            value={membre}
            onChange={handleChangeMembre}
            label="Age"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={d.label}>{d.label}</MenuItem>
          </Select>
        </>
        )
      })
    };
  switch (stepIndex) {
    case 0:
      return (
          <Container maxWidth="sm">
            <form  noValidate autoComplete="off">
                <TextField id="name" label="Nom du groupe" variant="outlined" fullWidth/>
                <TextField id="Descriptif" label="Description" multiline fullWidth variant="outlined" style={{marginTop:"2%"}}/>
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
                            options={dataGroupe}
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
                <Accordion>
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
                      control={<Switch checked={isChecked(d)} onClick={(e)=>{handleCheckGroupeParent(e, d)}} name={d.titre} />}
                    />
                  </AccordionSummary>
                  <AccordionDetails>
                  <MaterialTable
                      columns={[
                        {
                          title: "Niveau",
                          field: "nom",
                        },
                        {
                          title: "Responsable",
                          field: "fonction",
                          render: (rowData) => getLevelResponsable(rowData)
                        },
                        {
                          title: "Gestionnaire",
                          field: "fonction",
                          render: (rowData) => getLevelGestionnaire(rowData)
                        },
                        {
                          title: "Membre",
                          field: "fonction",
                          render: (rowData) => getLevelMembre(rowData)
                        },
                      ]
                      }
                      title=""
                      icons={tableIcons}
                      data={Groupes}
                      parentChildData={(row, rows) => rows.find(a => {
                        console.log(a, row, row.subgroup.con)
                        return a.subgroup.includes(row.id)})}
                      components={{
                          Row: (props) => {
                          return <MTableBodyRow {...props} className={classes.row} />;
                          }
                      }}
                    />
                  </AccordionDetails>
                </Accordion>
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
        return "add membres"
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