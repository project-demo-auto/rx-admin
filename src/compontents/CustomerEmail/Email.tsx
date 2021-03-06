import * as React from 'react';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import Typography from '@material-ui/core/Typography';
import { Button, useTheme, InputBase, InputAdornment } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { ResponsiveLayout } from '../ResponsiveLayout';
import { HOVER_SCROLL_BAR } from '../../consts';

export function Email() {
  const theme = useTheme();

  const drawer = (
    <>
      <Box 
        sx = {{
          p: theme.spacing(2),
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Button fullWidth variant="contained">写邮件</Button>
      </Box>
      <Box 
        sx={{ flex: 1, overflowY: 'auto', ...HOVER_SCROLL_BAR}}
      >
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
      </Box>
    </>
  );

  const content = (
    <>
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
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
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
    </>
  )

  const toolbar = (
    <InputBase
      sx={{ ml: 1, flex: 1 }}
      placeholder="搜索邮件"
      startAdornment={
        <InputAdornment position="start">
          <Search />
        </InputAdornment>
      }
      inputProps={{ 
        'aria-label': '搜索邮件',
      }}
    />
  )

  return (
    <ResponsiveLayout
      drawer = {drawer}
      toolbar = {toolbar}
      toolbarProps = {{
        variant:'dense',
        sx:{
          borderBottom: theme.palette.divider + ' solid 1px',
        }
      }}
      hideDrawerOnMobile
    >
      <Box sx={{
        flex:1, display:'flex', flexFlow: 'column', overflowY: 'auto', p: 3,
        ...HOVER_SCROLL_BAR,
      }}>
        {content}
      </Box>
    </ResponsiveLayout>
  );
}
