import * as React from 'react';
import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar, { ToolbarProps } from '@material-ui/core/Toolbar';
import { useTheme } from '@material-ui/core';
import { useRef, useState } from 'react';
import { useEffect } from 'react';

export const ResponsiveLayout = (props: {
  defualtDrawerWidth?: number,
  drawer?: any,
  toolbar?: any,
  children?: any,
  toolbarProps?: ToolbarProps,
  hideDrawerOnMobile?: boolean,
}) => {
  const {defualtDrawerWidth =260, drawer, toolbar, toolbarProps = {}, hideDrawerOnMobile, children} = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [drawerWidth, setDrawerWidth] = useState(defualtDrawerWidth);
  const [draging, setDraging] = useState(false);
  const [lastX, setLastX] = useState(0);
  const theme = useTheme();
  const drawerRef = useRef(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMouseDown = (event:React.MouseEvent<HTMLElement>)=>{
    document.body.classList.add('can-not-be-selected');
    setDraging(true);
    setLastX(event.screenX);
  }

  const handleMouseMove = (event:MouseEvent)=>{
    if(draging){
      const newDrawerWidth = drawerWidth - Math.round((lastX - event.screenX)/1.5);
      setDrawerWidth(newDrawerWidth);
      setLastX(event.x);
      if(drawerRef.current){
        ((drawerRef.current as unknown) as HTMLElement).style.width = newDrawerWidth + 'px';
        console.log('哈哈', ((drawerRef.current as unknown) as HTMLElement).style.width)
      }
    }
  }

  const handleMouseup = ()=>{
    document.body.classList.remove('can-not-be-selected');
    setDraging(false);
  }

  //不要加参数[]，要不然事件处理函数里拿不到state
  useEffect(()=>{
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseup)
    return ()=>{
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseup)
    }
  })

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
        {
          !hideDrawerOnMobile &&
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
        }

        <Box
          ref = {drawerRef}
          sx={{
            position: 'relative',
            display: { xs:'none', sm: 'none', md:'none', lg: 'block' },
            //width: drawerWidth, 
            //borderLeft: theme.palette.divider + ' solid 1px',
            borderRight: theme.palette.divider + ' solid 1px',
            //backgroundColor: theme.palette.background.default,
            height: '100%'
          }}
        >
          {drawer}
          <Box
            sx={{
              position: 'absolute',
              width: '10px',
              height: '100%',
              top:0,
              right:'-5px',
              cursor: 'w-resize',
            }}
            onMouseDown = {handleMouseDown} 
            component = 'div'
          >

          </Box>
        </Box>
      </Box>
      <Box sx={{display: 'flex', flex:1, height:'100%', flexFlow:'column'}}>
        <Toolbar {...toolbarProps}>
          {
            !hideDrawerOnMobile &&
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { lg: 'none', md: 'block' } }}
            >
              <MenuIcon />
            </IconButton>            
          }
          {toolbar}
        </Toolbar>
        <Box sx={{display: 'flex', flex:1, width:'100%', flexFlow:'column', height: '0'}} >
          {children}
        </Box>
      </Box>
    </Box>
  );
}
