import React, { Component } from 'react';
import { Button } from 'reactstrap';

export default class Track extends Component {
  constructor(props) {
    super(props);

    this.play = props.play.bind(this, props.track);
    this.addToPlaylist = props.addToPlaylist.bind(this, props.track);
  }

  render() {
    let image = null;
    if (this.props.track.cover_image) {
      image = <img height={64} src={this.props.track.cover_image} />;
    } else {
      image = <img height={64} src='/static/no_image.svg' />;
    }
    return (
      <div>
        {image}
        <div>{this.props.track.title}</div>
        <div><Button onClick={this.play} size='sm'>Play Now</Button></div>
        <div><Button onClick={this.addToPlaylist} size='sm'>Add to Playlist</Button></div>
      </div>
    );
  }
}
