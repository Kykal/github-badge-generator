import React, { useEffect, useState } from 'react';

//Import Material-UI hooks
import { TextField, IconButton, InputAdornment } from '@mui/material';

//Import Material-UI icons
import CopyAllIcon from '@mui/icons-material/CopyAll';

//Component content
const URLInput = (props) => {

   const [ textField, setTextField ] = useState({
      value: '',
      placeholder: props.placeholder
   });

   /*
   useEffect(() => {
      if( props.disabled ){
         setTextField({
            ...textField,
            value: '',
            placeholder: props.placeholder
         });
      }else{
         setTextField({
            ...textField,
            placeholder: props.placeholder
         });
      }
      // eslint-disable-next-line
   }, [props]);
   */

   useEffect(() => {
      setTextField({
         ...textField,
         value: '',
         placeholder: props.placeholder
      });
      props.onChange('');
      // eslint-disable-next-line
   }, [props.disabled, props.language]);

   const inputHandler = (event) => {
      const value = event.target.value;

      setTextField({ ...textField, value: value });
      props.onChange(value);
   };

   const pasteURLHandler = () => {
      setTextField({
         ...textField,
         value: textField.placeholder
      });
      props.onChange(textField.placeholder);
   };

   return (
      <TextField
         variant='standard'
         disabled={props.disabled}
         label='URL'
         helperText='Page to be redirected to when click on badge'
         value={textField.value}
         onChange={inputHandler}
         placeholder={props.placeholder}
         InputProps={{
            endAdornment: (
               <InputAdornment position='end' >
                  <IconButton disabled={props.disabled} onClick={pasteURLHandler} >
                     <CopyAllIcon />
                  </IconButton>
               </InputAdornment>
            )
         }}
      />
   );
};

export default URLInput; //Export component