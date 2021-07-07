import React , {useContext, forwardRef}from 'react';
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
    Person,
    MoreVert,
    Add
  } from "@material-ui/icons";
  import {BiReset} from "react-icons/bi"
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
export default function DashBoard(props) {
    const classes = useStyles();
    const {dataUsers} = useContext(DataContext);
    const GetParameters = () =>{
      return (
          <ButtonGroup color="primary" variant="text">
            <Link to="/SettingsPassword" style={{ textDecoration: "none" }}>
             <BiReset size = "24px"/>
            </Link>
            <Button>
              <MoreVert/>
            </Button>
            <Link to="/SettingsProfils" style={{ textDecoration: "none" }}>
             <Person/>
            </Link>
          </ButtonGroup>
      )
    }
    
    return (
        <div> 
            <MaterialTable
                columns={[
                  {field: 'id', title: 'Id', width: 70},
                  {field: 'Nom', title: 'Nom', width: 130},
                  {field: 'Prenom', title: 'Prénom', width: 130},
                  {field: 'Email', title: 'Email',width: 130},
                  {field: 'LastLogin', title:'Dernière connexion', width: 70},
                  {field: 'Status', title:'Statut', width: 70, render: (rowData)=> {return rowData.Status ==="actif"?(<CheckCircle style={{ color: '#03DA03'}}/>):(<Cancel style={{color: '#EB0404'}}/>)}},
                  {field:'Setup',title:'', width: 130, render: ()=> GetParameters()},
                ]}
                title="Liste des Utilisateurs"
                icons={tableIcons}
                data={dataUsers.default}
                components={{
                    Row: (props) => {
                    return <MTableBodyRow {...props} className={classes.row} />;
                    }
                }}
            />
            <Link to="/AddProfils" style={{ textDecoration: "none" }}>
              <Fab color="primary" aria-label="addProfils" style={{marginLeft:"90%", marginTop:"1%"}}>
                <Add />
              </Fab>
            </Link>
        </div>
        
    );
}