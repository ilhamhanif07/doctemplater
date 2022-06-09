import React from 'react'

export default function BadgeMostrans(props) {
    var getBadgeType = () => {
        return props.tipe == 'danger' ? 'badge-light-danger' : props.tipe == 'warning' ? 'badge-warning' : 'badge-light-primary'
    }
    return (
        <span className={"badge " + getBadgeType() + " badge-pill badge-round pl-1 pr-1"} style={{paddingTop:'8px', paddingBottom:'8px'}}>{props.text}</span>
    )
}
