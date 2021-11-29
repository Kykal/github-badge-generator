import React, { useEffect, useState } from 'react';

//Import Material-UI hooks
import { Button, Grid, TextField, FormControl, Typography } from '@mui/material';
import { createTheme,ThemeProvider } from '@mui/material';
import { makeStyles } from '@mui/styles';

//CSS
import './App.css';

//Import custom components
import VersionInput from './Components/VersionInput';
import LanguageInput from './Components/LanguageInput';
import URLInput from './Components/URLInput';

//Crate styles
const useStyle = makeStyles((theme) => ({
   badgeImage: {
      height: '63.5px'
   }
}));

const theme = createTheme({
   palette:{
      button:{
         main: '#333333',
         contrastText: '#fff'
      }
   }
});

//Component content
const App = () => {

   const classes = useStyle(); //Declare styles

   const [ badge, setBadge ] = useState({
      language: 'Technology',
      version: 'Version',
      url: '',
      style: {
         leftColor: '333333',
         rightColor: '999999'
      }
   });

   const technologyData = [
      {language: 'Python', version: '3.10.0', url: 'https://www.python.org/', leftColor: 'FFD43B', rightColor: '1F425F'},
      {language: 'MongoDB', version: '4.0.8', url: 'https://www.mongodb.com/', leftColor: '3F3E42', rightColor: '3FA037'}
   ];

   const [ placeholders, setPlaceholders ] = useState({
      version: '',
      url: ''
   });

   const [inputsDisabled, setInputsDisabled] = useState(true);

   const languageHandler = (languageValue) => {
      if( languageValue === null ){
         setInputsDisabled(true);
         setBadge({
            ...badge,
            language: 'technology',
            version: 'version',
            style: {
               ...badge.style,
               leftColor: '333333',
               rightColor: '999999'
            }
         });
      }else{
         setInputsDisabled(false);
         for(let index=0; index<technologyData.length; index++){
            if( languageValue === technologyData[index].language ){
               setPlaceholders({
                  ...placeholders,
                  version: technologyData[index].version,
                  url: technologyData[index].url,
               });
               setBadge({
                  ...badge,
                  language: technologyData[index].language,
                  version: technologyData[index].version,
                  style:{
                     ...badge.style,
                     leftColor: technologyData[index].leftColor,
                     rightColor: technologyData[index].rightColor
                  }
               });
               break;
            }
         }

      }
   };

   const src_img = `https://img.shields.io/badge/${badge.version}-${badge.style.rightColor}?style=for-the-badge&logo=${badge.language}&label=${badge.language}&labelColor=${badge.style.leftColor}`;
   const src_markdown = `[![${badge.language}](${src_img})](${badge.url})`;

   return (
      <Grid container spacing={2} > {/*Main container*/}
         <Grid item container spacing={2} alignItems='center' justifyContent='center' className={classes.badgeImage} > {/*Badge*/}
            {badge.url.length===0 ? (
               <div>
                  <img src={src_img} alt="badge" />
               </div>
            ):(
               <a href={badge.url}>
                  <img src={src_img} alt="badge" />
               </a>
            )}
         </Grid>
         <Grid item container spacing={2} alignItems='center' justifyContent='center' > {/*Language selector & Version*/}
            <Grid item xs={2} > {/*Autocomplete - Language selector*/}
               <FormControl fullWidth >
                  <LanguageInput onChange={languageHandler} />
               </FormControl>
            </Grid>
            <Grid item xs={2} > {/*TextField - Version*/}
               <FormControl fullWidth >
                  <VersionInput disabled={inputsDisabled} placeholder={placeholders.version} onChange={(value) => {setBadge({...badge, version: value})}} />
               </FormControl>
            </Grid>
         </Grid>
         <Grid item container spacing={2} alignItems='center' justifyContent='center' > {/*URL*/}
            <Grid item xs={4} >{/*TextField - URL */}
               <FormControl fullWidth >
                  <URLInput disabled={inputsDisabled} placeholder={placeholders.url} onChange={(value) => {setBadge({...badge, url: value})}} />
               </FormControl>
            </Grid>
         </Grid>
         <Grid item container spacing={2} alignItems='center' justifyContent='center' > {/*Buttons*/}
            <Grid item xs={2} sx={{ display:'flex', justifyContent:'right'}} > {/*Copy image*/}
               <ThemeProvider theme={theme} >
                  <Button size='small' disabled={inputsDisabled} variant='outlined' color='button' onClick={() => {navigator.clipboard.writeText(src_img)}} >Copy image</Button>
               </ThemeProvider>
            </Grid>
            <Grid item xs={2} sx={{ display:'flex', justifyContent:'left'}} > {/*Copy markdown*/}
               <ThemeProvider theme={theme} >
                  <Button size='small' disabled={inputsDisabled} variant='outlined' color='button' onClick={() => {navigator.clipboard.writeText(src_markdown)}} >Copy markdown</Button>
               </ThemeProvider>
            </Grid>
         </Grid>
      </Grid>
   );
};

export default App; //Export component