import React, { Component } from 'react';

import PlaylistItem from './item';

export default class PlayListCollection extends Component {
  renderPlayLists() {
    const self = this;
    return this.props.playlist.map((track) => {
      return <PlaylistItem key={track.id} play={this.props.play} track={track} now_playing={this.props.now_playing} />;
    });
  }

  emptyMessage() {
    return <div>No Playlist selected.</div>;
  }

  render() {
    return (
      <div className='playlist'>
        <div className='card'>
          { this.props.playlist.length ? this.renderPlayLists() : this.emptyMessage() }
        </div>
      </div>
    );
  }
}
