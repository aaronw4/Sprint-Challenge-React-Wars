import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function Species(props) { 
    const [race, setRace] = useState([]);
    let homeSpecies = props.species[0];

    useEffect(() => {
        async function fetchData() {
            try {
                const speciesData = await axios.get(homeSpecies);
                setRace(speciesData.data);
            }
            catch(err) {
                console.log(err);
            }
        }
        fetchData();
    }, [homeSpecies]);

    return(
        <span> {race.name === undefined ? `${props.name} is a human and `: `${props.name} is a ${race.name} and `}</span>
    );
}