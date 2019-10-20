import React from 'react';

export default (props) => {
     
    const style = {
        left : `${props.dot[0]}%`,   //x coordinate
        top : `${props.dot[1]}%`   //y coordinate
    }

    return (
        <div className ="snake-food" style={style}>

        </div>
    )
}