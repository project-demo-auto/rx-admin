import { Box, CssBaseline } from "@material-ui/core"
import { Customers } from "./CustomerEmail"
import { MiniDrawer } from "./MiniDrawer"
import { Navigation } from "./Navigation"

export const WorkSpace = ()=>{
  return (
    <Box sx={{ display: 'flex', height:'100%', width: '100%'}}>
      <CssBaseline />
      <MiniDrawer />
      <Box component="main" sx={{ flex: 1, p: 0, height: '100%', display: 'flex'}}>
        <Customers />
      </Box>
      <Navigation/>
    </Box>
  )
}