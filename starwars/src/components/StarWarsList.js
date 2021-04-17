import React, {useState, useEffect} from 'react';
import axios from 'axios';
import StarWarsCard from './StarWarsCard';
import styled from 'styled-components';
import Button from './Button';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 80px 20px 0 20px;
    padding: 0;
`;

const Page = styled.span`
    color: #130C0E;
    font-weight: bold;
    font-size: 20px;
    background-color: #DCDCE5;
    border-radius: 5px;
    padding: 2px;
`;

export function StarWarsList() {
    const [data, setData] = useState([]);
    const [count, setCount] = useState(1);

    function forward() {
        setCount(count + 1);
    }

    function reverse() {
        setCount(count -1);
    }

  useEffect(() => {
    async function fetchData() {
      try {
        const swData = await axios.get(`https://swapi.dev/api/people/?page${count}=&page=${count}`);
        console.log(swData);
        setData(swData.data.results);
      }
      catch(err) {
        console.log(err);
      }
    }
    fetchData();
  }, [count]);

  return(
    <div>
    <Button 
        count={count}
        forward={forward}
        reverse={reverse}
    />   
    <Container> 
        {data.map(people => {
            return(
                <StarWarsCard
                    key={people.url}
                    name={people.name}
                    gender={people.gender}
                    height={people.height}
                    mass={people.mass}
                    hair={people.hair_color}
                    skin={people.skin_color}
                    eyes={people.eye_color}
                    homeWorld={people.homeworld}
                    species={people.species}
                />
            );
        })}
    </Container>
    <Page>Page {count}</Page>
    </div>  
  );
}