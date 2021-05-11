import React , {useContext, forwardRef, useState} from 'react';
import { DataContext } from "../../../context/DataContext";
import { makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
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
import ModificateRoleTemplate from "./modificateRoleTemplate";

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
    { field: 'Id', title: 'Id', width: 70 },
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
    const {dataRole} = useContext(DataContext);
    const [selectedRow, setSelectedRow] = useState(null);
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("ml"));

    const handleClose = () => {
      setOpen(false);
    };
    const handleClickOpenDialog = (evt, selectedRow) => {
        setSelectedRow(selectedRow);
        setOpen(true);
      };
    return (
        <div> 
            <MaterialTable
                columns={columns}
                title="Liste des Rôles"
                icons={tableIcons}
                data={dataRole.default}
                components={{
                    Row: (props) => {
                    return <MTableBodyRow {...props} className={classes.row} />;
                    }
                }}
                onRowClick={(evt, selectedRow) =>
                    handleClickOpenDialog(evt, selectedRow)
                  }
            />
            {selectedRow && (
                <ModificateRoleTemplate
                selectedRow={selectedRow}
                open={open}
                onClickClose={handleClose}
                fullScreen={fullScreen}
                />
            )}
        </div>
    );
}