import React from 'react'
import './Body.css'
import Header from "./partials/Header";
import { useDataLayerValue } from "../../data/DataLayer";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from "./partials/SongRow";
import { useSoundLayerValue } from "../../data/SoundLayer";

function Body({ spotify }) {
    const [{ current_playlist, tracks, track }] = useDataLayerValue();
    const [{ playing, volume }, soundDispatch] = useSoundLayerValue();

    const startPlaying = () => {
        soundDispatch({
            type: "SET_PLAYING",
            playing: true
        });
        soundDispatch({
            type: "SET_VOLUME",
            volume: volume / 100
        });
    };

    const stopPlaying = () => {
        soundDispatch({
            type: "SET_PLAYING",
            playing: false
        });
    };

    return (
        <div className="body">
            <Header spotify={spotify} />
            <div className="body__info">
                <img
                    src={current_playlist ? current_playlist?.images[0]?.url : 'https://firebasestorage.googleapis.com/v0/b/spotify-raghavendra.appspot.com/o/logo.jpg?alt=media&token=f5835577-582c-4bde-861d-0a9127634b8e'}
                    alt="" />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>{current_playlist?.name}</h2>
                    <p>{current_playlist?.description}</p>
                </div>
            </div>

            <div className="body__songs">
                <div className="body__icons">
                    {playing ? <PauseCircleFilledIcon onClick={track ? stopPlaying : null}
                        className='body__shuffle' /> :
                        <PlayCircleFilledIcon onClick={track ? startPlaying : null} fontSize='large'
                            className='body__shuffle' />}
                    <FavoriteIcon fontSize='large' />
                    <MoreHorizIcon />
                </div>
                {tracks?.items.map(track => {
                    return <SongRow track={track.track} key={track.track.id} />
                })}
            </div>
        </div>
    )
}

export default Body