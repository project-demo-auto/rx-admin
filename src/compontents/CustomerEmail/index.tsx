import * as React from 'react';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { observer } from 'mobx-react';
import { InputAdornment, useTheme, Paper, Avatar, SvgIcon } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import InputBase from '@material-ui/core/InputBase';
import { Email } from './Email';
import { ResponsiveLayout } from '../ResponsiveLayout';
import CustomerTree from './CustomerTree';

export const Customers = observer(() => {
  const theme = useTheme();

  const drawer = (
    <>
      <Toolbar>
        <InputBase 
          size = "small" 
          sx={{
            borderRadius: '18px',
            height: '36px',
            pl: 1,
            border: theme.palette.divider + ' solid 1px',
            display: 'flex',
            pt: 0.4
          }} 
          startAdornment={
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          }
          placeholder="搜索客户"
        />
      </Toolbar>
      <CustomerTree />
    </>
  );

  const toolbar = (
    <>
      <Typography variant="subtitle1" component="div" sx={{display:'flex', alignItems:'center', mr:2}}>
        <Avatar sx={{mr:1, width: 32, height: 32, color:'red' }}>M</Avatar>
        MicroSoft <SvgIcon><path fill="currentColor" d="M7,10L12,15L17,10H7Z" /></SvgIcon>
      </Typography>
      <Box sx={{flex:1}}></Box>
      <IconButton>
        <SvgIcon>
          <path fill="currentColor" d="M16,17H7V10.5C7,8 9,6 11.5,6C14,6 16,8 16,10.5M18,16V10.5C18,7.43 15.86,4.86 13,4.18V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V4.18C7.13,4.86 5,7.43 5,10.5V16L3,18V19H20V18M11.5,22A2,2 0 0,0 13.5,20H9.5A2,2 0 0,0 11.5,22Z" />
        </SvgIcon>
      </IconButton>
      <IconButton>
        <SvgIcon>
          <path fill="currentColor" d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" />
        </SvgIcon>
      </IconButton>
    </>
  )

  const content = (
    <Box 
      sx={{
        flex:1, 
        display:'flex', 
        height: '0',
      }}
    >
      <Paper 
        variant = 'outlined'
        sx = {{
          m:{
            md:theme.spacing(3)
          },
          flex:1, 
          width:'100%',
          borderRadius:{
            md:'10px',
            sm: 0,
            xs: 0,
          },
          display: 'flex',
        }}
      >
        <Email />
      </Paper>
    </Box>
  ) 

  return (
    <ResponsiveLayout
      drawer = {drawer}
      toolbar = {toolbar}
      toolbarProps = {{
        sx:{
          borderBottom: theme.palette.divider + ' solid 1px',
        }
      }}

    >
      {
        content
      }
    </ResponsiveLayout>
  );
})
