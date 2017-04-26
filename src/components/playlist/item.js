import React, { Component } from 'react';
import { Button } from 'reactstrap';

export default class PlayListItem extends Component {
  constructor(props) {
    super(props);
    this.play = this.props.play.bind(this, this.props.track, this.props.index);
  }

  renderPlayAction() {
    return <Button size='sm' outline color='primary' onClick={this.play}>Play Now</Button>;
  }

  renderPlayStatus() {
    return <b>[ Now Playing ]</b>;
  }

  isTrackNowPlaying() {
    return this.props.now_playing && this.props.index === this.props.now_playing.index;
  }

  render() {
    const track = this.props.track;
    return (
      <div key={track}>
        {track.title}
        { this.isTrackNowPlaying() ? this.renderPlayStatus() : this.renderPlayAction() }
      </div>
    );
  }
}
