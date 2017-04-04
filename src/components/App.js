import React from "react";
import Header from './Header'
import Track from './Track'
import TrackList from '../components/TrackList'
import NowPlaying from "./NowPlaying";


export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div className="row">
                    <div className="col-8">
                        <TrackList/>
                    </div>
                    <div className="col-4">
                        <NowPlaying/>
                    </div>
                </div>
            </div>
        )
    }
}