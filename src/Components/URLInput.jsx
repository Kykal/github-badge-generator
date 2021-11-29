import React, { useEffect, useState } from 'react';

//Import Material-UI hooks
import { TextField } from '@mui/material';

//Component content
const URLInput = (props) => {

   const [ textField, setTextField ] = useState({
      value: '',
      placeholder: props.placeholder
   });

   useEffect(() => {
      if( props.disabled ){
         setTextField({
            ...textField,
            value: '',
            placeholder: props.placeholder
         })
      }else{
         setTextField({
            ...textField,
            placeholder: props.placeholder
         })
      }
      // eslint-disable-next-line
   }, [props])

   const inputHandler = (event) => {
      const value = event.target.value;

      setTextField({ ...textField, value: value });
      props.onChange(value);
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
      />
   );
};

export default URLInput; //Export component