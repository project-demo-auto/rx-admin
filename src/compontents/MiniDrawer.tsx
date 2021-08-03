import * as React from 'react';
import { styled } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import MuiDrawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { Avatar, createTheme, IconButton, SvgIcon, ThemeProvider } from '@material-ui/core';
import MuiTooltip, { TooltipProps, tooltipClasses } from '@material-ui/core/Tooltip';
import { DARK_THEME_META, HOVER_SCROLL_BAR, LIGHT_THEME_META, MINI_DRAWER_SIZE, MODE_LIGHT } from '../consts';
import SettingsIcon from '@material-ui/icons/Settings';
import { MODULES } from '../data/modules';
import { observer } from 'mobx-react';

const Logo = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(0, 1),
  color: theme.palette.mode === MODE_LIGHT ? theme.palette.primary.main : "#fff",
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
      width: theme.spacing(MINI_DRAWER_SIZE),
      background: theme.palette.background.paper,
      boxShadow: theme.shadows[1],
      display: 'flex',
      flexFlow: 'column',
      justifyContent: 'space-between',
      border: 0,
      alignItmes: 'center',
    }
  }),
);

export const MiniDrawer = observer(() => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const theme = createTheme(DARK_THEME_META);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
  };

  return (

      <ThemeProvider theme={theme}>
        <Drawer 
          variant="permanent" 
          open = {true}
          sx={{
            width:theme.spacing(MINI_DRAWER_SIZE),
            display: { sm: 'block', xs: 'none' },
            '& .MuiDrawer-paper':{
              height: '100%',
            },
            '& ::-webkit-scrollbar':{
              lg:{
                display: 'none',
                width: '0.2rem',
                height: '0.2rem',          
              }
            }, 
            '& ::-webkit-scrollbar-track':{
              lg:{
                borderRadius: 0,          
              }
            },
            '& ::-webkit-scrollbar-thumb':{
              lg:{
                borderRadius: '0.2rem',
                background: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.3)' : 'rgba(255, 255, 255, 0.3)',
                transition: 'all .2s',          
              }
            }            
          }}
        >
          <Box
            sx = {{
              height:'100%',
              display: 'flex',
              flexFlow: 'column',
            }}
          >
            <Logo>
              <SvgIcon fontSize = "large" >
                <path fill="currentColor" d="M22,2C22,2 14.36,1.63 8.34,9.88C3.72,16.21 2,22 2,22L3.94,21C5.38,18.5 6.13,17.47 7.54,16C10.07,16.74 12.71,16.65 15,14C13,13.44 11.4,13.57 9.04,13.81C11.69,12 13.5,11.6 16,12L17,10C15.2,9.66 14,9.63 12.22,10.04C14.19,8.65 15.56,7.87 18,8L19.21,6.07C17.65,5.96 16.71,6.13 14.92,6.57C16.53,5.11 18,4.45 20.14,4.32C20.14,4.32 21.19,2.43 22,2Z" />
              </SvgIcon>
            </Logo>
          
            <Box
                sx={{
                  flex:1,
                  overflowY: 'auto', 
                  justifyContent: 'space-between',
                  display: 'flex',
                  flexFlow: 'column',
                  ...HOVER_SCROLL_BAR,
                }}
              >
              <List sx={{
                display:'flex',
                flexFlow:'column',
                alignItems:'center',
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
                            bgcolor: theme.palette.primary.main,
                            '&:hover':{
                              bgcolor: theme.palette.primary.main,
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
            </Box>          
          </Box>
        </Drawer>

      </ThemeProvider>
  );
})
