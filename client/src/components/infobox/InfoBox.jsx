import React, { Component, Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'

const INFO_TYPE = {
	basic: '',
	error: 'error',
	success: 'success'
}

class InfoBox extends Component {

	componentDidUpdate(prevProps){
		if(prevProps.timeout !== this.props.timeout){
			if(this.props.timeout > 0){
				setTimeout(() => this.props.onClose(), this.props.timeout)
			}
		}
	}

	render(){
		const { open, type, onClose, message} = this.props
		const infoType = type ? "infobox__" + type : "infobox"
		
		if(open){
			return ( 
				<div className={infoType}>
					<span>
						<FontAwesomeIcon icon="times" onClick={onClose}/>
					</span>
					<p>{message}</p>
				</div>
			)	
		}else 
			return null
	}
}

/*InfoBox.propTypes = {
	timeout: PropTypes.number
}

InfoBox.defaultProps = {
	timeout: 0,
	type: INFO_TYPE.basic
}
*/
export default InfoBox