import React, { useState, useContext, forwardRef } from "react";
import { DataContext } from "../../../context/DataContext";
import { makeStyles } from '@material-ui/core/styles';
import {
  Dialog,
  DialogContent,
  Checkbox,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button
} from "@material-ui/core";
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
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));
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

export default function ModificateRole(props) {
  const classes = useStyles();
  const { selectedRow, open, onClickClose, fullScreen } = props;
  const {dataPermissions, dataApp, dataChamps, dataRole}= useContext(DataContext);
  const Chargement = dataPermissions.default[1].Id;
  const Lecture = dataPermissions.default[2].Id;
  const Modification = dataPermissions.default[3].Id;
  const Creation = dataPermissions.default[4].Id;
  const Suppression = dataPermissions.default[5].Id;
  const Importance = dataPermissions.default[6].Id;
  const Requise = dataPermissions.default[7].Id;
  const [permissionChamps, setPermissionChamps] = useState([{
    id_champ:null,
    id_permissions:null,
    id_role:null,
    id_app:null,
  }]) ;
  console.log("app", dataApp);
  console.log("Champ", dataChamps);
  console.log("Role", dataRole);
  const [checked, setChecked]= useState({
    Down: false,
    Read: false,
    Modificate: false,
    Create: false,
    Delete: false,
    Need: false,
    Require: false,
  })
  const handleChange = (event) => {
    setChecked({ ...checked, [event.target.name]: event.target.checked });
  };
  const arrayCHampFirstApp =[];
  const array=[];
  dataChamps.default.map((data)=>{
      if(data.id_app === 1){
        arrayCHampFirstApp.push(data);
        console.log(arrayCHampFirstApp);
      }else{
        array.push(data);
      }
      return arrayCHampFirstApp;
  });
  
  const handleChargementChange = () => {
    return(
    <>
    <Checkbox checked={checked.Down} onChange={handleChange} name="Down" />
    </>
    )
  };
  const handleLectureChange = () => {
    return(
      <>
      <Checkbox checked={checked.Read} onChange={handleChange} name="Read" />
      </>
      )
  };
  const handleModificateChange = () => {
    return(
      <>
      <Checkbox checked={checked.Modificate} onChange={handleChange} name="Modificate" />
      </>
      )
  };
  const handleCreateChange = () => {
    return(
      <>
      <Checkbox checked={checked.Create} onChange={handleChange} name="Create" />
      </>
      )
  };
  const handleDeleteChange = () => {
    return(
      <>
      <Checkbox checked={checked.Delete} onChange={handleChange} name="Delete" />
      </>
      )
  };
  const handleNeededChange = () => {
    return(
      <>
      <Checkbox checked={checked.Need} onChange={handleChange} name="Need" />
      </>
      )
  };
  const handleRequieredChange = () => {
    return(
      <>
      <Checkbox checked={checked.Require} onChange={handleChange} name="Require" />
      </>
      )
  };

  return (
    <div style={{ maxWidth: "100%" }}>
     <Dialog
          fullScreen
          open={open}
          onClose={onClickClose}
          aria-labelledby="responsive-dialog-title"
          fullWidth
        >
          <DialogContent>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>{dataApp.default[0].Name}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <MaterialTable
                      columns={[
                        {
                          title: "Champs",
                          field: "Champ",
                        },
                        {
                          title: "Chargement",
                          field: "Chargement",
                          render: (rowData) => handleChargementChange(rowData)
                        },
                        {
                          title: "Lecture",
                          field: "Lecture",
                          render: (rowData) => handleLectureChange(rowData)
                        },
                        {
                          title: "Modification",
                          field: "Modification",
                          render: (rowData) => handleModificateChange(rowData)
                        },
                        {
                          title: "Création",
                          field: "Creation",
                          render: (rowData) => handleCreateChange(rowData)
                        },
                        {
                          title: "Supression",
                          field: "Supression",
                          render: (rowData) => handleDeleteChange(rowData)
                        },
                        {
                          title: "Importante",
                          field: "Importante",
                          render: (rowData) => handleNeededChange(rowData)
                        },
                        {
                          title: "Requise",
                          field: "Requise",
                          render: (rowData) => handleRequieredChange(rowData)
                        },
                      ]}
                      title=""
                      icons={tableIcons}
                      data={arrayCHampFirstApp}
                      components={{
                          Row: (props) => {
                          return <MTableBodyRow {...props} className={classes.row} />;
                          }
                      }}
                    />
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>{dataApp.default[1].Name}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <MaterialTable
                      columns={[
                        {
                          title: "Champs",
                          field: "Champ",
                        },
                        {
                          title: "Chargement",
                          field: "Chargement",
                          render: (rowData) => handleChargementChange(rowData)
                        },
                        {
                          title: "Lecture",
                          field: "Lecture",
                          render: (rowData) => handleLectureChange(rowData)
                        },
                        {
                          title: "Modification",
                          field: "Modification",
                          render: (rowData) => handleModificateChange(rowData)
                        },
                        {
                          title: "Création",
                          field: "Creation",
                          render: (rowData) => handleCreateChange(rowData)
                        },
                        {
                          title: "Supression",
                          field: "Supression",
                          render: (rowData) => handleDeleteChange(rowData)
                        },
                        {
                          title: "Importante",
                          field: "Importante",
                          render: (rowData) => handleNeededChange(rowData)
                        },
                        {
                          title: "Requise",
                          field: "Requise",
                          render: (rowData) => handleRequieredChange(rowData)
                        },
                      ]}
                      title=""
                      icons={tableIcons}
                      data={array}
                      components={{
                          Row: (props) => {
                          return <MTableBodyRow {...props} className={classes.row} />;
                          }
                      }}
                    />
                </AccordionDetails>
              </Accordion>
              <Button onClick={onClickClose}>Sauvegarde</Button>
          </DialogContent>
        </Dialog>
    </div>
  );
}
