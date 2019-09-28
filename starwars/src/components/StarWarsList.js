import React, {useState, useEffect} from 'react';
import axios from 'axios';
import StarWarsCard from './StarWarsCard'

export function StarWarsList() {
    const [data, setData] = useState([]);  

  useEffect(() =>{
    async function fetchData() {
      try {
        const swData = await axios.get('https://swapi.co/api/people');
        console.log(swData);
        setData(swData.data.results);
      }
      catch(err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return (      
    <div>
        {data.map(people => {
            return(
                <StarWarsCard
                    name={people.name}
                />
            );
        })}
    </div>
  );
}