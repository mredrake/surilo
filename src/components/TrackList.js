import React from "react";
import Track from "./Track";
import {connect} from 'react-redux'

class TrackList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.tracks.map((track, index) => {
                    return (
                        <Track key={track.id} track={track}/>
                    )
                })
                }
            </ul>
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