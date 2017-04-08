import React from "react";

class Track extends React.Component {
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
                <div><a onClick={this.props.play}>Play Now</a></div>
                <div><a onClick={this.props.add_to_playlist}>Add to Playlist</a></div>
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

export {Track, PlaylistTrack}