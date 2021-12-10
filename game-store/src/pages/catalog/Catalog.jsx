import React from 'react';

import Card from '../../components/card/Card';
import './Catalog.css'
import { gql, useQuery } from '@apollo/client';

const CatalogScreen = () => {
  const query = gql`  
  query ExampleQuery {
    locations {
      results {
        id,
        name,
        residents {
          id
          name
          status
          species
          type
          gender
          image
        }
      }
    }
  }
  `;

  const {data, loading, error} = useQuery(query);
  
  if (loading) {
    return <p>Loading...</p>
  }
  
  const cards = data.locations.results[0].residents;

  return (
    <>
      <div className="Catalog">
        {cards.map((card) => (
          <Card key={card.id} props={card} />
        ))}
      </div>
    </>
  )
}

export default CatalogScreen
