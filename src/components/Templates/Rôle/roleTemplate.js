import React , {useContext, forwardRef} from 'react';
import { DataContext } from "../../../context/DataContext";
import { makeStyles } from '@material-ui/core';
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
  } from "@material-ui/icons";
import {MdEdit} from "react-icons/md"
import MaterialTable, { MTableBodyRow } from "material-table"; 
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({

  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const columns = [
    { field: 'id', title: 'Id', width: 70 },
    { field: 'label', title: 'Role', width: 130 },
  ];
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
export default function RoleTemplate(props) {
    const classes = useStyles();
    const {Roles, setSelectedRow} = useContext(DataContext);
    const handleClickOpenDialog = (evt, selectedRow) => {
        setSelectedRow(selectedRow);
      };
    return (
        <div> 
            <MaterialTable
                columns={columns}
                title="Liste des Rôles"
                icons={tableIcons}
                data={Roles}
                components={{
                    Row: (props) => {
                    return (
                        <MTableBodyRow {...props} className={classes.row}/>
                    )
                    }
                }}
                actions={[
                  rowData => ({
                    icon: () => <Link to="/createRoles" style={{ textDecoration: "none" }}><MdEdit size="24px"/></Link>,
                    tooltip: 'Edit ',
                    onClick: (evt, selectedRow) =>
                    handleClickOpenDialog(evt, selectedRow)
                  })
                ]}
            />
        </div>
    );
}