import React from 'react';
import styled from 'styled-components';
import Planet from './Planets';

const Card = styled.div`
    width: 22%;
    margin: 10px;
    background-color: #3E3739;
    color: #228CD1;
    border-radius: 10px;
`;

export default function StarWarsCard(props) {
    return (
        <Card>
            <h2>{props.name}</h2>
            <p>Description:</p> 
            {props.gender === 'n/a' ? <p>{props.height}cm, {props.mass}kg.</p> : <p>{props.gender}, {props.height}cm, {props.mass}kg.</p>}            
            {props.hair === 'none' || props.hair === 'n/a' ? <p>Has {props.eyes} eyes, no hair, and {props.skin} skin.</p> : <p>Has {props.eyes} eyes, {props.hair} hair, and {props.skin} skin.</p>}            
            <Planet homeWorld={props.homeWorld}/>              
        </Card>         
    )
}