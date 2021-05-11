import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import PersonIcon from '@material-ui/icons/Person';
import GroupIcon from '@material-ui/icons/Group';
import DashboardIcon from "@material-ui/icons/Dashboard";
import SvgIcon from '@material-ui/core/SvgIcon';
import { ReactComponent as AdminIcon } from "./../../logo/admin_panel.svg";
import { ReactComponent as AppIcon } from "./../../logo/app_registration.svg";
import { ReactComponent as ManageIcon } from "./../../logo/manage_accounts.svg";
import { ReactComponent as SettingIcon } from "./../../logo/settings.svg";
import Paper from "@material-ui/core/Paper";

export default function Accueil() {
  
  return (
    <div>
        <Container maxWidth="lg">
        <Grid container spacing={3}>
              {/*Affichage principale */}
              <Grid item xs={12} sm={6}>
                <Paper >
                    <Link to="/Utilisateurs" style={{ textDecoration: "none" }}>
                        <ListItem button>
                        <ListItemIcon>
                            <PersonIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary="Utilisateurs"
                            style={{
                                color: "black"
                            }}
                            />
                        </ListItem>
                    </Link>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper >
                    <Link to="/Roles" style={{ textDecoration: "none" }}>
                        <ListItem button>
                            <SvgIcon component={ManageIcon} viewBox="0 0 24 24" style={{marginRight:"33px"}} />
                            <ListItemText
                            primary="Rôles"
                            style={{
                                color: "black"
                            }}
                            />
                        </ListItem>
                    </Link>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper >
                    <Link to="/Groupes" style={{ textDecoration: "none" }}>
                        <ListItem button>
                        <ListItemIcon>
                            <GroupIcon />
                            </ListItemIcon>
                            <ListItemText
                            primary="Groupes"
                            style={{
                                color: "black"
                            }}
                            />
                        </ListItem>
                    </Link>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper >
                    <Link to="/Applications" style={{ textDecoration: "none" }}>
                        <ListItem button>
                            <SvgIcon component={AppIcon} viewBox="0 0 24 24" style={{marginRight:"33px"}} />
                            <ListItemText
                            primary="Applications"
                            style={{
                                color: "black"
                            }}
                            />
                        </ListItem>
                    </Link>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper >
                    <Link to="/Role_Administrateur" style={{ textDecoration: "none" }}>
                        <ListItem button>
                            <SvgIcon component={AdminIcon} viewBox="0 0 24 24" style={{marginRight:"33px"}}  />
                            <ListItemText
                                primary="Rôle administrateur"
                                style={{
                                    color: "black"
                                }}
                                />
                        </ListItem>
                    </Link>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper >
                    <Link to="/Tableau_de_bord" style={{ textDecoration: "none" }}>
                        <ListItem button>
                            <ListItemIcon>
                                <DashboardIcon />
                                </ListItemIcon>
                                <ListItemText
                                primary="Tableau de bord"
                                style={{
                                    color: "black"
                                }}
                                />
                            </ListItem>
                    </Link>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper >
                    <Link to="/Parametre" style={{ textDecoration: "none" }}>
                        <ListItem button>
                            <SvgIcon component={SettingIcon} viewBox="0 0 24 24" style={{marginRight:"33px"}} />
                                <ListItemText
                                primary="Paramètres"
                                style={{
                                    color: "black"
                                }}
                                />
                        </ListItem>
                    </Link>
                </Paper>
              </Grid>
            </Grid>
        </Container>
    </div>
  );
}