import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '..//NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';


const toolBar =(props) => (
     <header className={classes.Toolbar}>

         {/* <div>MENU</div> */}
         <DrawerToggle clicked={props.DrawerToggleClicked}/>

        <div className={classes.Logo}>
         <Logo 
         //height="80%"
         />
         </div>

         <nav className={classes.DesktopOnly}>
            <NavigationItems/>
         </nav>
     </header>
);

export default toolBar;