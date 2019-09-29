import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function Planet(props) { 
    const [planets, setPlanets] = useState([]);
    let homePlanet = props.homeWorld;

    useEffect(() => {
        async function fetchData() {
            try {
                const planetsData = await axios.get(homePlanet);                
                setPlanets(planetsData.data);
            }
            catch(err) {
                console.log(err);
            }
        }
        fetchData();
    }, [homePlanet]);

    return(
        <span>from the planet {planets.name}.</span>
    );
}