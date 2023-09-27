import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  height: 200px;
  background-color: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 14px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: #E0E0E0;
  background-size: cover;
  background-blend-mode: multiply;
  color: #fff;

  /* Media Queries for Responsive Card Size */
  @media (max-width: 768px) {
    /* Add styles for smaller screens here */
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    /* Add styles for medium-sized screens here */
  }

  /* Add more media queries as needed for other screen sizes */
`;

const RestaurantCard = ({ restaurant }) => {
  const { id, Name, rating, logo } = restaurant;
  const backgroundImage = `url(${require(`../assets/restaurants/${logo}`)})`;

  return (
    <CardContainer style={{ backgroundImage }}>
    {/* style={{ border: '2px solid red', width: '100%', height: '100%', padding: 0 }} */}
      <div >
        <p>{Name} - {rating} - {logo}</p>
      </div>
    </CardContainer>
  );
};

export default RestaurantCard;




