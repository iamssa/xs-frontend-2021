import React from 'react';
import { gql, useQuery } from '@apollo/client';
import Card from '../../components/card/Card';
import './Catalog.css';

const CatalogScreen = () => {
  const query = gql`
    query ExampleQuery {
      locations {
        results {
          id
          name
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

  const { data, loading, error } = useQuery(query);

  if (loading) {
    return 'loading';
  } else {
    console.log(data);
  }
  
  const cards = data.locations.results[0].residents;

  return (
    <>
      <div className="Catalog">
        {cards.map((card) => (
          <Card props={card} />
        ))}
      </div>
    </>
  );
};

export default CatalogScreen;
