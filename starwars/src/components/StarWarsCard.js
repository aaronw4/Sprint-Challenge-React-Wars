import React, {useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Card = styled.div`
    width: 20%;
    margin: 10px;
    background-color: #3E3739;
    color: #228CD1;
    border-radius: 10px;
`;

export default function StarWarsCard(props) {
    let planets = axios.get(props.homeWorld);
    console.log(planets);

    return (
        <Card>
            <h2>{props.name}</h2>
            <p>Description:</p> 
            <p>{props.gender}, {props.height}cm, {props.mass}kg.</p>
            <p>Has {props.eyes} eyes, {props.hair} hair, and {props.skin} skin.</p>
        </Card>
    )
}