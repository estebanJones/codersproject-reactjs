import React from "react";

function NavigationFooter(props) {


  
    return (
        <button onClick={props.onClick}>{props.icon}</button>
    )

}

export default NavigationFooter;