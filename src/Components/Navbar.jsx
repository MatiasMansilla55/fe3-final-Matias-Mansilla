import React from "react";
import { useContextGlobal, themes } from "../Components/utils/global.context";
import { Link } from "react-router-dom";


const Navbar = () => {
  const { state, dispatch } = useContextGlobal();
  console.log(state);
  const { theme } = state;

  const changeTheme = () => {
    if (theme === themes.light) {
      dispatch({ type: "CHANGE_THEME", payload: themes.dark });
    } else if (theme === themes.dark) {
      dispatch({ type: "CHANGE_THEME", payload: themes.light });
    }
  };
  return (
    <nav style={{background:theme.background}} >
      <img src="/DH.ico" alt="dh-icon" />
  
      <Link to={"/"}>
        <h4 style={{color:theme.font}}>Home</h4>
      </Link>
      <Link to={"/contact"}>
        <h4 style={{color:theme.font}}>Contact</h4>
      </Link>

      <Link to={"/fav"}>
        <h4 style={{color:theme.font}}>Favs</h4>
      </Link>
     
      <button onClick={changeTheme}>Change theme</button>
    </nav>
  );
};

export default Navbar;
