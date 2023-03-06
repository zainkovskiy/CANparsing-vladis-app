import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadData } from './actions';
import { Linear } from 'components/Linear';
import { TableComponent } from 'components/TableComponent';
import './_base.scss';

export const App = () => {
  const dispatch = useDispatch();
  const loader = useSelector((state) => state.get('loader')); 
  useEffect(() => {
    dispatch(loadData());
  }, [])
  return (
    <>
      {
        loader ? <Linear/> : <TableComponent/>
      }
    </>
  );
};
