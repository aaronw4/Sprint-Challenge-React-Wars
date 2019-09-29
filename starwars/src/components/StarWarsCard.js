import React from 'react';
import styled from 'styled-components';
import Planet from './Planets';
import Species from './Race';

const Card = styled.div`
    width: 20%;
    margin: 10px;
    padding: 0 20px;
    background-color: #3E3739;
    color: #228CD1;
    border-radius: 10px;
`;

export default function StarWarsCard(props) {
    return (
        <Card>
            <h2>{props.name}</h2>
            <p>{props.name} is
            {props.gender === 'n/a' ? <span> {props.height}cm, {props.mass}kg, </span> : <span> a {props.gender}, {props.height}cm tall, {props.mass}kg, </span>}            
            {props.hair === 'none' || props.hair === 'n/a' ? <span>has {props.eyes} eyes, no hair, and {props.skin} skin.</span> : <span>has {props.eyes} eyes, {props.hair} hair, and {props.skin} skin.</span>}  
            <Species species={props.species}
                     name={props.name}/>
            <Planet homeWorld={props.homeWorld}/>  
            </p>             
        </Card>         
    )
}