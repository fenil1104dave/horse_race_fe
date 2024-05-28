import { NavLink } from "react-router-dom";
import classes from "./sidebar.module.scss";

export const Sidebar = () => {
    return (
        <div className={classes.root}>
            <NavLink to="/horses">Horses</NavLink>
            <NavLink to="/races">Races</NavLink>
        </div>
    );
};
