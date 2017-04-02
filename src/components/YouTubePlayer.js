import React from "react";
import {connect} from 'react-redux'

export class YouTubePlayer extends React.Component {
    render() {
        if (this.props.now_playing) {
            let url = "https://www.youtube.com/embed/" + this.props.now_playing + "?autoplay=1&origin=http://example.com"
            return (
                <iframe id="ytplayer" type="text/html" width="640" height="360"
                        src={url} frameBorder="0"></iframe>
            )
        }else{
            return <div>a</div>
        }
    }
}


function mapStateToProps(state) {
    return (
        {
            now_playing: state.now_playing
        }
    )
}

export default connect(mapStateToProps)(YouTubePlayer)