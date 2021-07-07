import React , {useContext, forwardRef} from 'react';
import { DataContext } from "../../../context/DataContext";
import { makeStyles, Typography, Box} from '@material-ui/core';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Accordion from '@material-ui/core/Accordion';
import {Checkbox} from "@material-ui/core";
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

  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
 
}));
export default function RoleTemplate(props) {
    const classes = useStyles();
    const {dataApp, Champs,  selectedRow} = useContext(DataContext);
    const handleChange = (row) => {
      row.checked = !row.checked
    };

    const isChecked = (row) => {
      return row.checked
    }
    const handleChargementChange = (row) => {
      const name = row.id.toString()
      return(
      <>
      <Checkbox  checked={isChecked(row)} onClick={() => {handleChange(row)}} name={name} />
      </>
      )
    };
    const handleLectureChange = (row) => {
      const name = row.id.toString()
      return(
        <>
        <Checkbox  checked={isChecked(row)} onClick={() => {handleChange(row)}} name={name} />
        </>
        )
    };
    const handleModificateChange = (row) => {
      const name = row.id.toString()
      return(
        <>
        <Checkbox  checked={isChecked(row)} onClick={() => {handleChange(row)}} name={name} />
        </>
        )
    };
    const handleCreateChange = (row) => {
      const name = row.id.toString()
      return(
        <>
        <Checkbox  checked={isChecked(row)} onClick={() => {handleChange(row)}} name={name} />
        </>
        )
    };
    const handleDeleteChange = (row) => {
      const name = row.id.toString()
      return(
        <>
        <Checkbox  checked={isChecked(row)} onClick={() => {handleChange(row)}} name={name} />
        </>
        )
    };
    const handleNeededChange = (row) => {
      const name = row.id.toString()
      return(
        <>
        <Checkbox  checked={isChecked(row)} onClick={() => {handleChange(row)}} name={name} />
        </>
        )
    };
    const handleRequieredChange = (row) => {
      const name = row.id.toString()
      return(
        <>
        <Checkbox checked={isChecked(row)} onClick={() => {handleChange(row)}} name={name} />
        </>
        )
    };

    return (
        <div> 
            <Box>
                {selectedRow && (<Typography variant="h6" style={{marginRight:"70%", marginBottom:"2%"}}> Rôle sélectionné : {selectedRow.label} </Typography>)}
            </Box>
            <main> 
          {dataApp && dataApp.map((d)=>{
            return (
              <Box key={d.id}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="permission-panel"
                    id={d.id}
                  >
                    <Typography className={classes.heading}>{d.titre} {d.id}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                  <MaterialTable
                      columns={[
                        {
                          title: "Champs",
                          field: "champ",
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
                      ]
                      }
                      title=""
                      icons={tableIcons}
                      data={Champs.filter(data=>data.id_app === d.id)}
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
          })
          }
          </main>
           
        </div>
    );
}
