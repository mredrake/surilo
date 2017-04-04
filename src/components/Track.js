import React from "react";
import {connect} from 'react-redux';
import store from '../index'


class Track extends React.Component {
    onclick_handler() {
        store.dispatch({
            type: 'ADD',
            track: this.props.track
        })
    }

    render() {
        let image = null
        if (this.props.track.cover_image) {
            image = <img height={150} src={this.props.track.cover_image} onClick={this.onclick_handler.bind(this)}/>
        } else {
            image = <img src='/static/no_cover.png'/>
        }
        return (
            <div>
                {image}
                <div>{this.props.track.title}</div>
            </div>
        )
    }
}

class PlaylistTrack extends React.Component {
    render() {
        return (
            <div>
                <div>{this.props.track.title}</div>
            </div>
        )
    }
}

const mapStateToProps = function (store) {
    return {
        tracks: store.tracks
    }
}

connect(mapStateToProps)(Track)

export {Track, PlaylistTrack}