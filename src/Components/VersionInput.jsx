import React, { useEffect, useState } from 'react';

//Import Material-UI hooks
import { TextField } from '@mui/material';

//Component content
const VersionInput = (props) => {
   //Local values
   const [ textField, setTextField ] = useState({
      value: '',
      placeholder: props.placeholder
   });

   useEffect(() => {
      if(props.disabled){
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
   }, [props] );

   const inputHandler = (event) => {
      const value = event.target.value; //Save our event target value into a constant to use several times
      setTextField({...textField, value: value }); //Update its value
      
      if(value.length === 0 ){
         props.onChange(textField.placeholder); //If value is empty, update to its placeholder
      }else{
         props.onChange(value); //If it has a value, update to that value
      }
      
   };

   return (
      <TextField variant='standard' type='text' disabled={props.disabled} label='Version' value={textField.value} onChange={inputHandler} placeholder={textField.placeholder} helperText=' ' />
   );
};

export default VersionInput; //Export component