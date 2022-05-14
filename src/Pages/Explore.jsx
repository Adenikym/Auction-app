import React from 'react';
import NavBar from '../components/NavBar';
import styled from 'styled-components';
import CustomCard from '../components/CustomCard';

const Explore = () => {
  return (
    <div className="bg-c-black h-fit">
      <NavBar />
      <div className="grid grid-cols-12">
        <FilterWrapper className="h-screen text-c-white col-span-3">
          Filter
          {/* <CheckboxFilter /> */}
        </FilterWrapper>
        <ExploreWrapper className="flex flex-wrap h-screen text-c-white col-span-9">
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
        </ExploreWrapper>
      </div>
    </div>
  );
};

export default Explore;

const ExploreWrapper = styled.div`
  font-size: 14px;
  padding-top: 120px;
`;
const FilterWrapper = styled.div`
  font-size: 100px;
  padding-top: 70px;
  border-right: 2px #fff solid;
`;
