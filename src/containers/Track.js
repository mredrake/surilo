import React from "react";
import Track from '../components/Track'
import { connect } from 'react-redux';

export default class TrackContainer extends React.Component{
    componentDidMount (){
        console.log(123)
    }
    render (){
        return(
            <Track title={this.props.title}></Track>
        )
    }
}

const mapStateToProps = function(store){
    return {
        tracks: store.tracks
    }
}

connect(mapStateToProps)(TrackContainer)