import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function Species(props) { 
    const [race, setRace] = useState([]);
    let homeSpecies = props.species[0];
    let array = homeSpecies.split('');
    let number = array[29];

    useEffect(() => {
        async function fetchData() {
            try {
                const speciesData = await axios.get(`https://swapi.co/api/species/${number}/`);
                setRace(speciesData.data);
            }
            catch(err) {
                console.log(err);
            }
        }
        fetchData();
    }, [number]);

    return(
        <span> {race.name === 'Droid' ? `${props.name} is a ${race.name} and `: `${props.name} is ${race.name} and `}</span>
    );
}