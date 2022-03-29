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
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

import ClearIcon from '@mui/icons-material/Clear';

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
		externalURL: ""
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

	//Clear label
	const ClearBadgeLabelHandler = (event) => {
		setBadge({
			...badge,
			label: ""
		});
	};

	//Clear version
	const ClearBadgeVersionHandler = (event) => {
		setBadge({
			...badge,
			version: ""
		});
	};

	//Clear External URL
	const ClearBadgeExternalURLHandler = (event) => {
		setBadge({
			...badge,
			externalURL: ""
		});
	};

	return (
		<main>
			<Container maxWidth="sm" >
				<Grid container spacing={2} display="flex" alignContent="center" height="100vh" >
					<Badge badge={badge} /> {/*Badge*/}

					<Grid item xs={12} md={6}> {/*Label*/}
						<FormControl fullWidth >
							<TextField
								name="label"
								value={badge.label}
								onChange={BadgeHandler}

								label="Technology"
								helperText="Framework, library, etc."
								variant="standard"

								InputProps={{
									endAdornment:
										<InputAdornment position="end">
											{
												badge.label.length === 0 ? null : (
													<IconButton onClick={ClearBadgeLabelHandler}>
														<ClearIcon/>
													</IconButton>
												)
											}
										</InputAdornment>
								}}
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
																
								InputProps={{
									endAdornment:
										<InputAdornment position="end">
											{
												badge.version.length === 0 ? null : (
													<IconButton onClick={ClearBadgeVersionHandler}>
														<ClearIcon/>
													</IconButton>
												)
											}
										</InputAdornment>
								}}
							/>
						</FormControl>
					</Grid>

					<Grid item xs={12}> {/*External URL*/}
						<FormControl fullWidth>
							<TextField
								name="externalURL"
								value={badge.externalURL}
								onChange={BadgeHandler}

								label="External URL"
								helperText="When badge is clicked will visit this URL"
								variant="standard"
								
								InputProps={{
									endAdornment:
										<InputAdornment position="end">
											{
												badge.externalURL.length === 0 ? null : (
													<IconButton onClick={ClearBadgeExternalURLHandler}>
														<ClearIcon/>
													</IconButton>
												)
											}
										</InputAdornment>
								}}
							/>
						</FormControl>
					</Grid>

					<Grid item xs={12} md={6} > {/*Style*/}
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

					<Grid item xs={12} md={6} textAlign="center" > {/*Options*/}
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