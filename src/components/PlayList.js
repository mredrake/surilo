import React from "react";
import {connect} from 'react-redux'
import {PlaylistTrackContainer} from "../containers/TrackContainer";


export class PlayList extends React.Component {
    render() {
        return (
            <div className="playlist">
                <h1>Playlist</h1>
                <div className="card">
                    {this.props.playlist.map((track, index) => {
                        return (
                            <PlaylistTrackContainer key={track.id} track={track}/>
                        )
                    })
                    }
                </div>
            </div>
        )
    }
}