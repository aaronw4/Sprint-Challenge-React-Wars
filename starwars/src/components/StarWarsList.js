import React, {useState, useEffect} from 'react';
import axios from 'axios';
import StarWarsCard from './StarWarsCard';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

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
    <Container>
        {data.map(people => {
            return(
                <StarWarsCard
                    name={people.name}
                    gender={people.gender}
                    height={people.height}
                    mass={people.mass}
                    hair={people.hair_color}
                    skin={people.skin_color}
                    eyes={people.eye_color}
                />
            );
        })}
    </Container>
  );
}