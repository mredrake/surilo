import React from "react";
import Track from '../components/Track'
import {connect} from 'react-redux';
import store from '../index'

export default class TrackContainer extends React.Component {
    constructor() {
        super()
    }

    onclick_handler() {
        store.dispatch({
            type: 'PLAY',
            yt: this.props.track.yt
        })
    }

    render() {
        return (
            <Track track={this.props.track} onclick={this.onclick_handler.bind(this)}></Track>
        )
    }
}

const mapStateToProps = function (store) {
    return {
        tracks: store.tracks
    }
}

connect(mapStateToProps)(TrackContainer)