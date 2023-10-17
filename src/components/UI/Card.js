import React from "react";
import cardClasses from './Card.module.css'

const Card = props => {
    return (
        <div className={`${cardClasses.card} ${props.className}`}>{props.children}</div>
    )
}

export default Card;