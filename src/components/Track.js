import React from "react";



export default class Track extends React.Component {
    render() {
        return (
            <div>{this.props.track.title}</div>
        )
    }
}
