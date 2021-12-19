import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import TvIcon from '@mui/icons-material/Tv';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';



  const useStyles = makeStyles({
    root: {
      width: "100%",
      position: "fixed",
      bottom: 0,
      backgroundColor: "#202020!important",
      zIndex: 100,
    },
  });
  
  export default function SimpleBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const navigate = useNavigate(); 

    useEffect(() => {
      if(value === 0) navigate('/');
      else if(value === 1) navigate('/movies');
      else if(value === 2) navigate('/series');
      else if(value === 3) navigate('/search');
    },[value, navigate]);

  return (
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction 
        style={{color:"white"}}
        label="Trending" 
        icon={<WhatshotIcon />} />

        <BottomNavigationAction
         style={{color:"white"}}
         label="Movies"
          icon={<MovieIcon />} />

        <BottomNavigationAction
         style={{color:"white"}}
         label="TV Series"
          icon={<TvIcon />} />

        <BottomNavigationAction
         style={{color:"white"}}
        label="Search"
        icon={<SearchIcon />} />
      </BottomNavigation>
    
  );
}