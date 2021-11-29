import React, { useState } from 'react';

//Import Material-UI hooks
import { Autocomplete, TextField } from '@mui/material';

//Component content
const LanguageInput = (props) => {

   const options = [
      'Angular',
      'C',
      'C++',
      'Dart',
      'Flutter',
      'Fortran',
      'JavaScript',
      'Mongo',
      'Node',
      'Perl',
      'Python',
      'React',
      'TypeScript',
      'Vue'
   ];

   const [visualValue, setVisualValue] = useState(''); //inputValue - Visual only
   const [value, setValue] = useState(null); //Value - real value

   const inputHandler = (event, newValue) => {
      setValue(newValue);
      props.onChange(newValue)
   };

   return (
      <Autocomplete
         value={value}
         onChange={inputHandler}

         inputValue={visualValue}
         onInputChange={(event, newValue) => {
            setVisualValue(newValue);
         }}

         options={options}

         renderInput={(params) => (
            <TextField
               variant='standard'
               {...params}
               label='Technology'
               required
               helperText='PL, framework, library, etc.'
            />
         )}
      />
   );
};

export default LanguageInput; //Export component