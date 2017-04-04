import React from "react";
import {PlaylistTrack} from "../components/Track";
import {connect} from 'react-redux'


export class PlayList extends React.Component {
    render() {
        return (
            <div className="playlist">
                <h1>Playlist</h1>
                <div className="card">
                    {this.props.playlist.map((track, index) => {
                        return (
                            <PlaylistTrack key={'a' + track.id} track={track}/>
                        )
                    })
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return (
        {
            playlist: state.playlist
        }
    )
}

export default connect(mapStateToProps)(PlayList)