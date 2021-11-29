import React, { useEffect, useState } from 'react';

//Import Material-UI hooks
import { RadioGroup, Radio, FormControlLabel, FormLabel } from '@mui/material';

//Component content
const LogoInput = (props) => {

   const [value, setValue] = useState(true);

   const inputHandler = (event) => {
      const value = event.target.value;
      setValue(value);
      if( value===false ){
         props.onChange('');
      }
   };

   return ( 
      <>
         <FormLabel component='legend' sx={{textAlign:'center'}} >Logo</FormLabel>
         <RadioGroup row value={value} onChange={inputHandler} sx={{justifyContent:'center'}} >
            <FormControlLabel value={true} control={ <Radio /> } label='Yes' />
            <FormControlLabel value={false} control={ <Radio /> } label='No' />
         </RadioGroup>
      </>
   );
};

export default LogoInput; //Export component