import React from "react";
import {connect} from 'react-redux';
import store from '../index'


class Track extends React.Component {
    add_to_playlist() {
        store.dispatch({
            type: 'ADD',
            track: this.props.track
        })
    }

    play() {
        store.dispatch({
            type: 'PLAY',
            track: this.props.track
        })
    }

    render() {
        let image = null
        if (this.props.track.cover_image) {
            image = <img height={150} src={this.props.track.cover_image}/>
        } else {
            image = <img height={150} src='/static/no_image.svg'/>
        }
        return (
            <div>
                {image}
                <div>{this.props.track.title}</div>
                <div><a onClick={this.play.bind(this)}>Play</a></div>
                <div><a onClick={this.add_to_playlist.bind(this)}>Add to Playlist</a></div>
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