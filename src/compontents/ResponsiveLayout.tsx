import * as React from 'react';
import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { useTheme } from '@material-ui/core';

export const ResponsiveLayout = (props: {
  expandAt?:'lg'|'md'|'sm'|'xs',
  drawerWidth?: number,
  drawer?: any,
  toolbar?: any,
  children?: any,
  toolbarProps?: any,
}) => {
  const {expandAt='sm', drawerWidth=260, drawer, toolbar, toolbarProps = {}, children} = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ 
      display: 'flex', 
      flex: 1, 
      width:'100%', 
      height: '100%' 
    }}>
      <Box
        component="nav"
        sx={{ 
          width: { lg: drawerWidth }, 
          flexShrink: { lg: 0 },
        }}
        aria-label="mailbox folders"
      >
        <Drawer
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
        <Box
          sx={{
            display: { xs:'none', sm: 'none', md:'none', lg: 'block' },
            width: drawerWidth, 
            borderLeft: theme.palette.divider + ' solid 1px',
            borderRight: theme.palette.divider + ' solid 1px',
            backgroundColor: theme.palette.background.default,
            height: '100%'
          }}
        >
          {drawer}
        </Box>
      </Box>
      <Box sx={{display: 'flex', flex:1, height:'100%', flexFlow:'column'}}>
        <Toolbar {...toolbarProps}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { lg: 'none', md: 'block' } }}
          >
            <MenuIcon />
          </IconButton>
          {toolbar}
        </Toolbar>
        <Box sx={{display: 'flex', flex:1, width:'100%', flexFlow:'column', height: '0'}} >
          {children}
        </Box>
      </Box>
    </Box>
  );
}
