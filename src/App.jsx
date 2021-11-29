import React, { useState } from 'react';

//Se importan hooks de Material-UI
import { Grid, TextField, FormControl, Autocomplete } from '@mui/material';
import { makeStyles } from '@mui/styles';
//import CheckIcon from '@mui/icons-material/Check';

//Hojas de estilo
import './App.css';

//Lista de lenguajes
const languagesList = [
   'Python',
   'MongoDB',
   'Node.js',
   'React'
];

const languagesData = [
   { language: 'Python', version: '3.8.5', url: 'https://www.python.org/', leftColor: 'ffd43b', rightColor: '1f425f' },
   { language: 'MongoDB', version: '4.0.8', url: 'https://www.mongodb.com/', leftColor: '3fa037', rightColor: '3f3e42' },
   { language: 'Node.js', version: '16.11.1', url: 'https://nodejs.org/', leftColor: '3c873a', rightColor: '303030' },
   { language: 'React', version: '17.0.2', url:'https://reactjs.org/', leftColor: '61dbfb', rightColor: '1f232a' }
];

const useStyle = makeStyles({
   center: {
      display: 'flex',
      justifyContent: 'center'
   },
   grid: {
      height: '63.5px'
   }
});

//Contenido del componente
const App = () => {
   const classes = useStyle();

   const [ badge, setBadge ] = useState({
      language: '',
      leftColor: '',
      rightColor: '',
      url: '',
      version: ''
   });

   const [ placeholder ] = useState({
      url: '',
      version: ''
   });

   const [ tempValue, setTempValue ] = useState('');

   const badgeHandler = (event, newValue) => {
      for( let index=0; index<languagesList.length; index++ ){
         if(newValue === languagesData[index].language){
            badge.leftColor = languagesData[index].leftColor;
            badge.rightColor = languagesData[index].rightColor;
            placeholder.url = languagesData[index].url;
            placeholder.version = languagesData[index].version;
            break
         }
      };
      setBadge({...badge, language: newValue});
   };

   const src_url = `https://img.shields.io/badge/${badge.version}-${badge.leftColor}?style=for-the-badge&logo=${badge.language}&label=${badge.language}&labelColor=${badge.rightColor}`;

   return (
      <>
         <Grid container spacing={2}>
            <Grid item container spacing={2} className={classes.grid} > {/*Badge*/}
               <Grid item xs={4} />
               <Grid item xs={4} className={classes.center} >
                  {badge.language.length >0  ? (
                     <a href={badge.url}>
                        <img src={src_url} alt="badge" />
                     </a>
                  ):null}
               </Grid>
               <Grid item xs={4} />
            </Grid>
            <Grid item container spacing={2} > {/*Inputs*/}
               <Grid item xs={4} />
               <Grid item xs={2} >
                  <FormControl fullWidth >
                     <Autocomplete
                        //Valores visuales
                        value={tempValue}
                        onChange={(value, newValue) => {
                           setTempValue(newValue);
                        }}

                        //Valores reales
                        inputValue={badge.language}
                        onInputChange={badgeHandler}

                        options={languagesList}
                        renderInput={(params) => (
                           <TextField
                              {...params}
                              variant='standard'
                              label='Language'
                              inputProps={{
                                 ...params.inputProps,
                                 autoComplete: 'new-password',
                              }}
                              required />
                        )}
                     />
                  </FormControl>
               </Grid>
               <Grid item xs={2} > {/*Version*/}
                  <FormControl fullWidth >
                     <TextField
                        required
                        variant='standard'
                        label='Version'
                        placeholder={placeholder.version}
                        value={badge.version}
                        onChange={({target:{value}}) => {
                           setBadge({...badge, version: value});
                        }}
                     />
                  </FormControl>
               </Grid>
               <Grid item xs={4} />
               <Grid item xs={4} />
               <Grid item xs={4} > {/*URL*/}
                  <FormControl fullWidth >
                     <TextField
                        variant='standard'
                        type='text'
                        label='URL'
                        placeholder={placeholder.url}
                        helperText='Page to be redirected to when clicked'
                     />
                  </FormControl>
               </Grid>
               <Grid item xs={4} />
            </Grid>
         </Grid>
      </>
   );
};

export default App; //Se exporta el componente