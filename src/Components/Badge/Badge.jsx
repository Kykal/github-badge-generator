import React from 'react';


//Import data
import techs from '../../Data/technologies.json';

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
const Badge = ({ badge }) => {
	
	const tech = CheckForTech(badge.label.toLowerCase());
	const version = badge.version.length === 0 ? "Version" : badge.version;

	//If there's no results...
	if( tech === null ){
		const label = badge.label.length === 0 ? "Technology" : SpecialChars(badge.label);
		return (
			<img
			alt="Default badge"
			src={`https://img.shields.io/badge/${version}-999999?style=${badge.style}&label=${label}&labelColor=333333`}
			/>
		);
	};

	if( badge.label.length === 0 ){
		return (
			<img
				alt="Default badge"
				src={`https://img.shields.io/badge/${version}-999999?style=${badge.style}&label=Technology&labelColor=333333`}
			/>
		);
	};

	const logo = badge.hasLogo ? `&logo=${tech.label}` : "";
	const labelColor = `&labelColor=${tech.hasVersion.label}`;
	
	if( badge.hasVersion ){
		const label = badge.label.length === 0 ? `&label=Technology` : `&label=${SpecialChars(badge.label)}`;
		return (
			<img
				alt="Badge with version"
				src={`https://img.shields.io/badge/
					${version}-${tech.hasVersion.version}
					?style=${badge.style}
					${logo}
					${label}
					${labelColor}
				`}
			/>
		);
	}

	if( !badge.hasVersion ){
		const label = SpecialChars(badge.label);

		return (
			<img
				alt="Badge with version"
				src={`https://img.shields.io/badge/
					${label}-${tech.hasNoVersion}
					?style=${badge.style}
					${logo}
				`}
			/>
		);
	}
};

export default Badge; //Export component