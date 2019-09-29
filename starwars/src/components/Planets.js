import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function Planet(props) { 
    return(<p>{props.homeWorld}</p>);
    /*const [planets, setPlanets] = useState([]);
    let homePlanet = props.homeWorld;
    let array = homePlanet.split('');
    let number = array[29];

    useEffect(() => {
        async function fetchData() {
            try {
                const planetsData = await axios.get(`https://swapi.co/api/planets/${number}/`);
                console.log(planetsData);
                setPlanets(planetsData.data);
            }
            catch(err) {
                console.log(err);
            }
        }
        fetchData();
    }, [number]);

    return(
        <p>{planets.name}</p>
    );*/
}