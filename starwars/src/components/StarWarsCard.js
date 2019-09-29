import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Card = styled.div`
    width: 22%;
    margin: 10px;
    background-color: #3E3739;
    color: #228CD1;
    border-radius: 10px;
`;

export default function StarWarsCard(props) {
    let planets = axios.get(props.homeWorld);

    return (
        <Card>
            <h2>{props.name}</h2>
            <p>Description:</p> 
            {props.gender === 'n/a' ? <p>{props.height}cm, {props.mass}kg.</p> : <p>{props.gender}, {props.height}cm, {props.mass}kg.</p>}            
            {props.hair === 'none' || props.hair === 'n/a' ? <p>Has {props.eyes} eyes, no hair, and {props.skin} skin.</p> : <p>Has {props.eyes} eyes, {props.hair} hair, and {props.skin} skin.</p>}            
        </Card>
    )
}