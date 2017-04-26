import React, {Component} from 'react';

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

function loadDogSound(id) {
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    let context = new AudioContext();
    let request = new XMLHttpRequest();
    let url = '/play/' + id + '/';
    let dogBarkingBuffer = null;
    url = 'http://127.0.0.1:8000/media/tracks/1.mp3';
    request.open('POST', url, true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.setRequestHeader('X-CSRFToken', getCookie('csrftoken'));
    request.responseType = 'arraybuffer';


    // Decode asynchronously
    request.onload = function () {
        context.decodeAudioData(request.response, function (buffer) {
            let source = context.createBufferSource();
            source.buffer = buffer;
            source.connect(context.destination);
            source.start(0);
        }, function (err) {
            console.log(err);
        });
    }
    //this is the encryption key
    request.send("key=98753897358975387943");
}

export class Mp3Player extends Component {
    componentDidMount() {


// Fix up prefixing

        loadDogSound(this.props.trackId);
    }

    render() {
        return <span>Hello</span>;
    }

}
