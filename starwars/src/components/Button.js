import React from 'react';

export default function Button(props) {

    return (
        <div>
            {props.count === 1 ? null : <button onClick={props.reverse}>&#8592; Page {props.count - 1}</button>}
            {props.count === 9 ? null : <button onClick={props.forward}>Page {props.count + 1} &#8594;</button>}
        </div> 
    )
}