import React from "react";
import {connect} from 'react-redux'
import {PlayList} from "../components/PlayList";


export class PlayListContainer extends React.Component {
    render() {
        return <PlayList playlist={is.props.playlist}/>
    }
}

function mapStateToProps(state) {
    return (
        {
            playlist: state.playlist
        }
    )
}

export default connect(mapStateToProps)(PlayList)