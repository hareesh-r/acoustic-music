import React from 'react'
import './Sidebar.css'
import SidebarOption from './partials/SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from "../../data/DataLayer";

function Sidebar({ spotify }) {
    const [{ playlists }] = useDataLayerValue();
    console.log(playlists);

    return (
        <div className='sidebar'>
            <img className='sidebar_logo' src='https://firebasestorage.googleapis.com/v0/b/spotify-raghavendra.appspot.com/o/logo.jpg?alt=media&token=f5835577-582c-4bde-861d-0a9127634b8e'
                alt='Acoustic Logo Here' />
            <SidebarOption title='Home' Icon={HomeIcon} />
            <SidebarOption title='Search' Icon={SearchIcon} />
            <SidebarOption title='Your Library' Icon={LibraryMusicIcon} />

            <br />
            <strong className='sidebar__title'>PLAYLISTS</strong>
            <hr />
            <SidebarOption spotify={spotify} title={"Acoustic Music"} id={"2O3UCsm97Tv0bNgoFEpkhh"} key={"2O3UCsm97Tv0bNgoFEpkhh"} />
            {playlists?.items?.map((playlist) => {
                return <SidebarOption spotify={spotify} title={playlist.name} id={playlist.id} key={playlist.id} />
            })}
        </div>
    )
}

export default Sidebar