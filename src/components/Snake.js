import React from 'react';

export default (props) => {
    return (
        <div>
           {props.snakeDots.map((dot, i) => {
               const style = {
                   left : `${dot[0]}%`,                 //x coordinate
                   top : `${dot[1]}%`,                  //y coordinate
               }
               return  (
                 <div className = "snake-dot" key = {i} style = {style}></div>
               )
           })} 
        </div>
    )
}