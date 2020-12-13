import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Tabs from'@material-ui/core/Tabs';
import Tab  from'@material-ui/core/Tab'

  export default function MyNav() {

  return (
    <div>
        <AppBar position="static">
        <Tabs>
        <Tab  href="/customers" label="Customers">Customers</Tab>
        <Tab  href="/trainings" label="Trainings">Trainings</Tab>
        </Tabs>
      </AppBar>
    </div>
  );
  }