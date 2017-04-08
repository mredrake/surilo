import React from "react";
import {connect} from 'react-redux'
import TrackList from "../components/TrackList";

class TrackListContainer extends React.Component {
    render() {
        return (
            <TrackList tracks={this.props.tracks} />
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

export default connect(mapStateToProps)(TrackListContainer)