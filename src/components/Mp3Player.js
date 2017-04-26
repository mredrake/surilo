import React, {Component} from 'react';

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

function loadSound(id) {
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    let context = new AudioContext();
    let request = new XMLHttpRequest();
    let url = '/play/' + id + '/';
    request.open('POST', url, true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.setRequestHeader('X-CSRFToken', getCookie('csrftoken'));
    request.responseType = 'arraybuffer';
    request.onload = function () {
        context.decodeAudioData(request.response, function (buffer) {
            let source = context.createBufferSource();
            source.buffer = buffer;
            source.connect(context.destination);
            source.start(0);
        }, function (err) {
            console.log(err);
        });
    };
    request.send();
}

export class Mp3Player extends Component {
    componentDidMount() {
        loadSound(this.props.trackId);
    }

    render() {
        return <span>Playing</span>;
    }

}
