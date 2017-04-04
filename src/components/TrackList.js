import React from "react";
import {connect} from 'react-redux'
import {Track} from "./Track";

class TrackList extends React.Component {
    render() {
        return (
            <div className="top-tracks">
                <h1>Top Tracks</h1>
                <div className="card">
                    {this.props.tracks.map((track, index) => {
                        return (
                            <Track key={track.id} track={track}/>
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
            tracks: state.tracks
        }
    )
}

export default connect(mapStateToProps)(TrackList)