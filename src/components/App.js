import React from "react";
import Header from './Header'
import Track from './Track'
import TrackContainer from '../containers/Track'
import TrackList from '../components/TrackList'


export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <TrackList/>
            </div>
        )
    }
}