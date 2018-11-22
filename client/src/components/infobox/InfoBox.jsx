import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const InfoBox = ({type='',...rest}) => {

	const infoType = type ? "infobox__" + type : "infobox"
	
	if(rest.open){
		return ( 
			<div className={infoType}>
				<span>
					<FontAwesomeIcon icon="times" />
				</span>
				<p>{rest.message}</p>
			</div>
		)
	}else return null

}

export default InfoBox