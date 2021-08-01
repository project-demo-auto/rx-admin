import * as React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { observer } from 'mobx-react';
import { Box, Paper, SvgIcon } from '@material-ui/core';
import { MODULES } from '../data/modules';

export const Navigation = observer(() => {
  const [value, setValue] = React.useState(0);

  return (
    <Paper 
      sx={{ 
        position: 'fixed', 
        bottom: 0, 
        left: 0, 
        right: 0,
        display: { sm: 'none', xs: 'block' } 
      }} 
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        {
          MODULES.map((module, index) => {
            return (
              index < 4
                ? <BottomNavigationAction 
                    key={module.title}
                    label={module.title} 
                    icon={
                      <Box 
                        dangerouslySetInnerHTML={{__html: module.icon}}
                        sx={{
                          display:'flex',
                          alignItems:'center',
                        }}
                      >
                      </Box>
                    } 
                  />
                : undefined
            )
          })
        }

        <BottomNavigationAction label="更多" icon={
          <SvgIcon>
             <path fill="currentColor" d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" />
          </SvgIcon>
        } />
      </BottomNavigation>
    </Paper>
  );
})
