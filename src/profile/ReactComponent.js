import React from 'react'
import PropTypes from "prop-types";
function ReactComponent (props) {
    return (
        <div>
            
        </div>
    )
}

ReactComponent.propTypes = {
    fullName, bio, profession: PropTypes.string ,
    children: PropTypes.any
   };
export default ReactComponent
