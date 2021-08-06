import React , {useContext, forwardRef, useState}from 'react';
import { DataContext } from "../../../context/DataContext";
import { makeStyles } from '@material-ui/core/styles';
import {Button, ButtonGroup, Fab}from '@material-ui/core';
import { Link } from "react-router-dom";
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
    ViewColumn,
    CheckCircle,
    Cancel,
    Add,
    RemoveCircle 
  } from "@material-ui/icons";
  import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import {RiUserSettingsFill, RiSettings3Fill} from "react-icons/ri"
import MaterialTable, { MTableBodyRow } from "material-table";


const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
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


export default function UserTemplate(props) {
    const classes = useStyles();
    const {Users, setSelectedUser} = useContext(DataContext);

    const handleSetSelectedRow =(evt, selectedRow)=>{
      setSelectedUser(selectedRow);
    };
    const GetParameters = () =>{
      return (
          <ButtonGroup color="primary" variant="text">
            <Button color="primary">
            <Link to="/SettingsPassword" style={{ textDecoration: "none",}}>
                <RiSettings3Fill size = "24px" />
            </Link>
            </Button>
            {/** suppression du profil */}
            <Button>
              <DeleteOutline color="secondary"/>
            </Button>
            {/* rendre le profil inActif*/}
            <Button>
              <RemoveCircle color="secondary"/>
            </Button>
            <Button color="primary">
            <Link to="/SettingsProfils" style={{ textDecoration: "none"}}>
                <RiUserSettingsFill size = "24px" />
            </Link>
            </Button>
          </ButtonGroup>
      )
    }
    const DateParses= (row)=>{
      return(
      <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          format="yyyy/MM/dd"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          defaultValue={row.last_login}
        />
        </MuiPickersUtilsProvider>
        </>
    
      )}
    return (
        <div> 
            <MaterialTable
                columns={[
                  {field: 'id', title: 'Id', width: 70},
                  {field: 'lastName', title: 'Nom', width: 70},
                  {field: 'firstName', title: 'Prénom', width: 130},
                  {field: 'email', title: 'Email',width: 130},
                  {field: 'last_login:', title:'Dernière connexion', width: 130, type: 'date', render: (row)=> {DateParses(row)}},
                  {field: 'status', title:'Statut', width: 70, render: (rowData)=> {return rowData.status ===true?(<CheckCircle style={{ color: '#03DA03'}}/>):(<Cancel style={{color: '#EB0404'}}/>)}},
                  {field:'Setup',title:'', width: 70, render: ()=> GetParameters()},
                ]}
                title="Liste des Utilisateurs"
                icons={tableIcons}
                data={Users}
                components={{
                    Row: (props) => {
                    return <MTableBodyRow {...props} className={classes.row} />;
                    }
                }}
                onRowClick={(evt, selectedRow) =>
                  handleSetSelectedRow(evt, selectedRow)
                }
            />
            <Link to="/AddProfils" style={{ textDecoration: "none" }}>
              <Fab color="primary" aria-label="addProfils" style={{marginLeft:"90%", marginTop:"1%"}}>
                <Add />
              </Fab>
            </Link>
        </div>
        
    );
}