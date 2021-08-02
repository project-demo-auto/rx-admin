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
import { InputAdornment, OutlinedInput, Container, useTheme, Paper } from '@material-ui/core';
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
        <OutlinedInput 
          size = "small" 
          sx={{
            borderRadius: '20px',
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
          <Typography variant="h6" noWrap component="div">
            工具条
          </Typography>
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