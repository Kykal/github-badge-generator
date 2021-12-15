import React, { useState } from 'react';

//Import data
import technologyData from './dataBase.json';

//Import Component
import Technology from './Components/Technology';

//Import Material-UI hooks
import { Button, Grid, FormControl, createTheme,ThemeProvider } from '@mui/material';
import { makeStyles } from '@mui/styles';

//CSS
import './App.css';


//Component content
const App = () => {

   const [ badge, setBadge ] = useState({
      technology: 'Technology',
      style: '?style=for-the-badge',
      label: { //Left side
         label: 'Technology',
         color: '999999',
         logo: '',
         logoStatus: false
      },
      version: { //Right side
         version: 'Version',
         color: '333333',
         versionStatus: true
      }
   });

   const [ placeholder, setPlaceholder ] = useState({
      version: '',
      url: ''
   });

   const src_url = `https://img.shields.io/badge/${badge.version.version}-${badge.version.color}${badge.style}${badge.label.logo}${badge.label.label}${badge.label.color}`;

   return (
      <Grid container spacing={2} justifyContent='center' alignItems='center' >
         <Grid item xs={12} >
            <img src={src_url} alt="Badge" />
         </Grid>
         <Grid item xs={12} lg={2} style={{backgroundColor: 'green'}} >
            <Technology data={technologyData} value={badge.label.label} />
         </Grid>
         <Grid item xs={12} lg={2} style={{backgroundColor: 'cyan'}} >
            b
         </Grid>
      </Grid>
   );
};

export default App; //Export component