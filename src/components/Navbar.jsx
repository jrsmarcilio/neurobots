
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export const NavBar = (props) => {
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{
        background: `linear-gradient(to bottom, rgba(117,89,49,1) 20%, rgba(3,0,255,0) 100%)`
      }}
    >
      <Toolbar sx={{ flexWrap: 'wrap' }}>
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1, color: 'white' }}>
          {props.companyName}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}