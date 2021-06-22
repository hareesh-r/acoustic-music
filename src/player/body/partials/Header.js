import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from "../../../data/DataLayer";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function Header({ spotify }) {
    const [{ user }] = useDataLayerValue();

    function refreshPage(){
        window.location.reload();
    } 


    return (
        <div className="header">
            <div className="header__left">
                <SearchIcon />
                <input
                    placeholder='Search for Artists, Songs or Podcasts'
                    type="text" />
            </div>
            <div className="header__right">
                <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
                <h4>{user?.display_name}</h4>
                <ExitToAppIcon type="submit" onClick={refreshPage}/>
            </div>
        </div>
    )
}

export default Header