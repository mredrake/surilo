import React from "react";


export default class Track extends React.Component {
    render() {
        let image = null
        if (this.props.track.cover_image) {
            image = <img height={150} src={this.props.track.cover_image} onClick={this.props.onclick}/>
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
