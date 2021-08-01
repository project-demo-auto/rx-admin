import * as React from 'react';
import { styled } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import MuiDrawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { Avatar, createTheme, IconButton, SvgIcon, ThemeProvider } from '@material-ui/core';
import MuiTooltip, { TooltipProps, tooltipClasses } from '@material-ui/core/Tooltip';
import { PRIMARY_COLOR } from '../consts';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import SettingsIcon from '@material-ui/icons/Settings';
import { MODULES } from '../data/modules';

const Logo = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(0, 1),
  color: PRIMARY_COLOR,
  ...theme.mixins.toolbar,
}));

const Tooltip = styled(({ className, ...props }: TooltipProps) => (
  <MuiTooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    padding: theme.spacing(1.2, 2),
  },
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    overflowX: 'hidden',
    '& .MuiDrawer-paper': {
      overflowX: 'hidden',
      width: theme.spacing(9),
      background: '#283046',
      boxShadow: theme.shadows[2],
      display: 'flex',
      flexFlow: 'column',
      justifyContent: 'space-between',
      border: 0,
      alignItmes: 'center',
    }
  }),
);

export default function MiniDrawer() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const theme = createTheme({
    palette: {
      primary:{
        main: PRIMARY_COLOR,
      },
      mode: 'light',
    },
  });

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Drawer 
          variant="permanent" 
          open = {true}
          sx={{
            width:'80px',
          }}
        >
          <Box>
            <Logo>
              <SvgIcon fontSize = "large" >
                <path fill="currentColor" d="M22,2C22,2 14.36,1.63 8.34,9.88C3.72,16.21 2,22 2,22L3.94,21C5.38,18.5 6.13,17.47 7.54,16C10.07,16.74 12.71,16.65 15,14C13,13.44 11.4,13.57 9.04,13.81C11.69,12 13.5,11.6 16,12L17,10C15.2,9.66 14,9.63 12.22,10.04C14.19,8.65 15.56,7.87 18,8L19.21,6.07C17.65,5.96 16.71,6.13 14.92,6.57C16.53,5.11 18,4.45 20.14,4.32C20.14,4.32 21.19,2.43 22,2Z" />
              </SvgIcon>
            </Logo>
            <List sx={{
              display:'flex',
              flexFlow:'column',
              alignItems:'center'
            }}>
              {
                MODULES.map((module, index) => {
                  return (
                    <ListItem 
                      button key={module.title} 
                      selected={selectedIndex === index}
                      onClick={(event) => handleListItemClick(event, index)}
                      sx={{
                        width:'48px',
                        minWidth: '48px',
                        height:'40px',
                        '&.Mui-selected':{
                          bgcolor: PRIMARY_COLOR,
                          '&:hover':{
                            bgcolor: PRIMARY_COLOR,
                          },
                        },
                        display:'flex',
                        justifyContent: 'center',
                        mt:0.5,
                        mb:0.5,
                        borderRadius: '5px',
                        '&:hover':{
                          color:'#fff',
                        },
                      }}
                    >
                      <Tooltip title={module.title} arrow placement="right">
                        <ListItemIcon 
                          sx={{
                            p: 0,
                            minWidth:26,
                            color: selectedIndex === index ? '#fff' :'#7d8ba0',
                            '&:hover':{
                              color: selectedIndex === index ? '#fff' :'rgba(255,255,255,0.8)',
                            },
                            display:'flex',
                            justifyContent: 'center'
                          }}
                        >
                          <Box 
                            dangerouslySetInnerHTML={{__html: module.icon}}
                            sx={{
                              display:'flex',
                              alignItems:'center',
                            }}
                          >
                          </Box>
                          
                        </ListItemIcon>
                      </Tooltip>
    
                    </ListItem>                    
                  )
                })
              }
            </List>
          </Box>
          
          <Box sx={{
            display: 'flex',
            flexFlow: 'column',
            alignItems: 'center',
            color: '#7d8ba0',
            pb:1,
          }}>
            <Tooltip title={'主题'} arrow placement="right">
              <IconButton aria-label="theme" size="large" color = "inherit" 
                sx={{
                  '&:hover':{
                    color:'rgba(255,255,255,0.9)',
                  }
                }}
              >
                <SvgIcon>
                  <path fill="currentColor" d="M19,3H14V5H19V18L14,12V21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M10,18H5L10,12M10,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H10V23H12V1H10V3Z" />
                </SvgIcon>
              </IconButton>
            </Tooltip>
            <Tooltip title={'设置'} arrow placement="right">
              <IconButton aria-label="delete" size="large" color = "inherit" 
                sx={{
                  '&:hover':{
                    color:'rgba(255,255,255,0.9)',
                  }
                }}
              >
                <SettingsIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title={'账号管理'} arrow placement="right">
              <IconButton sx={{mt:1}} size="large">
                <Avatar alt="User avatar" src="/static/images/avatar.jpg" sx={{ width: 28, height: 28 }} />
              </IconButton>
            </Tooltip>            
          </Box>
        </Drawer>

      </ThemeProvider>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

              dd
      </Box>
    </Box>
  );
}
