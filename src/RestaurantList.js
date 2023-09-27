import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FilterButtons from './components/FilterButtons'; // Import the FilterButtons component
import SearchBar from './components/SearchBar'; // Import the SearchBar component
import RestaurantCard from './components/RestaurantCard';




const RestaurantListGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Display 3 columns */
  gap: 16px; /* Adjust the gap between cards */
  justify-content: center;
  align-items: center;


  /* Media Queries for Responsive Card Size */
  @media (max-width: 780px) {
    /* Add styles for smaller screens here */
      grid-template-columns: repeat(3, 1fr);
  }

    @media (max-width: 600px) {
    /* Add styles for smaller screens here */
      grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    /* Add styles for medium-sized screens here */
  }

  /* Add more media queries as needed for other screen sizes */
`;

const Header = styled.div`
background-color: rgba(0, 0, 0, 0.35);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`


const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const[filteredResults,setFilterResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState([]);
  

    const handleFilter = (filter) => {
    // Check if the filter is already active
    if (activeFilters===filter) {
      // Deactivate the filter by removing it
      setActiveFilters([]);
     
      
     
      console.log(activeFilters);
    } else {
      setActiveFilters(filter);
    }
    applyFilter();
  };

  const applyFilter =()=>{
    if (activeFilters.length===0) {
        setFilterResults(restaurants)

    // console.log(restaurants);
    // console.log(filteredResults);
    // console.log(activeFilters.length)
  }
  else{
        // setFilterResults ( restaurants.filter((restaurant) => restaurant.rating === 3.5));

        switch (activeFilters) {
      case 'Japanese':
        // Filter by cuisine type
        setFilterResults (restaurants.filter((restaurant) => restaurant.cuisineType === 'Japanese'));
        break;
      case 'Italian':
        // Filter by cuisine type
        setFilterResults (restaurants.filter((restaurant) => restaurant.cuisineType === 'Italian'));
        break;
      case 'Best Reviewed':
        // Sort by rating in descending order (best reviewed first)
        setFilterResults ( restaurants.slice().sort((a, b) => b.rating - a.rating));
        break;
      case '3.5':
        // Filter by a specific rating (e.g., 3.5)
        setFilterResults (restaurants.filter((restaurant) => restaurant.rating === 3.5));
        break;
      default:
        // No filter or invalid filter, keep the data as-is
        break;
    }

  }
  }


  useEffect(() => {
    
    fetch('http://localhost:3001/restaurants')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setRestaurants(data);
        setFilterResults(data);
      })
      .catch((error) => console.error('Fetch error: ', error));
  }, []);

   useEffect(() => {
    applyFilter();
  }, [activeFilters]);


  return (
    <div className='App'>
        <FilterButtons activeFilters={activeFilters} onFilter={handleFilter} />
        <RestaurantListGrid >
        
  { filteredResults.map((restaurant) => (
      <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          
        ))} 
      
        </RestaurantListGrid>
     
     
    </div>
  );
};


export default RestaurantList;
