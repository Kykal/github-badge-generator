import React, { useState } from 'react';

//Material design
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import CheckBox from '@mui/material/Checkbox';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormGroup from '@mui/material/FormGroup';


//Custom components
import Badge from './Components/Badge';


//Component content
const App = () => {

	//Badge information
	const [ badge, setBadge ] = useState({
		label: "",
		hasVersion: true,
		hasLogo: true,
		style: "for-the-badge",
		logo: "",
		labelColor: "",
		version: "",
	});

	const BadgeHandler = (event) => {
		const value = event.target.value.trim();
		const name = event.target.name;
		setBadge({
			...badge,
			[name]: value
		});
	};

	const BadgeOptionsHandler = (event) => {
		const value = event.target.checked;
		const name = event.target.name;
		setBadge({
			...badge,
			[name]: value
		});
	};

	return (
		<main>
			<Container maxWidth="sm" >
				<Grid container spacing={2} >
					<Grid item xs={12} textAlign="center" > {/*Badge*/}
						<Badge badge={badge} />
					</Grid>

					<Grid item xs={12} md={6}> {/*Label*/}
						<FormControl fullWidth >
							<TextField
								name="label"
								value={badge.label}
								onChange={BadgeHandler}

								label="Technology"
								helperText="Framework, library, etc."
								variant="standard"
							/>
						</FormControl>
					</Grid>

					<Grid item xs={12} md={6}> {/*Version*/}
						<FormControl fullWidth>
							<TextField
								name="version"
								value={badge.version}
								onChange={BadgeHandler}

								label="Version"
								helperText=" "
								variant="standard"
							/>
						</FormControl>
					</Grid>

					<Grid item xs={12} md={4} > {/*Style*/}
						<FormControl fullWidth variant="standard" >
							<InputLabel >Style</InputLabel>
							<Select
								name="style"
								value={badge.style}
								onChange={BadgeHandler}
							
								label="Style"
								variant="standard"
							>
								<MenuItem value="for-the-badge" >For the badge</MenuItem>
								<MenuItem value="flat" >Flat</MenuItem>
								<MenuItem value="flat-square" >Flat square</MenuItem>
								<MenuItem value="plastic" >Plastic</MenuItem>
							</Select>
						</FormControl>
					</Grid>

					<Grid item xs={12} md={8} textAlign="center" > {/*Options*/}
						<FormLabel component="legend" >Options</FormLabel>
						<FormControl>
							<FormGroup row >
								<FormControlLabel
									label="Logo"
									control={<CheckBox
													name="hasLogo"

													checked={badge.hasLogo}
													onChange={BadgeOptionsHandler}
												/>}
								/> 
								<FormControlLabel
									label="Version"
									control={<CheckBox
													name="hasVersion"

													checked={badge.hasVersion}
													onChange={BadgeOptionsHandler}
												/>}
								/>
								
							</FormGroup>
						</FormControl>
					</Grid>
				</Grid>
			</Container>
		</main>
	);
};

export default App; //Export component