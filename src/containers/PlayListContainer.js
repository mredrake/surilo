import React, {Component} from 'react';
import {connect} from 'react-redux';

import PlayListCollection from '../components/playlist/collection';
import {play} from '../actions';

export class PlayListContainer extends Component {
    render() {
        return (
            <div className='playlist'>
                <h1>Playlist</h1>
                <div className='card'>
                    <PlayListCollection playlist={this.props.playlist} play={this.props.play}
                                        now_playing={this.props.now_playing}/>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        play(track) {
            dispatch(play(track));
        }
    };
}

function mapStateToProps(state) {
    return {
        playlist: state.playlist,
        now_playing: state.now_playing,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayListContainer);
