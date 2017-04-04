import React from "react";
import Player from "./Player";
import PlayList from "./PlayList";

export default class NowPlaying extends React.Component {
    render() {
        return (
            <div>
                <PlayList/>
                <Player/>
            </div>
        )

    }
}
