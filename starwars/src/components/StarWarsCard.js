import React, {useState} from 'react';
import styled from 'styled-components';

const Card = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    margin: 10px;
    background-color: #3E3739;
    color: #228CD1
`;

export default function StarWarsCard(props) {

    return (
        <Card>
            <h2>{props.name}</h2>
            <p>Description: {props.gender}, {props.height}cm, {props.mass}kg.
            Has {props.eyes} eyes, {props.hair} hair, and {props.skin} skin.</p>
        </Card>
    )
}