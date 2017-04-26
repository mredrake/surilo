const BASE_URL = '/api/v1';

export function play(track, index) {
    return {
        type: 'PLAY',
        payload: index,
        request: {
            url: BASE_URL + '/plays/',
            method: 'POST',
            data: {
                track: track.id
            }
        }
    };
}

export function playAndAdd(track) {
    return {
        type: 'PLAY_AND_ADD',
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


export function addToPlaylist(track) {
    return {
        type: 'ADD',
        payload: track
    }
}
