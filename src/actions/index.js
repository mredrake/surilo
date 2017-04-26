const BASE_URL = '/api/v1';

export function play(track) {
    console.log(track);
    return {
        type: 'PLAY',
        payload: track,
        request: {
            url: BASE_URL + '/plays/',
            method: 'POST',
            data: {
                track: track.id
            }
        }
    };
}


export function addToPlaylist(track, key) {
    console.log(track);
    return {
        type: 'ADD',
        payload: track
    }
}
