import React, { useEffect, useState } from 'react';

import { Autocomplete, TextField } from '@mui/material';

//Component content
const Technology = (props) => {

    const [ inputValue, setInputValue ] = useState('');
    let technologyList = [];

    useEffect(() => {
        props.data.forEach(technology => {
            technologyList.push(technology.language);
        });
    });

    console.log(technologyList);

    return (
        <Autocomplete
            value={props.value}
            inputValue={inputValue}

            options={technologyList}

            renderInput={(params) => {
                <TextField {...params} label='Technology' />
            }}
        />
    );
};

export default Technology; //Export component