import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {menuListItems} from "./listItem";
import Accueil from "./Templates/Accueil";
import UserTemplate from "./Templates/Utilisateur/UserTemplate";
import RoleTemplate from "./Templates/Rôle/roleTemplate";
import AppTemplate from "./Templates/App/appTemplate";
import GroupTemplate from "./Templates/Groupe/GroupTemplate";
import AddGroups from "./Templates/Groupe/AddGroup";
import CreateRoleTemplates from "./Templates/Rôle/createRoleTemplate";
import AddProfils from "./Templates/Utilisateur/AddProfils";
import SettingsProfils from "./Templates/Utilisateur/SettingsProfils";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  title: {
    flexGrow: 1
  },
  container: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
}));
export default function Dashboard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Router>
        <CssBaseline />
        <AppBar
          position="fixed" className={classes.appBar}
        >
        </AppBar>
        <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <Divider />
          <List>{menuListItems}</List>
          <Divider />
        </div>
      </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
              {/*Affichage principale */}
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <Switch>
                    <Route exact path="/">
                      <Accueil/>
                    </Route>
                    <Route exact path="/Utilisateurs">
                      <UserTemplate/>
                    </Route>
                    <Route exact path="/SettingsProfils">
                    <SettingsProfils />
                </Route>
                <Route exact path="/SettingsPassword"></Route>
                    <Route exact path="/Roles">
                      <RoleTemplate/>
                    </Route>
                    <Route exact path="/Groupes">
                      <GroupTemplate/>
                    </Route>
                    <Route exact path="/Applications">
                      <AppTemplate/>
                    </Route>
                    <Route exact path="/Role_Administrateur">
                    </Route>
                    <Route exact path="/Tableau_de_bord">
                    </Route>
                    <Route exact path="/Parametres">
                    </Route>
                    <Route exact path="/AddProfils">
                      <AddProfils/>
                    </Route>
                    <Route exact path="/AddGroups">
                      <AddGroups/> 
                    </Route>
                    <Route exact path="/createRoles">
                      <CreateRoleTemplates/> 
                    </Route>
                  </Switch>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </main>
      </Router>
    </div>
  );
}