import React from 'react';


//Import data
import techs from '../../Data/technologies.json';


//Material design
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';


//Check if input techonolgy is on the list
const CheckForTech = (label) => {
	let res = null;
	
	techs.forEach( tech => {
		if(tech.tags.includes(label)){
			res = tech;
		}
	} );

	return res;
};

//Change special characters
const SpecialChars = (label) => {
	let tempLabel = [];
	let i;

	for( i=0; i<label.length; i++ ){
		if( label[i] === "+" ){
			tempLabel.push("%2B");
			continue;
		}
		if( label[i] === "#" ){
			tempLabel.push("%23");
			continue;
		}
		tempLabel.push( label[i] );
	}

	tempLabel = tempLabel.join('');
	
	return tempLabel;
}

//Component content
const Badge = ({badge}) => {
	const tech = CheckForTech(badge.label.toLowerCase());
	const version = badge.version.length === 0 ? "Version" : badge.version;
	let url;

	//If there's no results...
	if( tech === null && badge.hasLogo ){
		const label = badge.label.length === 0 ? "Technology" : SpecialChars(badge.label);
		url = `https://img.shields.io/badge/${version}-999999?style=${badge.style}&logo=${label}&label=${label}&labelColor=333333`;
		
		return (
			<>
				<Grid item xs={12} textAlign="center" minHeight="4em" maxHeight="4em" >
					<img alt="Badge with version" src={url} />
				</Grid>
				<Grid item xs={12} textAlign="center" >
					<Button
						size="small"
						variant="outlined"
						onClick={() => {
							navigator.clipboard.writeText(url);
						}}
					>
						Copy URL
					</Button>
				</Grid>
			</>
		);
	};

	if( tech === null && !badge.hasLogo ){
		const label = badge.label.length === 0 ? "Technology" : SpecialChars(badge.label);
		url = `https://img.shields.io/badge/${version}-999999?style=${badge.style}&label=${label}&labelColor=333333`;
		
		return (
			<>
				<Grid item xs={12} textAlign="center" minHeight="4em" maxHeight="4em" >
					<img alt="Badge with version" src={url} />
				</Grid>
				<Grid item xs={12} textAlign="center" >
					<Button
						size="small"
						variant="outlined"
						onClick={() => {
							navigator.clipboard.writeText(url);
						}}
					>
						Copy URL
					</Button>
				</Grid>
			</>
		);
	};

	if( tech !== null && badge.label.length === 0 ){
		url = `https://img.shields.io/badge/${version}-999999?style=${badge.style}&label=Technology&labelColor=333333`;
	};

	const logo = badge.hasLogo ? `&logo=${tech.label}` : "";
	const labelColor = `&labelColor=${tech.hasVersion.label}`;
	
	if( tech !== null && badge.hasVersion ){
		const label = badge.label.length === 0 ? `&label=Technology` : `&label=${SpecialChars(badge.label)}`;
		url = `https://img.shields.io/badge/${version}-${tech.hasVersion.version}?style=${badge.style}${logo}${label}${labelColor}`
	};

	if( tech !== null && !badge.hasVersion ){
		const label = SpecialChars(badge.label);
		url = `https://img.shields.io/badge/${label}-${tech.hasNoVersion}?style=${badge.style}${logo}`
	};

	return (
		<>
			<Grid item xs={12} textAlign="center" minHeight="4em" maxHeight="4em" >
				<img alt="Badge with version" src={url} />
			</Grid>
			<Grid item xs={12} textAlign="center" >
				<Button
					size="small"
					variant="outlined"
					url={url}
					onClick={() => {
						navigator.clipboard.writeText(url);
					}}
				>
					Copy URL
				</Button>
			</Grid>
		</>
	);
};

export default Badge; //Export component