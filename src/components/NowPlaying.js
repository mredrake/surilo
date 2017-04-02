import React from "react";
import YouTubePlayer from "./YouTubePlayer";
import PlayList from "./PlayList";

export default class NowPlaying extends React.Component {
    render() {
        return (
            <div>
                <YouTubePlayer/>
                <PlayList/>
            </div>
        )

    }
}
