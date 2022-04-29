import React from 'react'
import { Button as FloatingButton, lightColors } from 'react-floating-action-button'

export default function FloatingButtonMostrans(props) {
    return (
        <FloatingButton
            tooltip={props.tooltip}
            className="floatingButton"
            onClick={()=>props.callback()}
            styles={{ backgroundColor: '#D7272D', color: lightColors.white, fontSize: "30px" }}>
            {props.title}
        </FloatingButton>
    )
}
