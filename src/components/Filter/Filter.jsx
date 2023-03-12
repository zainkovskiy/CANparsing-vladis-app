import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { loadData } from '../../actions';

export const Filter = () => {
  const loader = useSelector((state) => state.get('loader')); 
  const dispatch = useDispatch();
  const [city, setCity] = useState('novosibirsk');
  const [platform, setPlatform] = useState('cian_full');

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    name === 'city' && setCity(value);
    name === 'platform' && setPlatform(value);
    if (name === 'city' && platform === 'cian_commers') [
      setPlatform('cian_full')
    ]
  }

  const handleClick = () => {
    dispatch(loadData({
      city: city,
      platform: platform
    }));
  }

  return (
    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
      <FormControl fullWidth>
        <InputLabel size='small'>Город</InputLabel>
        <Select
          value={city}
          label="Город"
          onChange={handleChange}
          size='small'
          name="city"
          disabled={loader}
        >
          <MenuItem value='novosibirsk'>Новосибирск</MenuItem>
          <MenuItem value='kemerovo'>Кемерово</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel size='small'>Площадка</InputLabel>
        <Select
          value={platform}
          label="Площадка"
          onChange={handleChange}
          size='small'
          name='platform'
          disabled={loader}
        >
          <MenuItem value='cian_full'>ЦИАН {city === 'novosibirsk' ? '(общая)' : ''}</MenuItem>
          {
            city === 'novosibirsk' &&
            <MenuItem value='cian_commers'>ЦИАН (коммерция)</MenuItem>
          }
          <MenuItem value='avito'>Авито</MenuItem>
          <MenuItem value='domclick'>Домклик</MenuItem>
          <MenuItem value='yandex'>Яндекс</MenuItem>
          <MenuItem value='other'>Остальные</MenuItem>
        </Select>
      </FormControl>
      <Button
        size='small'
        variant='contained'
        sx={{ width: '50%' }}
        onClick={handleClick}
        disabled={loader}
      >
        применить
      </Button>
    </div>
  );
};
