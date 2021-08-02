import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { observer } from 'mobx-react';
import { InputAdornment, OutlinedInput, Container, useTheme, Paper, Avatar, SvgIcon, Tooltip } from '@material-ui/core';
import { MINI_DRAWER_SIZE } from '../../consts';
import { Search } from '@material-ui/icons';
import InputBase from '@material-ui/core/InputBase';
import { Email } from './Email';

const drawerWidth = 260;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export const Customers = observer((props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
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
        />
      </Toolbar>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color = "transparent"
        elevation = {0}
        sx={{
          width: { 
            lg: `calc(100% - ${drawerWidth}px - ${theme.spacing(MINI_DRAWER_SIZE)})`, 
            sm: `calc(100% - ${theme.spacing(MINI_DRAWER_SIZE)})`,
          },
          backgroundColor:theme.palette.background.default,
          borderBottom: theme.palette.divider + ' solid 1px',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { lg: 'none', md: 'block' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="subtitle1" component="div" sx={{display:'flex', alignItems:'center', mr:2}}>
            <Avatar sx={{mr:1, width: 32, height: 32, color:'red' }}>M</Avatar>
            MicroSoft
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
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ 
          width: { lg: drawerWidth }, 
          flexShrink: { lg: 0 },
        }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { sm: 'block', md: 'none' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs:'none', sm: 'none', md:'none', lg: 'block' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: drawerWidth, 
              left: theme.spacing(MINI_DRAWER_SIZE), 
              borderLeft: theme.palette.divider + ' solid 1px',
              backgroundColor: theme.palette.background.default,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Container maxWidth = 'xl'>
        <Toolbar />
        <Paper 
          variant = 'outlined'
          sx = {{
            mt:theme.spacing(3)
          }}
        >
          <Email />
        </Paper>
      </Container>
    </Box>
  );
})
