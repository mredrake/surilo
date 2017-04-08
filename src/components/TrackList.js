import React from "react";
import {TrackContainer} from "../containers/TrackContainer";

export default class TrackList extends React.Component {
    render() {
        return (
            <div className="top-tracks">
                <h1>Top Tracks</h1>
                <div className="card">
                    {this.props.tracks.map((track, index) => {
                        return (
                            <TrackContainer key={track.id} track={track}/>
                        )
                    })
                    }
                </div>
            </div>
        )
    }
}