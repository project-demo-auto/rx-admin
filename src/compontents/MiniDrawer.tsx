import * as React from 'react';
import { styled } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import MuiDrawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { Avatar, createTheme, IconButton, SvgIcon, ThemeProvider } from '@material-ui/core';
import MuiTooltip, { TooltipProps, tooltipClasses } from '@material-ui/core/Tooltip';
import { PRIMARY_COLOR } from '../consts';
import { Delete } from '@material-ui/icons';

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
      width: theme.spacing(8),
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
      mode: 'dark',
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
            <List>
              {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                <ListItem 
                  button key={text} 
                  selected={selectedIndex === index}
                  onClick={(event) => handleListItemClick(event, index)}
                  sx = {{
                    '&.Mui-selected':{
                      //backgroundColor: '#161e31',
                      '&:hover':{
                        //backgroundColor: '#161e31',
                      }
                    }
                  }}
                >
                  <Tooltip title={text} arrow placement="right">
                    <ListItemIcon 
                      sx={{
                        ml: 0.5, 
                        pt: 0.6, 
                        pb: 0.6, 
                        minWidth:26,
                        color: selectedIndex === index ? '#fff' :'#7d8ba0',
                        '&:hover':{
                          color: selectedIndex === index ? '#fff' :'rgba(255,255,255,0.8)',
                        }
                      }}>
                      <InboxIcon />
                    </ListItemIcon>
                  </Tooltip>

                </ListItem>
              ))}
            </List>
          </Box>
          
          <Box sx={{
            display: 'flex',
            flexFlow: 'column',
            alignItems: 'center',
            color: '#7d8ba0',
            pb:1,
          }}>
            <IconButton aria-label="delete" size="large" color = "inherit" 
              sx={{
                '&:hover':{
                  color:'rgba(255,255,255,0.8)',
                }
              }}
            >
              <Delete />
            </IconButton>

            <IconButton>
              <Avatar alt="User avatar" src="/static/images/avatar.jpg" sx={{ width: 32, height: 32 }} />
            </IconButton>            
          </Box>
        </Drawer>

      </ThemeProvider>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box>
    </Box>
  );
}
