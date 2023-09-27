import React from 'react';
import styled from 'styled-components';

const FilterButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content:center;
  align-items: center;
  border:1px solid red;
  margin:10px 0 15px;
`;

const FilterButton = styled.button`
  padding: 10px 10px;
  background-color: ${(props) => (props.active ? '#007BFF' : '#E0E0E0')};
  color: ${(props) => (props.active ? '#FFFFFF' : '#000000')};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.active ? '#0056b3' : '#c4c4c4')};
  }
`;


const FilterButtons = ({ activeFilters, onFilter }) => {
  const filters = ['Japanese', 'Italian', 'Best Reviewed','3.5']; // Add more filters as needed

  
  const handleFilterClick = (filter) => {
    onFilter(filter);
  };

  return (
    <FilterButtonWrapper>
      {filters.map((filter) => (
        <FilterButton
       
          key={filter}
          onClick={() => handleFilterClick(filter)}
          className={activeFilters.includes(filter) ? 'active' : ''}
        >
          {filter}
       
        </FilterButton>
      ))}
    </FilterButtonWrapper>
  );
};

export default FilterButtons;
