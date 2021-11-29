import React from 'react';

//Import Material-UI hooks
import { RadioGroup, Radio, FormControlLabel, FormLabel } from '@mui/material';

//Component content
const StyleInput = (props) => {

   const inputHandler = (event) => {
      const value = event.target.value;
      props.onChange(value);
   };

   return ( 
      <>
         <FormLabel component='legend' sx={{textAlign:'center'}} >Style</FormLabel>
         <RadioGroup row value={props.value} onChange={inputHandler} sx={{justifyContent:'center'}} >
            <FormControlLabel value='flat' control={ <Radio /> } label='Flat' />
            <FormControlLabel value='flat-square' control={ <Radio /> } label='Flat square' />
            <FormControlLabel value='plastic' control={ <Radio /> } label='Plastic' />
            <FormControlLabel value='for-the-badge' control={ <Radio /> } label='For the badge' />
         </RadioGroup>
      </>
   );
};

export default StyleInput; //Export component