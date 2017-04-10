import React, { Component } from 'react';
import { Button } from 'reactstrap';

export default class PlayList extends Component {
  renderPlayLists() {
    const self = this;
    return this.props.playlist.map((track) => {
      const playNow = self.props.play.bind(self, track);

      return (
        <div key={track.id}>
          {track.title}
          <Button size='sm' outline color='primary' onClick={playNow}>Play Now</Button>
        </div>
      );
    });
  }

  emptyMessage() {
    return <div>No Playlist selected.</div>;
  }

  render() {
    return (
      <div className='playlist'>
        <h1>Playlist</h1>
        <div className='card'>
          { this.props.playlist.length ? this.renderPlayLists() : this.emptyMessage() }
        </div>
      </div>
    );
  }
}
