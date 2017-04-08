import React from "react";
import PlayListContainer from "../containers/PlayListContainer";
import {PlayerContainer} from "../containers/PlayerContainer";
import Player from "./Player";

export default class NowPlaying extends React.Component {
    render() {
        return (
            <div>
                <PlayListContainer/>
                {/*<PlayerContainer/>*/}
                <Player/>
            </div>
        )

    }
}
