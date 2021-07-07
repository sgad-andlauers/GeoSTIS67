import React, {useContext, forwardRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Fab }from '@material-ui/core';
import {DataContext} from "../../../context/DataContext";
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
  ViewColumn
} from "@material-ui/icons";
import MaterialTable, { MTableBodyRow } from "material-table";
import {MdAdd } from "react-icons/md";

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
  
export default function GroupTemplate(props) {
    const classes = useStyles();
    const {Groupes}= useContext(DataContext);
    console.warn("groupList", Groupes)

    const GetParameters = () => {};
    return (
        <div className= {classes.title}  > 
             <MaterialTable
                      columns={[
                        { title: 'Nom', field: 'nom' },
                        { title: 'Membres', field: 'membre' },
                        {field:'Setup',title:'', render: ()=> GetParameters()},
                      ]}
                      title=""
                      icons={tableIcons}
                      data={Groupes}
                      parentChildData={(row, rows) => rows.find(a => a.id === row.parentId)}
                      options={{
                      selection: true,
                      }}
                      components={{
                          Row: (props) => {
                          return <MTableBodyRow {...props} className={classes.row} />;
                          }
                      }}
                    />
          <Link to="/AddGroups" style={{ textDecoration: "none" }}>
            <Fab aria-label="addGroup" color="primary" >
              <MdAdd size = "24px" />
            </Fab>
          </Link>
        </div>
        
    );
}