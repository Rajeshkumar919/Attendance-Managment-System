import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentIcon from '@material-ui/icons/Assignment';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { Link } from 'react-router-dom'
export const mainListItems = (
<div>
    <Link to="/teacher/dashboard">
        <ListItem button>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItem>
    </Link>
    <Link to="/teacher/allstudents">
        <ListItem button>
            <ListItemIcon>
                <SupervisorAccountIcon />
            </ListItemIcon>
            <ListItemText primary="All Students" />
        </ListItem>
    </Link>
</div>
);

export const secondaryListItems = (
<div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
        <ListItemIcon>
            <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
        <ListItemIcon>
            <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
        <ListItemIcon>
            <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Year-end sale" />
    </ListItem>
</div>
);