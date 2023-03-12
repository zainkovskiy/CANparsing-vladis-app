import React from 'react';
import { useSelector } from 'react-redux';
import { Linear } from 'components/Linear';
import { Filter } from 'components/Filter';
import { TableComponent } from 'components/TableComponent';
import './_base.scss';

export const App = () => {
  const loader = useSelector((state) => state.get('loader')); 
  return (
    <>
    <Filter/>
      {
        loader ? <Linear/> : <TableComponent/>
      }
    </>
  );
};
