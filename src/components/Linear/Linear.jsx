import React from "react";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';

export function Linear() {
  return (
    <div className='liner'>
      <Box sx={{ width: '100%' }}>
        <LinearProgress />
          <Typography
            color='#737373'
            align="center"
          >Идет загрузка...</Typography>
      </Box>
    </div>
  );
}