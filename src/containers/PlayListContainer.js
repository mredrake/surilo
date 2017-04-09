import React, { Component } from "react";
import { connect } from 'react-redux'

import PlayList from "../components/PlayList";

export class PlayListContainer extends Component {
  render() {
    return (
      <div className="playlist">
        <h1>Playlist</h1>
        <div className="card">
          <PlayList playlist={this.props.playlist} play={this.props.play}/>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    play: function(track) {
      dispatch({
        type: 'PLAY',
        track: track
      });
    }
  };
}

function mapStateToProps(state) {
  return (
    {
      playlist: state.playlist
    }
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayList);
